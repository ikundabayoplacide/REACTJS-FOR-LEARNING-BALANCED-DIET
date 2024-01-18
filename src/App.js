import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import './shop.css'
import Between from './components/Between';
import Msg from './components/Msg';
import Home from './components/Home';
import Counter from './components/Counter';
import FunctionEvent from './components/FunctionEvent';

 class App extends Component {
  render() {
    return (
      <div>
       <Home/>
       <Between/>
       <Msg message=" Were are in rwanda"/>
       <Counter/>
       <FunctionEvent/>
      </div>
    )
  }
}

export default App

