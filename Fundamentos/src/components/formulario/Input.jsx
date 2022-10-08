import { useState } from "react"

export default props=>{
  const [valor,setValor]=useState('')
  return(
    <div>
      <input value={valor} onChange={v=>setValor(v.target.value)} placeholder="digite algo"/>
      <p>{valor}</p>
    </div>
  )
}