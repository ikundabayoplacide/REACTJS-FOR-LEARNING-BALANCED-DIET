import React from 'react'
import './Between.css';

function Between() {
  return (
    <div className='main'>
      <div className='main1'>
      <img src='./image/fluits3.jpeg' width={380} height={700} className='image1'></img>
      </div>
        <div className='main2'>
            <table className='tab'>
             <th className='row'> Fresh & Organic <br/> <p>Harvestes at Organic Farms</p></th>
                <th className='row'> Top Chefs <br/><p>Culinary Creations by L&W</p></th>
                <th className='row'>24/7 Orders <br/> <p>At Your Doorstep in a Jiffy</p></th>
            </table>
        </div>
         <div className='main3'>
            <img src='./image/fluits5.jpeg' width={380} height={700} className='image2'></img>
         </div>
    </div>
  )
}

export default Between
