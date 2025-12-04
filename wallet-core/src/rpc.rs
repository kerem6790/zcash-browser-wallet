use serde::{Deserialize, Serialize};
use serde_json::Value;

#[derive(Serialize)]
pub struct JsonRpcRequest {
    pub jsonrpc: String,
    pub id: String,
    pub method: String,
    pub params: Vec<Value>,
}

impl JsonRpcRequest {
    pub fn new(method: &str, params: Vec<Value>) -> Self {
        Self {
            jsonrpc: "2.0".to_string(),
            id: "1".to_string(),
            method: method.to_string(),
            params,
        }
    }
}

#[derive(Deserialize, Debug)]
pub struct JsonRpcResponse<T> {
    pub result: Option<T>,
    pub error: Option<JsonRpcError>,
}

#[derive(Deserialize, Debug)]
pub struct JsonRpcError {
    pub code: i32,
    pub message: String,
}

// Response types
#[derive(Deserialize, Debug)]
pub struct GetBlockResponse {
    pub tx: Vec<String>, // List of txids (if verbosity=1)
    pub height: u64,
    // Add other fields if needed
}

#[derive(Deserialize, Debug)]
pub struct GetRawTransactionResponse {
    pub hex: String,
    // We only need the hex to parse it with zcash_primitives
}

pub fn build_getblock_request(height: u64) -> JsonRpcRequest {
    JsonRpcRequest::new("getblock", vec![json!(height.to_string()), json!(1)])
}

pub fn build_getrawtransaction_request(txid: &str) -> JsonRpcRequest {
    JsonRpcRequest::new("getrawtransaction", vec![json!(txid), json!(0)]) // 0 for hex
}

// Helper macro for json! if not using serde_json::json directly in all places or if we want to avoid the macro dependency in lib.rs signatures
// But we have serde_json.
use serde_json::json;
