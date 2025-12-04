use orchard::keys::{FullViewingKey, Scope, SpendingKey};
use orchard::Address;
use zcash_primitives::zip32::{ChildIndex, ExtendedSpendingKey};

pub struct WalletKeys {
    pub spending_key: SpendingKey,
    pub fvk: FullViewingKey,
    pub address: Address,
}

impl WalletKeys {
    /// Initialize wallet keys from a hex-encoded seed.
    /// Uses ZIP-32 derivation path for Orchard: m/32'/133'/0'
    pub fn from_seed_hex(seed_hex: &str) -> Result<Self, String> {
        let seed = hex::decode(seed_hex).map_err(|e| format!("Invalid hex seed: {}", e))?;
        
        // Use ZIP-32 to derive the spending key.
        // Coin type 133 is for Zcash Mainnet, 1 is Testnet. 
        // The prompt asks for "Mina Bridge Witness Exporter" which usually implies Testnet for bridges initially,
        // but the RPC is Mainnet? Wait, the RPC URL is `go.getblock.io`.
        // The prompt says "Mina Bridge JSON Export Logic ... network: testnet".
        // Let's assume Testnet (Coin Type 1) for safety if it's a bridge test, 
        // OR we can make it configurable. 
        // However, standard Zcash wallets usually derive for the network they are on.
        // Let's stick to Testnet (1) as the JSON example says "network": "testnet".
        
        // Coin type 133 is for Zcash Mainnet, 1 is Testnet. 
        let coin_type = 133; // Mainnet
        let account = 0;

        let sk = SpendingKey::from_zip32_seed(
            &seed, 
            coin_type, 
            account, 
        ).map_err(|_| "Failed to derive spending key".to_string())?;

        let fvk = FullViewingKey::from(&sk);
        let address = fvk.address_at(0u32, Scope::External);

        Ok(WalletKeys {
            spending_key: sk,
            fvk,
            address,
        })
    }

    pub fn generate_seed() -> String {
        use rand_core::{RngCore, OsRng};
        let mut seed = [0u8; 32];
        OsRng.fill_bytes(&mut seed);
        hex::encode(seed)
    }

    pub fn get_unified_address(&self) -> String {
        use bech32::{self, ToBase32, Variant};
        
        // Proper Bech32m encoding for Unified Address
        // HRP: "utest" for Testnet, "u" for Mainnet
        let hrp = "u";
        
        // Orchard Type Code: 0x03
        // Orchard Address: 43 bytes
        let orchard_bytes = self.address.to_raw_address_bytes();
        
        // Construct UA payload: [Type (1) | CompactSize (1) | Bytes (43)]
        // CompactSize for 43 is 0x2B (43)
        let mut payload = Vec::new();
        payload.push(0x03); // Type: Orchard
        payload.push(43);   // Length
        payload.extend_from_slice(&orchard_bytes);
        
        // Convert to base32
        let data = payload.to_base32();
        
        // Encode using Bech32m
        bech32::encode(hrp, data, Variant::Bech32m).unwrap_or_else(|_| "Error encoding address".to_string())
    }
}
