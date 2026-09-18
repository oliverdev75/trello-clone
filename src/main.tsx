import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ListContextProvider from './providers/ListContextProvider.tsx'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ListContextProvider>
      <App />
    </ListContextProvider>
  </StrictMode>,
)