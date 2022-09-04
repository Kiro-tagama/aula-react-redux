import { useState } from "react"

export default ({min, max}) =>{
  const [num, setNum]= useState(0)
  function random() {
    return setNum(Math.random()* (max - min) + min)
  }
  return(
    <div style={{textAlign:'center'}}>
      <p>min: {min}  max: {max}</p>
      <p>{num.toFixed(0)}</p>
      <button onClick={random}>gerar</button>
    </div>
  )
}