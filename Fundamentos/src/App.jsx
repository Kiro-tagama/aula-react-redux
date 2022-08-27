import './App.css'

import Card from './components/layout/Card.jsx'

import Primeiro from './components/basicos/Primeiro.jsx'
import ComParametro from './components/basicos/ComParametro.jsx'
import Fragmento from './components/basicos/Fragmento.jsx'
import RandomNumber from './components/basicos/RandomNumber.jsx'


export default function App() {

  return (
    <div className="App">
      <h1 style={{textAlign:'center'}}>Fundamentos</h1>

      <div className='areaCards'>
          <RandomNumber min={0} max={100}/>
          <Fragmento/>
          <ComParametro titulo='Um titulo qualquer'/>
        <Primeiro/>
      </div>
    </div>
  )
}