import { useState } from "react"
import IndiretaFilho from "./IndiretaFilho"

export default ()=>{
  let [nome, setNome] =useState('?')
  let [idade, setIdade] =useState(0)
  let [nerd, setNerd] =useState(false)

  function fornecerInformacoes(nomeProps,idadeProps,nerdProps) {

    setNome(nomeProps)
    setIdade(idadeProps)
    setNerd(nerdProps)

    console.log(nomeProps,idadeProps,nerdProps);
  }
  return(
    <div>
      <IndiretaFilho quandoClicar={fornecerInformacoes}/>
      pai
      <p>
        <span>{nome}, </span>
        <span>{idade}, </span>
        <span>{nerd == true ? "nerd" : "não é nerd"}</span>
      </p>
    </div>
  )
}