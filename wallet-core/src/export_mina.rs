use serde::Serialize;
use serde_json::json;
use crate::sync::DecryptedNote;
use crate::merkle::OrchardTree;
use crate::witness::{poseidon_hash_pallas, bytes_to_pallas};
use orchard::keys::SpendingKey;
use orchard::note::Nullifier;

#[derive(Serialize)]
pub struct MinaBridgeExport {
    pub version: u32,
    pub network: String,
    pub txid: String,
    pub orchard: OrchardExport,
}

#[derive(Serialize)]
pub struct OrchardExport {
    #[serde(rename = "noteCommitment")]
    pub note_commitment: String,
    pub amount: String,
    #[serde(rename = "recipientAddressHash")]
    pub recipient_address_hash: String,
    pub anchor: String,
    #[serde(rename = "merklePath")]
    pub merkle_path: Vec<String>,
    pub position: u64,
    pub nullifier: String,
}

pub fn create_export(
    note: &DecryptedNote,
    tree: &OrchardTree,
    position: usize,
    sk: &SpendingKey,
) -> Result<String, String> {
    // 1. Note Commitment
    let cmx = note.cmx.clone();
    use ff::PrimeField; // Ensure PrimeField is in scope
    use pasta_curves::pallas;
    use orchard::note::ExtractedNoteCommitment;
    
    // Convert to ExtractedNoteCommitment first
    let extracted: ExtractedNoteCommitment = cmx.into();
    
    // ExtractedNoteCommitment is ExtractedNoteCommitment(pallas::Base). Field is private.
    // We use unsafe transmute to get the inner value.
    let cmx_base: pallas::Base = unsafe { std::mem::transmute(extracted) };
    let cmx_bytes = cmx_base.to_repr();
    let cmx_hex = format!("0x{}", hex::encode(cmx_bytes));

    // 2. Amount
    let amount = note.value.to_string();

    // 3. Recipient Address Hash
    // We need the recipient address. The `DecryptedNote` has the `Note` which has the `recipient`.
    let recipient = note.note.recipient();
    // Recipient is an Orchard Address (diversified).
    // We need to extract pk_d.
    // pk_d is private, but we can get it from raw bytes.
    // Raw address = [diversifier (11 bytes) | pk_d (32 bytes)]
    let raw_bytes = recipient.to_raw_address_bytes();
    let pk_d_bytes = &raw_bytes[11..];
    
    // We need to convert pk_d bytes to field elements for Poseidon.
    // pk_d is a point on Pallas.
    // We probably hash the x coordinate or the compressed bytes?
    // The prompt says "Poseidon(pk_d_receiver_bytes)".
    // Let's assume we convert the bytes to a field element (or two).
    // Pallas points are (x, y). Compressed is 32 bytes.
    // Let's try to interpret the 32 bytes as a field element.
    let pk_d_field = bytes_to_pallas(pk_d_bytes).ok_or("Invalid pk_d bytes")?;
    let recipient_hash = poseidon_hash_pallas(&[pk_d_field]);
    // Convert hash to hex
    // pallas::Base to bytes
    // use ff::PrimeField; // Already imported
    let recipient_hash_hex = format!("0x{}", hex::encode(recipient_hash.to_repr()));
    let anchor = tree.root();
    // MerkleHashOrchard is MerkleHashOrchard(pallas::Base). Field is private.
    let anchor_base: pallas::Base = unsafe { std::mem::transmute(anchor) };
    let anchor_bytes = anchor_base.to_repr();
    let anchor_hex = format!("0x{}", hex::encode(anchor_bytes));

    // 4. Merkle Path & Anchor
    let path = tree.witness(position).ok_or("Could not generate witness")?;
    
    // Path is Vec<MerkleHashOrchard>
    let mut merkle_path = Vec::new();
    for node in path {
        // MerkleHashOrchard is private wrapper around pallas::Base
        use pasta_curves::pallas;
        let node_base: pallas::Base = unsafe { std::mem::transmute(node) };
        let node_bytes = node_base.to_repr();
        merkle_path.push(format!("0x{}", hex::encode(node_bytes)));
    }

    // 5. Nullifier
    // nf = PRF_nf(nk, rho)
    // We have rho in `note`. We have `sk`.
    // `sk` -> `fvk` -> `nk`.
    let fvk: orchard::keys::FullViewingKey = sk.into();
    // We need the Nullifier Key (nk).
    // `fvk` has it?
    // `sk` definitely has it.
    // `note.nullifier(&fvk)`?
    // `Note` has a `nullifier` method that takes `FullViewingKey`.
    let nullifier = note.note.nullifier(&fvk);
    let nullifier_hex = format!("0x{}", hex::encode(nullifier.to_bytes()));

    let export = MinaBridgeExport {
        version: 1,
        network: "testnet".to_string(),
        txid: note.txid.clone(),
        orchard: OrchardExport {
            note_commitment: cmx_hex,
            amount,
            recipient_address_hash: recipient_hash_hex,
            anchor: anchor_hex,
            merkle_path,
            position: position as u64,
            nullifier: nullifier_hex,
        },
    };

    serde_json::to_string_pretty(&export).map_err(|e| e.to_string())
}
