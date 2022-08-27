import If from '../condicional/if'
export default props=>{
  const user = props.nome || {}
  return(
    <p>
      <If teste={props.isPar && props.isPar}>
      {props.isPar % 2 === 0 ? 'par ' : 'impar '}
      </If>
      <If teste={user && props.nome}>
        olá {props.nome}
      </If>
      <If teste={!user || !props.nome}>
        olá fulano
      </If>
    </p>
  )
}