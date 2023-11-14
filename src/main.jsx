import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'
import Footer from './components/footer'
import Header from './components/header.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <App />
    <Footer />
  
  </React.StrictMode>,
)
