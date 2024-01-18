import { faAlignCenter, faDisplay } from '@fortawesome/free-solid-svg-icons'
import React, { Component } from 'react'

class Counter extends Component {
    constructor() {
      super()
    
      this.state = {
         count:10,
      }
    }
    decrement(){
       if(this.state.count>0){
         this.setState({
            count:this.state.count-1,
        })};
        
    }
  render() {
    return (
      <div>
        <div style={{marginLeft:500}}>
        <h3> This is going to count :{this.state.count}</h3>
        <button onClick={()=>this.decrement()}>decrement</button>
        </div>
      </div>
    )
  }
}

export default Counter
