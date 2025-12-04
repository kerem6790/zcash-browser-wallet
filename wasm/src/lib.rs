use wasm_bindgen::prelude::*;
use wasm_bindgen::JsCast;
use wasm_bindgen_futures::JsFuture;
use wallet_core::keys::WalletKeys;
use wallet_core::sync::{SyncEngine, DecryptedNote};
use wallet_core::merkle::OrchardTree;
// use wallet_core::export_mina::create_export;
use wallet_core::rpc::{build_getblock_request, build_getrawtransaction_request, GetBlockResponse, GetRawTransactionResponse, JsonRpcResponse};
use serde::{Serialize, Deserialize};
use std::cell::RefCell;
use std::rc::Rc;

// ... (allocator)

// ... (allocator)

#[derive(Serialize, Deserialize)]
pub struct JsNote {
    pub txid: String,
    pub value: u64,
    pub position: u64,
}

#[wasm_bindgen]
pub struct JsWallet {
    keys: WalletKeys,
    tree: RefCell<OrchardTree>,
    notes: RefCell<Vec<DecryptedNote>>,
    last_height: RefCell<u64>,
    sync_engine: SyncEngine, // Add sync engine
}

#[wasm_bindgen]
impl JsWallet {
    #[wasm_bindgen(constructor)]
    pub fn new(seed_hex: &str) -> Result<JsWallet, JsValue> {
        let keys = WalletKeys::from_seed(seed_hex).map_err(|e| JsValue::from_str(&e))?;
        // We need fvk and sk for sync engine
        let engine = SyncEngine::new(keys.fvk.clone(), Some(keys.spending_key.clone()));
        
        Ok(JsWallet {
            keys,
            tree: RefCell::new(OrchardTree::new()),
            notes: RefCell::new(Vec::new()),
            last_height: RefCell::new(0),
            sync_engine: engine,
        })
    }
    
    // ... (get_address, get_balance, list_notes, export_mina_bridge)

    pub async fn sync_until(&self, target_height: u64) -> Result<JsValue, JsValue> {
        let rpc_url = "https://zcash-mainnet.gateway.tatum.io";
        let window = web_sys::window().ok_or("No window")?;

        // Fetch block
        let request_body = build_getblock_request(target_height);
        let body_str = serde_json::to_string(&request_body).map_err(|e| JsValue::from_str(&e.to_string()))?;
        
        let mut opts = web_sys::RequestInit::new();
        opts.method("POST");
        opts.body(Some(&JsValue::from_str(&body_str)));
        
        let request = web_sys::Request::new_with_str_and_init(rpc_url, &opts)?;
        request.headers().set("Content-Type", "application/json")?;
        
        let resp_value = JsFuture::from(window.fetch_with_request(&request)).await?;
        let resp: web_sys::Response = resp_value.dyn_into()?;
        let json = JsFuture::from(resp.json()?).await?;
        
        let rpc_response: JsonRpcResponse<GetBlockResponse> = serde_wasm_bindgen::from_value(json)
            .map_err(|e| JsValue::from_str(&format!("Failed to parse block response: {:?}", e)))?;
            
        let response_obj = rpc_response.result.ok_or_else(|| JsValue::from_str("No result in block response"))?;
            
        // Process txs
        for txid in response_obj.tx {
            // Fetch raw tx
            let tx_req = build_getrawtransaction_request(&txid);
            let tx_body = serde_json::to_string(&tx_req).map_err(|e| JsValue::from_str(&e.to_string()))?;
            
            let mut tx_opts = web_sys::RequestInit::new();
            tx_opts.method("POST");
            tx_opts.body(Some(&JsValue::from_str(&tx_body)));
            
            let tx_request = web_sys::Request::new_with_str_and_init(rpc_url, &tx_opts)?;
            tx_request.headers().set("Content-Type", "application/json")?;
            
            let tx_resp_val = JsFuture::from(window.fetch_with_request(&tx_request)).await?;
            let tx_resp: web_sys::Response = tx_resp_val.dyn_into()?;
            let tx_json = JsFuture::from(tx_resp.json()?).await?;
            
            // We might need to handle "result" wrapper if the helper struct doesn't.
            // `GetRawTransactionResponse` struct in `rpc.rs` should match the JSON RPC result.
            // Usually JSON RPC returns `{ "result": ... }`.
            // `serde_wasm_bindgen::from_value` tries to map the whole object?
            // If `GetBlockResponse` has `result` field, we are good.
            // Let's check `rpc.rs`.
            // `JsonRpcResponse<T>` has `result`.
            
            // `getrawtransaction` with verbose=0 returns the hex string directly in `result`.
            let rpc_response: JsonRpcResponse<String> = serde_wasm_bindgen::from_value(tx_json)
                .map_err(|e| JsValue::from_str(&format!("Failed to parse tx response: {:?}", e)))?;
                
            if let Some(hex_str) = rpc_response.result {
                let decrypted = self.sync_engine.parse_raw_tx(&hex_str, &txid);
                for note in decrypted {
                    // Append to tree
                    self.tree.borrow_mut().append(note.cmx.clone());
                    // Store note
                    self.notes.borrow_mut().push(note);
                }
            }
        }
        
        *self.last_height.borrow_mut() = target_height;
        Ok(JsValue::from_str("Synced"))
    }

    pub fn get_address(&self) -> String {
        // Return Unified Address string (u...)
        self.keys.get_unified_address()
    }

    pub fn get_balance(&self) -> u64 {
        self.notes.borrow().iter().map(|n| n.value).sum()
    }

    pub fn list_notes(&self) -> JsValue {
        // Return array of simple JS objects
        let notes = self.notes.borrow();
        let js_notes: Vec<JsNote> = notes.iter().map(|n| JsNote {
            txid: n.txid.clone(),
            value: n.value,
            position: 0, 
        }).collect();
        serde_wasm_bindgen::to_value(&js_notes).unwrap()
    }


    pub fn send(&self, recipient: &str, amount: u64) -> Result<String, JsValue> {
        use wallet_core::tx::build_tx;
        
        // Orchard params are not passed as files in the same way as Sapling.
        // We pass an empty slice for now or remove the arg from build_tx.
        // Let's update build_tx to not require params for this mock.
        
        let tx_hex = build_tx(&self.keys, recipient, amount, &[])
            .map_err(|e| JsValue::from_str(&e))?;
            
        Ok(tx_hex)
    }
}

#[wasm_bindgen]
pub fn generate_wallet_seed() -> String {
    use wallet_core::keys::WalletKeys;
    WalletKeys::generate_seed()
}

