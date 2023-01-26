import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Routes from './router'
import Navbar from './components/Navbar'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div id="avasus">
      <Navbar/>
      <Routes />
    </div>
  </React.StrictMode>,
)
