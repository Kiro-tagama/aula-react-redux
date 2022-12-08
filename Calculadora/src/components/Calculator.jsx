import { useState } from "react";
import Button from "./Button";

export default function Calculator(){
  const bts=["AC","/",7,8,9,"*",4,5,6,"-",1,2,3,"+",0,".","="]
  const [value, setValue]=useState(0)

  function clearMemory(){
    console.log('limpar');
    setValue(0)
  }
  
  function setOpration(op){
    console.log(op);
    setValue(op)
  }

  function addDigit(n){
    console.log(n);
    setValue(n)
  }

  return(
    <div className="calculator">
      <div className="display">{value}</div>
      {bts.map(x=>{
        if (x== '/' || x=='*' || x=='-'||x=='+'||x=='=' ) {
          return <Button label={x} color="#ff6600" click={setOpration}/>
        }else if(x=="AC"){
          return <Button label={x} grid={3} click={clearMemory}/>
        }else if(x==0){
          return <Button label={x} grid={2} click={addDigit}/>
        }else {
          return <Button label={x} click={addDigit}/>
        }
      }
      )}
    </div>
  )
} 