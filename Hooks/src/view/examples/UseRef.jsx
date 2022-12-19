import React, { useEffect, useRef, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function merge(p1, p2){
    var res=''

    // for (let i = 0;i<p1.length ||i<p2.length ; i++) {
    //     if (p2[i] === undefined) return res = res+p1[i]
    //     if (p1[i] === undefined) return res = res+p2[i]
    //     res = res+p1[i]
    //     res = res+p2[i]
    // }
    // return res

    return [...p1].map((e,i)=>`${e}${p2[i] || ""}`).join("")
}

const UseRef = (props) => {
    const [value1, setValue1] = useState("")
    const [value2, setValue2] = useState("")
    
    const count = useRef(0)
    const myInput1 = useRef(null)
    const myInput2 = useRef(null)

    useEffect(()=>{
        count.current = count.current+1
        myInput2.current.focus()
    },[value1])

    useEffect(()=>{
        count.current++
        myInput1.current.focus()
    },[value2])

    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />

            <SectionTitle title='Exercício #01' />
            <div className="center">
                <div>
                    <span>Valor: </span>
                    <span>{merge(value1, value2)} [<span className='red'>{count.current}</span>]</span>
                </div>
                <input type="text" className="input" ref={myInput1} value={value1} onChange={e=>setValue1(e.target.value)}/>
            </div>

            <SectionTitle title='Exercício #02' />
            <div className="center">
                
                <input type="text" className="input" ref={myInput2} value={value2} onChange={e=>setValue2(e.target.value)}/>
            </div>
        </div>
    )
}

export default UseRef
