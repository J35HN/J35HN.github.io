import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../index.css'
import Industry from '../pages/Industry'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Industry />
  </StrictMode>,
)
