import {useState} from 'react'
import koufImage from '/kouf.webp'
import './App.css'

function App() {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <div className="page">
      {isVisible && <div>
        <img src={koufImage} className="kouf logo" alt="Kofola"/>
      </div>}
      {isVisible ? <h1>Drink KOFOLA!!!</h1> : <><h1>You look stressed...</h1>
        <h1>I have solution!</h1></>}
      <div className="card">
        {!isVisible && <button onClick={() => setIsVisible((prev) => !prev)}>
          Click for solution
        </button>}
      </div>
    </div>
  )
}

export default App
