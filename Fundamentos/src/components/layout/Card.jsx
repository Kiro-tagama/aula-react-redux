
export default function(props){
  return(
    <div className="card">
      <h3
      style={{color:'#eee',textAlign:'center',marginBlock:10}}
      >{props.titulo}</h3>
      <div className="cardDiv">
        {props.children}
      </div>
    </div>
  )
}