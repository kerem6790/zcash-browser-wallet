use orchard::keys::{SpendingKey, FullViewingKey, Scope};
use orchard::Address;

pub struct WalletKeys {
    pub spending_key: SpendingKey,
    pub fvk: FullViewingKey,
    pub address: Address,
}

impl WalletKeys {
    pub fn from_seed(seed_hex: &str) -> Result<Self, String> {
        let seed = hex::decode(seed_hex).map_err(|_| "Invalid hex seed".to_string())?;
        
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
        use f4jumble::f4jumble;
        
        // Proper Bech32m encoding for Unified Address with F4Jumble
        // HRP: "u" for Mainnet
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
        
        // ZIP 316 Padding:
        // "The input to F4Jumble... is padded with zero bytes until its length is a multiple of 16 bytes, and at least 48 bytes."
        let len = payload.len();
        let mut target_len = len;
        if target_len < 48 {
            target_len = 48;
        }
        while target_len % 16 != 0 {
            target_len += 1;
        }
        
        let padding_needed = target_len - len;
        payload.resize(target_len, 0);
        
        // Apply F4Jumble
        let jumbled = f4jumble(&payload).expect("F4Jumble failed");
        
        // Convert to base32
        let data = jumbled.to_base32();
        
        // Encode using Bech32m
        bech32::encode(hrp, data, Variant::Bech32m).unwrap_or_else(|_| "Error encoding address".to_string())
    }
}
