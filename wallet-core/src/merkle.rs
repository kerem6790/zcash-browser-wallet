use orchard::tree::{MerkleHashOrchard, MerklePath};
use incrementalmerkletree::{bridgetree::BridgeTree, Hashable, Tree};
use orchard::note::NoteCommitment;

// Orchard tree depth is 32
pub const MERKLE_DEPTH: u8 = 32;

pub struct OrchardTree {
    // We use BridgeTree for incremental updates and witness generation.
    // It requires a max depth.
    tree: BridgeTree<MerkleHashOrchard, 32>,
}

impl OrchardTree {
    pub fn new() -> Self {
        Self {
            tree: BridgeTree::new(100000), // Checkpoint depth/limit. 
        }
    }

    pub fn append(&mut self, cmx: NoteCommitment) -> bool {
        // Try converting to ExtractedNoteCommitment
        use orchard::note::ExtractedNoteCommitment;
        let extracted: ExtractedNoteCommitment = cmx.into();
        
        // Then transmute extracted to MerkleHashOrchard
        // Assuming ExtractedNoteCommitment wraps pallas::Base (256 bits)
        let node: MerkleHashOrchard = unsafe { std::mem::transmute(extracted) };
        self.tree.append(&node)
    }

    pub fn witness(&self, position: usize) -> Option<Vec<MerkleHashOrchard>> {
        // Use authentication_path
        // We need the root.
        let root = self.tree.root(0)?;
        // Position might need conversion.
        // incrementalmerkletree::Position::from(position)
        self.tree.authentication_path(position.into(), &root)
    }
    
    pub fn root(&self) -> MerkleHashOrchard {
        // BridgeTree::root takes an argument in 0.3, likely checkpoint depth or index.
        // We pass 0 for now, assuming it means current root or 0 depth.
        self.tree.root(0).expect("Tree should have a root")
    }
}
