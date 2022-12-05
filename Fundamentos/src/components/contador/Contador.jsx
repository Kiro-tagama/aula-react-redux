import { Component } from "react";

export default class Contador extends Component {
  
  state = {
    numero: this.props.numeroInicial
  }

  inc = () => {
    this.setState({
      numero: this.state.numero +1,
    })
  }

  render(){
    return(
      <div>
        <h2>contador</h2>
        <p>{this.state.numero}</p>
        <button onClick={this.inc}>+</button>
      </div>
    )
  }
}