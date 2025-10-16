import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { userDetails } from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

  <BrowserRouter>
  <userDetails.Provider value="this your search result">
    <App />
    </userDetails.Provider>
  </BrowserRouter>
  </StrictMode>,
)