import './App.css'
import { BIO } from './content'
import { NAVIGATION } from './content'
import Background from './components/Background'

function App() {

  // Big array for repeated links
  const repeated_links = Array.from( {length: 50} , () => NAVIGATION).flat() 

return (
  <main id = "homepage">

    <Background className = "canvas-background" />

    <div className = "screen-page">
      <div className = "center-body">
        <nav className = "links">
          {/* Skipping every "sixth" element, to give a sense of randomness */}
          {repeated_links.filter((_, i) => (i+1) % 6 !== 0).map((item, i) => {
            return (
              <div key = {i}>
                <a key = {i} href = {item.source}>{item.name}</a>
              </div>
            )
          })
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
