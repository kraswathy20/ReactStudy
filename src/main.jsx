import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Homepage from './pages/HomePage.jsx'
import MyApp from './MyApp.jsx'

createRoot(document.getElementById('root')).render(
 <MyApp/>
)
