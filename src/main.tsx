import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

import { HomePage } from './pages'

import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HomePage />
  </StrictMode>
)