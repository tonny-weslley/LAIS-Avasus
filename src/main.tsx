import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Routes from './router'
import Navbar from './components/Navbar'
import { Provider } from 'react-redux'
import store from './redux/store'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <div id="avasus">
        <Navbar/>
        <Routes />
      </div>
    </Provider>
  </React.StrictMode>,
)
