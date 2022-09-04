export default ({txt,num,bool}) =>{

  return(
    <div>
      <p>{txt}</p>
      <p>{num}</p>
      <p>{bool?"true":"false"}</p>
    </div>
  )
}