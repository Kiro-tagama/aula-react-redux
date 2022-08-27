export default ()=>{
  const produtos=[
    {id:1,nome:'produto-1',preco:'10,00'},
    {id:2,nome:'produto-2',preco:'20,00'},
    {id:3,nome:'produto-3',preco:'30,00'},
  ]
  return(
    <table align="center" className='tabelaProdutos' >
      <tr>
        <th>id</th>
        <th>nome</th>
        <th>preço</th>
      </tr>
      {produtos.map((data, i)=>{
        return(
          <tr key={data.id} className={i % 2 == 1? 'par' : null}>
            <td>{data.id}</td>
            <td>{data.nome}</td>
            <td>{data.preco}</td>
          </tr>
        )
      })}
    </table>
  )
}