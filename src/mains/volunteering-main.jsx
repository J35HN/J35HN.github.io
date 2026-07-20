import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../index.css'
import Volunteering from '../pages/Volunteering'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Volunteering />
  </StrictMode>,
)
