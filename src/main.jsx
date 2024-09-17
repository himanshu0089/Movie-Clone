import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import RequireAuth from './components/RequireAuth.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>

      <App />
     
    </BrowserRouter>
    
  
)
