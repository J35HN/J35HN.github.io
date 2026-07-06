import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../index.css'
import Experiences from '../pages/Experiences'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Experiences />
  </StrictMode>,
)
