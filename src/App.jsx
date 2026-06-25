import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BIO } from './content'

function App() {

return (
  <main id = "homepage">
    <div className = "center-body">
      <header>
        <div className = "name-and-contact">
          <div className = "name">
            <h1> {BIO.name} </h1>
          </div>
          <div className = "contact">
            <p> {BIO.email} </p>
            <p> {BIO.phone} </p>
          </div>
        </div>
      </header>
      <nav></nav>
    </div>
 </main>
  )
}

export default App
