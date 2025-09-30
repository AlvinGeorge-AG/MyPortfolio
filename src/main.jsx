import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/flex-slider.css'; // your own styles
import './assets/css/fontawesome.css';
import './assets/css/lightbox.css';
import './assets/css/owl.css';
import './assets/css/templatemo-style.css';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
