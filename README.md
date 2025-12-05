# Zcash Browser Wallet 🛡️

A secure, private Zcash wallet extension built with **Rust (WASM)** and **React**.

## Features
- **Mainnet Support**: Fully functional on Zcash Mainnet.
- **Orchard Shielded**: Uses the latest **Orchard** protocol for maximum privacy.
- **Unified Addresses**: Generates ZIP 316 compliant Unified Addresses (Orchard-only).
- **Secure**: Private keys are derived using standard ZIP 32 and never leave your device.
- **Fast Sync**: Connects to lightwalletd via HTTP proxy (Tatum/GetBlock).

## Tech Stack
- **Core**: Rust (`wallet-core`, `zcash_client_backend`, `orchard`)
- **WASM**: `wasm-bindgen` for browser compatibility.
- **Frontend**: React, TypeScript, Vite.

## Build Instructions

### Prerequisites
- Rust & Cargo
- Node.js & npm
- `wasm-pack`

### Build WASM
```bash
cd wasm
wasm-pack build --target web
```

### Build Frontend
```bash
cd frontend
npm install
npm run build
```

## License
MIT
