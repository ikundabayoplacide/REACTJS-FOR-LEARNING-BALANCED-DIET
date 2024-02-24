import React from 'react'
import'./protein.css'
import Layout from '../components/Layout'
function Protein() {
  return (
    <Layout>
    <div>
      <h1>PROTEIN SOURCE</h1>
      <div className='proteinContent'>
        <div className='firstPart'>
            <div><img src='.\image\eggs.jpeg'/> <p><b>Eggs</b></p></div>
            <div><img src='.\image\meat.jpeg'/> <p><b>Meat</b></p></div>
            <div><img src='.\image\fish.jpeg'/> <p><b>Fish</b></p></div>
        </div>
        <div className='firstPart'>
            <div><img src='.\image\yoghut.webp'/> <p><b>Yoghut</b></p></div>
            <div><img src='.\image\beans.jpg'/> <p><b>Beans</b></p></div>
            <div><img src='.\image\tofu.jpeg'/> <p><b>Tofu</b></p></div>
        </div>
         <button className='buttonprotein'>GET MORE</button> 
         <h1>CARBOHYDRATE SOURCE</h1>
         <div className='firstPart'>
            <div><img src='.\image\Sweet potatoes.jpeg'/> <p><b>Sweet patatoes</b></p></div>
            <div><img src='.\image\bread.jpeg'/> <p><b>Beans</b></p></div>
            <div><img src='.\image\oats.jpeg'/> <p><b>Tofu</b></p></div>
        </div>
        <div className='firstPart'>
            <div><img src='.\image\quinoa.jpg'/> <p><b>Sweet patatoes</b></p></div>
            <div><img src='.\image\chickpeas2.jpeg'/> <p><b>Beans</b></p></div>
            <div><img src='.\image\brown rice.jpeg'/> <p><b>Tofu</b></p></div>
        </div>
        <button className='buttonprotein'>SEE MORE</button>
      </div>
    </div>
    </Layout>
  )
}

export default Protein
