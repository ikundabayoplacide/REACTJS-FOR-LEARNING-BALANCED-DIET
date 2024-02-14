import React from 'react'
import Layout from '../components/Layout'
import'./service.css'
function BalancedService() {
  return (
    <Layout>
    <div>
     
    <div className='contentDiet'>
        
        <div className='marketing'>
            <img src='.\image\marketing.png'/>
        </div>
        <div className='balservice'>
         <h2>LEARN HOW TO PREPARE DIET</h2>
         <div className='circle'>
          <div className='innercircle'></div>
         </div>
        </div>
    </div>
<br/>
<div className='balancedList'>
<div listContent>
    <h2>DELIVERY SERVICES</h2>
    <ul>
    <li>FRESH MEAL</li>
    <li>PURE WATER</li>
    <li>BREAK FAST</li>
    <li>FRESH DINNER</li>
</ul>
<button className='startLearning'>Start to Learn</button>
</div>

<div className='imagecontent'>
    <img src='.\image\balancediet.jpeg'/>
</div>
</div>
    </div>
    </Layout>
  )
}

export default BalancedService
