import React, { Component } from 'react'

 class FunctionEvent extends Component { 
   
  render() {
    const clickHunder=()=>{
        alert("button clicked");
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
