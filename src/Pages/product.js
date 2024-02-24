import React from 'react'
import Layout from '../components/Layout'
import './fruits.css'
function Fruit() {
  return (
    <Layout>
    <div className='productcontent'>
      <h1>FRUITS</h1>
      <div className='type'>
       <div className='type1'>
        <img src='./image/apple.jpeg'/> <p><b>Apple</b></p></div>
       <div className='type1'>
        <img src='./image/orange.jpeg'/>
        <p><b>Orange</b></p>
       </div>
       <div className='type1'>
          <img src='./image/paineple.jpeg'/>
          <p><b>Paineple</b></p></div>
      </div>

      {/* this is for other fruits */}
      <div className='typeFruits'>
       <div className='type1'>
        <img src='.\image\strawberries.jpeg'/> 
        <p><b>Strawberries</b></p></div>
       <div className='type1'>
        <img src='./image/banana.jpg'/>
        <p><b>Banana</b></p>
       </div>
       <div className='type1'>
          <img src='./image/grapes.jpeg'/>
          <p><b>Grapes</b></p></div>
      </div>


      <div className='BeatfulFruits'>
       <div className='type1'>
        <img src='.\image\watermelon.jpeg'/> 
        <p><b>WATERMELON</b></p></div>
       <div className='type1'>
        <img src='./image/papayA.jpeg'/>
        <p><b>PAPAYA</b></p>
       </div>
       <div className='type1'>
          <img src='./image/lemon.jpeg'/>
          <p><b>LEMON</b></p></div>
      </div>
      <div className='fruitButton'>
      <button >MORE FRUITS</button>
      </div>
    </div>
    </Layout>
  )
}

export default Fruit
