import { useState, useEffect } from 'react'
import init, { JsWallet, generate_wallet_seed } from 'wasm'
import { Modal } from './components/Modal'
import './App.css'

function App() {
  const [wallet, setWallet] = useState<JsWallet | null>(null)
  const [seed, setSeed] = useState('') // Empty default for login
  const [balance, setBalance] = useState<number>(0)
  const [syncHeight, setSyncHeight] = useState<number>(2700000) // Start height
  const [notes, setNotes] = useState<any[]>([])
  const [exportJson, setExportJson] = useState<string>('')
  const [view, setView] = useState<'home' | 'notes' | 'send'>('home')
  const [isWasmReady, setIsWasmReady] = useState(false)

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [generatedSeed, setGeneratedSeed] = useState('')

  useEffect(() => {
    init().then(() => {
      console.log("WASM initialized")
      setIsWasmReady(true)
    }).catch(e => {
      console.error("WASM init failed", e)
      alert("WASM init failed: " + e)
    })
  }, [])

  const createWallet = () => {
    if (!isWasmReady) return
    try {
      const w = new JsWallet(seed)
      setWallet(w)
      updateBalance(w)
    } catch (e) {
      console.error(e)
      alert("Failed to init wallet: " + e)
    }
  }

  const updateBalance = (w: JsWallet) => {
    setBalance(Number(w.get_balance()))
  }

  const handleSync = async () => {
    if (!wallet) return
    try {
      await wallet.sync_until(BigInt(syncHeight))
      updateBalance(wallet)
      alert("Synced!")
    } catch (e) {
      console.error(e)
      alert("Sync failed: " + e)
    }
  }

  const loadNotes = () => {
    if (!wallet) return
    const n = wallet.list_notes()
    setNotes(n)
  }

  const handleExport = (index: number) => {
    if (!wallet) return
    try {
      const json = wallet.export_mina_bridge(index)
      setExportJson(json)
    } catch (e) {
      alert("Export failed: " + e)
    }
  }

  const [recipient, setRecipient] = useState('')
  const [amount, setAmount] = useState('')
  const [txHex, setTxHex] = useState('')

  const createNewWallet = () => {
    if (!isWasmReady) return
    try {
      const newSeed = generate_wallet_seed()
      setGeneratedSeed(newSeed)
      setSeed(newSeed) // Auto-fill
      setIsModalOpen(true)
    } catch (e) {
      console.error(e)
      alert("Failed to generate seed: " + e)
    }
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    alert("Copied to clipboard!")
  }

  if (!wallet) {
    return (
      <div className="container" style={{ justifyContent: 'center' }}>
        <div className="header">
          <h1>Zcash Wallet</h1>
        </div>
        <div className="card">
          <h2 style={{ fontSize: '18px', marginBottom: '16px' }}>Welcome Back</h2>
          <p style={{ marginBottom: '16px', color: 'var(--text-secondary)', fontSize: '14px' }}>
            Enter your 32-byte hex seed to access your wallet.
          </p>
          <textarea
            className="input-field"
            value={seed}
            onChange={(e) => setSeed(e.target.value)}
            placeholder="e.g. 000000..."
            rows={3}
            style={{ marginBottom: '16px', resize: 'none' }}
          />
          <div style={{ display: 'flex', gap: '10px' }}>
            <button className="primary-btn" onClick={createWallet} disabled={!isWasmReady || !seed} style={{ flex: 1 }}>
              {isWasmReady ? "Unlock Wallet" : "Loading WASM..."}
            </button>
            <button className="secondary-btn" onClick={createNewWallet} disabled={!isWasmReady} style={{ flex: 1 }}>
              Create New Wallet
            </button>
          </div>
        </div>

        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="New Wallet Created">
          <div style={{ textAlign: 'center' }}>
            <p style={{ color: '#ff4444', fontWeight: 'bold', marginBottom: '12px' }}>⚠️ SAVE THIS SEED SECURELY! ⚠️</p>
            <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '16px' }}>
              This is the ONLY way to recover your funds. We have auto-filled it for you, but you must save it elsewhere.
            </p>
            <div style={{
              background: 'rgba(0,0,0,0.2)',
              padding: '12px',
              borderRadius: '8px',
              fontFamily: 'monospace',
              wordBreak: 'break-all',
              marginBottom: '16px',
              fontSize: '12px',
              border: '1px solid var(--border-color)'
            }}>
              {generatedSeed}
            </div>
            <button className="primary-btn" onClick={() => { copyToClipboard(generatedSeed); setIsModalOpen(false); }}>
              Copy & Close
            </button>
          </div>
        </Modal>
      </div>
    )
  }

  const handleSend = () => {
    if (!wallet) return
    try {
      const tx = wallet.send(recipient, BigInt(amount))
      setTxHex(tx)
      alert("Transaction Built!")
    } catch (e) {
      console.error(e)
      alert("Send failed: " + e)
    }
  }

  return (
    <div className="container">
      <div className="header">
        <h1>Zcash Wallet</h1>
      </div>

      <div className="nav-bar">
        <button className={`nav-btn ${view === 'home' ? 'active' : ''}`} onClick={() => setView('home')}>Home</button>
        <button className={`nav-btn ${view === 'notes' ? 'active' : ''}`} onClick={() => { setView('notes'); loadNotes(); }}>Notes</button>
        <button className={`nav-btn ${view === 'send' ? 'active' : ''}`} onClick={() => setView('send')}>Send</button>
      </div>

      {view === 'home' && (
        <div>
          <div className="card">
            <span className="balance-label">Total Balance</span>
            <span className="balance-amount">{balance} ZAT</span>

            <div style={{ marginTop: '20px', textAlign: 'left' }}>
              <label className="label" style={{ display: 'block', marginBottom: '8px' }}>Your Wallet Address</label>
              <div className="address-box" style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '8px',
                padding: '12px',
                background: 'rgba(255,255,255,0.05)',
                borderRadius: '8px',
                border: '1px solid var(--border-color)'
              }}>
                <span style={{
                  fontSize: '12px',
                  fontFamily: 'monospace',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                  flex: 1
                }}>
                  {wallet.get_address()}
                </span>
                <button
                  onClick={() => copyToClipboard(wallet.get_address())}
                  style={{
                    background: 'var(--primary-color)',
                    border: 'none',
                    borderRadius: '4px',
                    padding: '4px 8px',
                    color: 'white',
                    fontSize: '10px',
                    cursor: 'pointer',
                    fontWeight: 600
                  }}
                >
                  COPY
                </button>
              </div>
            </div>
          </div>

          <div className="card">
            <h3 style={{ marginBottom: '12px', fontSize: '16px' }}>Sync Status</h3>
            <div style={{ display: 'flex', gap: '8px', width: '100%' }}>
              <input
                type="number"
                className="input-field"
                value={syncHeight}
                onChange={(e) => setSyncHeight(Number(e.target.value))}
                placeholder="Target Height"
              />
              <button className="primary-btn" style={{ width: 'auto' }} onClick={handleSync}>Sync</button>
            </div>
          </div>
        </div>
      )}

      {view === 'notes' && (
        <div style={{ overflowY: 'auto', flex: 1 }}>
          <h2 style={{ marginBottom: '16px', fontSize: '18px' }}>Your Notes</h2>
          {notes.length === 0 ? <p style={{ color: 'var(--text-secondary)', textAlign: 'center' }}>No notes found.</p> : (
            <div>
              {notes.map((n, i) => (
                <div key={i} className="note-item">
                  <div className="note-row">
                    <span className="label">Value</span>
                    <span className="value">{n.value} ZAT</span>
                  </div>
                  <div className="note-row" style={{ marginTop: '4px' }}>
                    <span className="label">TXID</span>
                    <span className="value" style={{ fontSize: '12px' }}>{n.txid.slice(0, 12)}...</span>
                  </div>
                  <button className="secondary-btn" onClick={() => handleExport(i)}>Export Witness</button>
                </div>
              ))}
            </div>
          )}
          {exportJson && (
            <div style={{ marginTop: '20px' }}>
              <h3 style={{ marginBottom: '8px', fontSize: '14px' }}>Mina Bridge Export</h3>
              <textarea
                className="export-area"
                value={exportJson}
                readOnly
                rows={8}
                style={{ width: '100%' }}
              />
            </div>
          )}
        </div>
      )}

      {view === 'send' && (
        <div className="card">
          <h2 style={{ marginBottom: '16px' }}>Send Zcash</h2>
          <div style={{ width: '100%', marginBottom: '12px' }}>
            <label className="label" style={{ display: 'block', marginBottom: '8px', textAlign: 'left' }}>Recipient Address</label>
            <input
              type="text"
              className="input-field"
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
              placeholder="u1..."
            />
          </div>
          <div style={{ width: '100%', marginBottom: '24px' }}>
            <label className="label" style={{ display: 'block', marginBottom: '8px', textAlign: 'left' }}>Amount (ZAT)</label>
            <input
              type="number"
              className="input-field"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="0"
            />
          </div>

          <p style={{ color: 'var(--text-secondary)', fontSize: '12px', marginBottom: '12px', textAlign: 'center' }}>
            🛡️ Orchard (NU5) Protocol Active
          </p>

          <button className="primary-btn" onClick={handleSend}>Send Transaction</button>

          {txHex && (
            <div style={{ marginTop: '20px', width: '100%' }}>
              <label className="label" style={{ display: 'block', marginBottom: '8px', textAlign: 'left' }}>Signed Transaction Hex</label>
              <textarea
                className="input-field"
                value={txHex}
                readOnly
                rows={4}
                style={{ fontSize: '12px', fontFamily: 'monospace' }}
              />
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default App
