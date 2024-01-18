import { counter } from '@fortawesome/fontawesome-svg-core';
import React, { Component } from 'react'
import { useState } from 'react'

 function FunctionCounter() {
    const [Counter,setCounter]=useState(10);

    const decrement=()=>{
      setCounter(Counter-1);
    }

    const increment=()=>{
        setCounter(Counter+1);
    }
    return (
      <div>
        <h3> this is counting :{Counter}</h3>
        <button onClick={decrement}> click for decrement</button>
        <button onClick={increment}> click for increment</button>
      </div>
    )
  }


export default FunctionCounter
