import React, { Component } from 'react'

 class FunctionEvent extends Component {
   
  render() {
    const clickHunder=()=>{
        console.log("button clicked");
    }
    return (
      <div>
        <p>WELCOMING</p>
        <button onClick={clickHunder}> clickHunder</button>
      </div>
    )
  }
}

export default FunctionEvent
