import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'
 
function calcFatorial(num) {
    const n = parseInt(num)
    if (n<0) return "não existe"
    if (n===0) return 1

    return calcFatorial(n-1)*n
}

function UseEffect() {
    const [number, setNumber] = useState(1)
    const [fatorial, setFatorial] = useState(1)

    const [num, setNum] = useState(1)
    const [type, setType] = useState('Ímpar')

    useEffect(() => {
        setFatorial(calcFatorial(number))
    }, [number])

    useEffect(() => {
        setType(num % 2 == 0 ? "Par" : "Ímpar")
    }, [num])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!" />

            <SectionTitle title="Exercício #01" />
            <div className="center">
                <div>Fatorial: <span className='red'>{fatorial}</span></div>
                <input type="number" className="input" value={number} onChange={(e) => setNumber(e.target.value)} />
            </div>

            <SectionTitle title="Exercício #02" />
            <div className="center">
                <span className='red'>{type}</span>
                <input type="number" className="input" value={num} onChange={(e) => setNum(e.target.value)} />
            </div>

        </div>
    )
}

export default UseEffect
