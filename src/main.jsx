import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'
// import Footer from './components/footer'
import Header from './components/header.jsx'

import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Header />
  
  </React.StrictMode>,
)
