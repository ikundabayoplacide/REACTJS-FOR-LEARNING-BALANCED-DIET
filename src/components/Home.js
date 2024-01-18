import React, { Component } from 'react'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonDress,faBasketShopping, faSearch} from '@fortawesome/free-solid-svg-icons';


 class Home extends Component {
  productHandler=()=>{
  
    alert("product is clicked");
    
  };
  render() {
   
    return (
      <div>
        <div className='nav'>
        <p><span>A</span>KIRA</p>
         {/* this is heading */}
       
          <button>Home</button>
          <button>Services</button>
          <button onClick={this.productHandler}>Products</button>
          <button>Pages</button>
          <button>Buy</button>
        <div className='icon'>
        <FontAwesomeIcon icon={faSearch} className='icons'/>
        <FontAwesomeIcon icon={faBasketShopping} className='icons'/>
        <FontAwesomeIcon icon={faPersonDress} className='icons'/>
        </div>
       </div>
       {/* this above is the end of navigatio */}
       <div className='main'>
       <pra>Healthy delicious meals <br></br>
        delivered right to your door<br></br>
        <span>Color your day with Goodness</span></pra>
       <img src='./image/fluits2.jpeg' className='img'/>
       </div>
       <div className='btn'><p> Enter your Address to Check If you we're Available at your Region</p></div>
      </div>
    )
  }
}

export default Home
