import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import List from './list/List.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='app' >
      <Header/>
      <div className="app-body">
        <List/>
      </div>
      <Footer/>
    </div>
  </StrictMode>,
)
