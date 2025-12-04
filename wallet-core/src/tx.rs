use crate::keys::WalletKeys;

pub fn build_tx(
    keys: &WalletKeys, 
    recipient: &str, 
    amount: u64,
    _orchard_params: &[u8], 
) -> Result<String, String> {
    // Orchard Transaction (Mock)
    // We simulate the creation of an Orchard transaction (NU5).
    
    if amount == 0 {
        return Err("Amount must be greater than 0".to_string());
    }
    
    // Return a hex that is clearly a mock but carries the data
    Ok(format!("mock_orchard_tx_v5_to_{}_amount_{}", recipient, amount))
}
