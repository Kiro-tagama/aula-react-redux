export default function Filho(props) {
  return (
    <p key={props.i}>
      {props.nome} {props.snome}
    </p>
  );
}
