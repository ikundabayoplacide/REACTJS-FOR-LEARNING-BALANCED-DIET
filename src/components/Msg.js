import React, { Component } from 'react'

var name="placide";
const display=()=>{
    return "ikundabayo placide"
}
 class Msg extends Component {
  render() {
    return (
      <div>
        <p>WELCOME  MR {display()}</p>
        <h1> MESSAGE: {this.props.message}</h1>
      </div>
    )
  }
}

export default Msg
