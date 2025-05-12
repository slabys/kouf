import {useState} from 'react'
import burnoutImage from '/burnout.webp'
import stressImage from '/stress.webp'
import pizzaImage from '/pizza.webp'
import kofolaImage from '/kouf.png'
import './App.css'

function App() {
  const [variant, setVariant] = useState<undefined |"pizza" | "kofola">(undefined)

  return (
    <div className="page">

      {variant === 'kofola'
        ? <div className={"solution"}>
            <img src={kofolaImage} className={"solutionImage"} alt={"kofola"} />
            <h1>I have solution!</h1>
            <h1>Drink KOFOLA!</h1>
          </div>
        : variant === 'pizza'
          ? <div className={"solution"}>
            <img src={pizzaImage} className={"solutionImage"} alt={"Pizza"}/>
            <h1>I have solution!</h1>
            <h1>Eat PIZZA!</h1>
          </div>
          : <>
            <div className={"stress"} onClick={() => setVariant("kofola")}>
              <img src={stressImage} alt="Stress image"/>
              <h1>I feel stressed</h1>
            </div>
            <div className={"burnout"} onClick={() => setVariant("pizza")}>
              <img src={burnoutImage} alt="Burnout image"/>
              <h1>I feel burned out</h1>
            </div>
          </>
      }
      {/*{variant ? <h1>Eat PIZZA!!!</h1> : <>*/}
      {/*  </>}*/}
      {/*<div className="card">*/}
      {/*  {!variant && <button onClick={() => setVariant(undefined)}>*/}
      {/*    Click for solution*/}
      {/*  </button>}*/}
      {/*</div>*/}
    </div>
  )
}

export default App
