import { useState } from "react";
import Button from "./Button";

const initialState ={
  displayValue:"0",
  clearDisplay:false,
  operation:null,
  values:[0,0],
  current:0,
}

export default function Calculator(){
  const bts=["AC","/","7","8","9","*","4","5","6","-","1","2","3","+","0",".","="]
  
  const [state, setState]= useState({...initialState})

  function clearMemory(){
    setState({...initialState})
  }
  
  function setOpration(operation){
    if (state.current === 0) {
       setState({...state,operation,current:1, clearDisplay: true})
    }else{
      const equals = operation === '='
      const currentOperation = state.operation
      const values = [...state.values]

      try {
        values[0]= eval(`${values[0]} ${currentOperation} ${values[1]}`)
      } catch (error) {
        values[0]= state.values[0]        
      }
      values[1]= 0

      setState({
        displayValue: values[0],
        operation: equals ? null : operation,
        current: equals ? 0 : 1,
        clearDisplay: !equals,
        values
      })
    }
  }

  function addDigit(n){
    if (n === '.' && state.displayValue.includes('.')){return}
    
    const clearDisplay = state.displayValue === "0" || state.clearDisplay
    const currentValue = clearDisplay ? '' : state.displayValue
    const displayValue = currentValue + n
    setState({...state,displayValue, clearDisplay: false})
    
    if (n !== '.') {
      const i = state.current
      const newValue = parseFloat(displayValue)
      const values = [...state.values]
      values[i] = newValue
      setState({...state,values,displayValue, clearDisplay: false})
      console.log(state.values);
    }
  }

  return(
    <div className="calculator">
      <div className="display">{state.displayValue}</div>
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