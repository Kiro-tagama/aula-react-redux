import './App.css'

import Card from './components/layout/Card.jsx'

import Input from './components/formulario/Input'

import Primeiro from './components/basicos/Primeiro.jsx'
import ComParametro from './components/basicos/ComParametro.jsx'
import Fragmento from './components/basicos/Fragmento.jsx'
import RandomNumber from './components/basicos/RandomNumber.jsx'
import Familia from './components/basicos/Familia.jsx'
import Filho from './components/basicos/Filho.jsx'
import TabelaProdutos from './components/basicos/TabelaProdutos.jsx'
import Condicional from './components/basicos/Condicional.jsx'

import DiretaPai from './components/comunicacao/DiretaPai'
import IndiretaPai from './components/comunicacao/IndiretaPai'

import Contador from './components/contador/Contador'
import Mega from './components/contador/Mega.jsx'



export default function App() {

  return (
    <div className="App">
      <h1 style={{textAlign:'center'}}>Fundamentos</h1>

      <div className='areaCards'>
        <Card titulo='numeros da sorte (Array)'>
          <Mega/>
        </Card>
        <Card titulo='Contador'>
          <Contador numeroInicial={10}/>
        </Card>
        <Card titulo='Controlando (Input)'>
          <Input></Input>
        </Card>
        <Card titulo='Comunicação indireta'>
          <IndiretaPai/>
        </Card>
        <Card titulo='Comunicação direta'>
          <DiretaPai/>
        </Card>
        <Card titulo='Renderização condicional'>
          {/* <Condicional isPar={11}/> */}
          {/* video 32 */}
          <Condicional nome='rodrigo'/>
          <Condicional email='ro@gmail.com'/>
          <Condicional/>
        </Card>
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
          <RandomNumber min={0} max={20}/>
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