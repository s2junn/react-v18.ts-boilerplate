import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { RecoilRoot } from 'recoil'

import '../config/i18n'
import App from '@/App'

const container = document.getElementById('root')
const root = createRoot(container as Element)

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <HelmetProvider>
        <RecoilRoot>
          <App />
        </RecoilRoot>
      </HelmetProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
