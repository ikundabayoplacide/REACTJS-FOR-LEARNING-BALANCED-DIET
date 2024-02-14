import React from 'react'
import './Buy.css'
function Buy() {
  return (
    <div className='form'>
      <form method='#'>
        <h4>COMPLETE THIS FORM TO GET YOUR MACHINE</h4>
        <label>FIRST-NAME:</label><br></br>
        <input type='text' className='fname'required /><br/>
        <label>SECOND-NAME:</label><br></br>
        <input type='text' className='sname'required /><br/>
        <label>CONTACT:</label><br></br>
       <input type='number' className='num' required/> <br/>
       <label>GMAIL:</label><br/>
       <input type='gmail' className='gmail'required/><br/>
       <label>LOCATION:</label><br></br>
       <input type='text' className='location' required/> <br/>
       <h1> MESSAGE:</h1>
       <textarea id='vuga' cols={50} rows={10} required/><br/>
       <button type='buttton' className='button'>SEND</button>

      </form>
    </div>
  )
}

export default Buy
