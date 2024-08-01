import React from 'react'
import ReactDOM from 'react-dom/client'
import '/src/styles/main.css'
import Home from './pages/Home'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
)
