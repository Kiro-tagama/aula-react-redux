import './Content.css'

import { Route, Routes } from 'react-router-dom'

import Home from '../../view/examples/Home'
import About from '../../view/examples/About'
import Param from "../../view/examples/Param.jsx";
import NotFound from "../../view/examples/NotFound.jsx";

export default function Content(){
  return(
    <main className='content'>
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path="/param/:id" element={<Param />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  )
}