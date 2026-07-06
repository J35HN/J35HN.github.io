import { useEffect, useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BIO } from './content'
import { NAVIGATION } from './content'
import { InitValues } from './scripts/homepage-background'
import { OnResize } from './scripts/homepage-background'
import { OnMouseMovement } from './scripts/homepage-background'

function App() {

  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Let React handle canvas sizing and resize.
    const syncSize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      OnResize(canvas);
    };

    const mouseMovement = (event) => {
      OnMouseMovement(canvas, event);
    }

    // Update size for InitValues.
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    const intervalId = InitValues(canvas);

    // Event listener and clean up to avoid memory leak (pile of listeners that nevet get removed if there is no clean up).
    window.addEventListener('resize', syncSize);
    window.addEventListener('mousemove', mouseMovement);
    return () => {
      window.removeEventListener('resize', syncSize);
      window.removeEventListener('mousemove', mouseMovement);
      clearInterval(intervalId);
    };

  }, []);

  // Big array for repeated links
  const repeated_links = Array.from( {length: 50} , () => NAVIGATION).flat() 

return (
  <main id = "homepage">

    <canvas id = "canvas" className = "canvas-background" ref={canvasRef}></canvas>

    <div className = "screen-page">
      <div className = "center-body">
        <nav className = "links">
          {/* Skipping every "sixth" element, to give a sense of randomness */}
          {repeated_links.filter((_, i) => (i+1) % 6 !== 0).map((item, i) => (
            <div key = {i}>
              <a key = {i} href = {item.source} target = "_blank">{item.name}</a>
            </div>
          ))
          }
        </nav>
        
        <header>
          <div className = "name-and-contact">
            <div className = "name">
              <h1> {BIO.name} </h1>
            </div>
            <div className = "contact">
              <p> {BIO.email} </p>
              <p> {BIO.phone} </p>
              <div className = "social-media">
                <a href = {BIO.linkedIn.url} target="_blank">
                  <img src = {BIO.linkedIn.image} alt = "LinkedIn-svg"/>
                </a>
                <a href = {BIO.gitHub.url} target="_blank">
                  <img src = {BIO.gitHub.image} alt = "GitHub-svg"/>
                </a>
              </div>
            </div>
          </div>
        </header>
      </div>
      </div>
 </main>
  )
}

export default App
