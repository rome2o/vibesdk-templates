import React from 'react'
import { createRoot } from 'react-dom/client'
import { AppProvider } from '@shopify/polaris'
import '@shopify/polaris/build/esm/styles.css'
import './index.css'

function App() {
  return (
    <AppProvider>
      <div style={{padding: 24}}>
        <h1>Shopify Polaris Starter</h1>
        <p>This is a minimal Polaris starter for the vibesdk templates catalog.</p>
      </div>
    </AppProvider>
  )
}

createRoot(document.getElementById('root')!).render(<App />)
