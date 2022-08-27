import './App.css'

import Card from './components/layout/Card.jsx'

import Primeiro from './components/basicos/Primeiro.jsx'
import ComParametro from './components/basicos/ComParametro.jsx'
import Fragmento from './components/basicos/Fragmento.jsx'
import RandomNumber from './components/basicos/RandomNumber.jsx'
import Familia from './components/basicos/Familia.jsx'
import Filho from './components/basicos/Filho.jsx'
import TabelaProdutos from './components/basicos/TabelaProdutos.jsx'


export default function App() {

  return (
    <div className="App">
      <h1 style={{textAlign:'center'}}>Fundamentos</h1>

      <div className='areaCards'>
        <Card titulo='repetição (map)'>
          <TabelaProdutos/>
        </Card>
        <Card titulo='Filhos (cloneElement)'>
          <Familia snome="sousa">
            <Filho nome="joao" />
            <Filho nome="maria" />
          </Familia>
        </Card>
        <Card titulo='Numero aleatório'>
          <RandomNumber min={0} max={100}/>
        </Card>
        <Card titulo='Fragmento'>
          <Fragmento/>
        </Card>
        <Card titulo='Com parametro'>
          <ComParametro titulo='Um titulo qualquer'/>
        </Card>
        <Card titulo='Primeiro'><Primeiro/></Card>
      </div>
    </div>
  )
}