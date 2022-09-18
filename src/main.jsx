import React from 'react'
import ReactDOM from 'react-dom/client'
import Nav from './components/Nav'
import App from './App'
import './App.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Nav />
    <App />
  </React.StrictMode>
)
