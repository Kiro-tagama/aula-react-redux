import { useState } from "react"

export default function Mega(params) {
  
  function gerarNumeroNaoContido(min, max, array) {
    const aleatorio = parseInt(Math.random()*(max + 1 - min)) + min
    return array.includes(aleatorio) ? gerarNumeroNaoContido(min,max,array) : aleatorio
  }

  function gerarNumeros(qt){
    const numeros = Array(qt)
    .fill(0)
    .reduce(nums=>{
      const novoNumero= gerarNumeroNaoContido(1,99, nums)
      return [...nums, novoNumero]
    },[])
    .sort((n1,n2)=>n1-n2)

    return numeros
  }
  
  const [numeros, setNumeros] =useState(Array(6).fill(0))

  return(
    <div>
      <h2>mega</h2>
      <h3>{numeros.join(' ')}</h3>
      <button onClick={()=>setNumeros(gerarNumeros(6))}>Gerar números</button>
    </div>
  )
}