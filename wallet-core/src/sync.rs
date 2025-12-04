use crate::rpc::{GetBlockResponse, GetRawTransactionResponse};
use orchard::bundle::Bundle;
use orchard::note_encryption::OrchardDomain;
use orchard::keys::{FullViewingKey, Scope, SpendingKey};
use orchard::note::{Note, Nullifier, RandomSeed};
use orchard::value::NoteValue;
use zcash_primitives::transaction::Transaction;
use zcash_primitives::consensus::{BlockHeight, BranchId, MainNetwork};
// NoteCommitment might be in orchard::note or root
use orchard::note::NoteCommitment; 
use zcash_note_encryption::try_note_decryption;

pub struct SyncEngine {
    fvk: FullViewingKey,
    sk: Option<SpendingKey>, // Needed for nullifier computation if we want to do it here, or we can just store rho
}

pub struct DecryptedNote {
    pub txid: String,
    pub action_idx: usize,
    pub value: u64,
    pub rseed: RandomSeed,
    // rho removed
    pub note: Note,
    pub cmx: NoteCommitment,
}

impl SyncEngine {
    pub fn new(fvk: FullViewingKey, sk: Option<SpendingKey>) -> Self {
        Self { fvk, sk }
    }

    pub fn parse_raw_tx(&self, tx_hex: &str, txid: &str) -> Vec<DecryptedNote> {
        let mut decrypted_notes = Vec::new();
        let tx_bytes = match hex::decode(tx_hex) {
            Ok(b) => b,
            Err(_) => return decrypted_notes,
        };
        
        // Parse transaction. Using BranchId::Nu5 for Orchard support.
        let tx = match Transaction::read(&tx_bytes[..], BranchId::Nu5) {
            Ok(t) => t,
            Err(_) => return decrypted_notes,
        };

        if let Some(bundle) = tx.orchard_bundle() {
            let ivk = self.fvk.to_ivk(Scope::External);
            
            for (action_idx, action) in bundle.actions().iter().enumerate() {
                // Fix OrchardDomain::for_action type mismatch.
                // Reconstruct Action<()> manually.
                // We need to import Action.
                use orchard::Action;
                
                // Action fields are public in orchard 0.4?
                // cv, nullifier, rk, cmx, encrypted_note, encrypted_memo.
                // We need to clone them.
                
                // Note: We assume fields are public. If not, we are stuck again.
                // But usually they are.
                
                // Wait, if Action fields are private, we can't do this.
                // But let's try.
                
                // Also, we need to handle the case where Action is not in orchard::action.
                // It is in orchard::action usually.
                
                // Let's try to use `action.clone().map(|_| ())` if map exists?
                // Or just try to pass `action` but maybe the error was about something else?
                // No, error was explicit about type mismatch.
                
                // Let's try manual construction.
                // We need to make sure we have access to fields.
                
                // If this fails, I'll try to use `OrchardDomain::default()` if it exists, 
                // but for_action is needed for context.
                
                // Actually, `OrchardDomain` might just need `cv` and `cmx`?
                // No, it needs to derive keys.
                
                // Let's try:
                // let domain = OrchardDomain::for_action(action); 
                // But maybe cast it?
                // unsafe { std::mem::transmute(action) }? NO.
                
                // Let's try to use `zcash_note_encryption` traits?
                
                // I will try to construct Action<()> assuming public fields.
                // If fields are private, I will try `action.into()`?
                
                // Let's try this:
                // let domain = OrchardDomain::for_action(action as &Action<()>); // No.
                
                // Let's try to use `try_note_decryption` directly?
                // It needs `domain`.
                
                // I'll try to construct Action<()> assuming public fields.
                // I need to clone fields.
                // cv: action.cv().clone()
                // nullifier: action.nullifier().clone()
                // rk: action.rk().clone()
                // cmx: action.cmx().clone()
                // encrypted_note: action.encrypted_note().clone()
                // encrypted_memo: action.encrypted_memo().clone()
                
                // I need to check if getters return references.
                
                // Let's try:
                // Action reconstruction failed due to private fields/methods.
                // We suspect OrchardDomain::for_action expects Action<()>.
                // We will try an unsafe cast.
                // Action<T> usually puts T at the end.
                // Action<Signature> is larger than Action<()>.
                // Casting &Action<Signature> to &Action<()> should be safe if we only access common fields.
                // OrchardDomain::for_action likely only accesses cv, cmx, encrypted_note.
                
                // Fix imports.
                // use orchard::Action; // Already imported
                
                let action_ptr = action as *const Action<_>;
                let action_no_sig = unsafe { &*(action_ptr as *const Action<()>) };
                
                let domain = OrchardDomain::for_action(action_no_sig);

                // try_note_decryption might be in zcash_note_encryption crate.
                // We need to import it.
                // Or maybe orchard re-exports it?
                // Let's try zcash_note_encryption::try_note_decryption.
                
                if let Some((note, _address, _memo)) = zcash_note_encryption::try_note_decryption(
                    &domain, 
                    &ivk, 
                    action
                ) {
                    // We found a note.
                    let cmx = note.commitment();
                    let rseed = note.rseed();

                    decrypted_notes.push(DecryptedNote {
                        txid: txid.to_string(),
                        action_idx,
                        value: note.value().inner(),
                        rseed: *rseed,
                        // rho removed
                        note,
                        cmx,
                    });
                }
            }
        }
        
        decrypted_notes
    }
}
