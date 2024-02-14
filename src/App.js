import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import './Home.css'
import Between from './components/Between';
import Msg from './components/Msg';
import Home from './components/Home';
import Counter from './components/Counter';
import FunctionEvent from './components/FunctionEvent';
import FunctionCounter from './components/FunctionCounter';
import ThirdPart from './components/ThirdPart';
import FourPart from './components/FourPart';
import Footer from './components/Footer';

 class App extends Component {
  render() {
    return (
      <div>
       <Home/>
       <Between/>
      <ThirdPart/>
     <FourPart/>
      <Footer/>
      </div>
    )
  }
}

export default App

