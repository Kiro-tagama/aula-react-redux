export default ()=>{
  const produtos=[
    {id:1,nome:'produto-1',preco:'10,00'},
    {id:2,nome:'produto-2',preco:'20,00'},
    {id:3,nome:'produto-3',preco:'30,00'},
  ]
  return(
    <table align="center" border={1}  >
      <tr>
        <th>id</th>
        <th>nome</th>
        <th>preço</th>
      </tr>
      {produtos.map((data)=>{
        return(
          <tr>
            <td>{data.id}</td>
            <td>{data.nome}</td>
            <td>{data.preco}</td>
          </tr>
        )
      })}
    </table>
  )
}