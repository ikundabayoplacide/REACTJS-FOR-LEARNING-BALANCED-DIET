
import React from 'react'
import './Buy.css'
import Layout from '../components/Layout'

function Buy() {
  return (
    <Layout>
   
      <form method='POST'  action='savedata.php' className='form'>
        <h4>COMPLETE THIS FORM TO GET YOUR MACHINE</h4>
        <label>FIRST-NAME:</label><br></br>
        <input type='text' className='fname'required name='fname'/><br/>
        <label>SECOND-NAME:</label><br></br>
        <input type='text' className='sname'required  name='lname'/><br/>
        <label>CONTACT:</label><br></br>
       <input type='number' className='num' required name='contact'/> <br/>
       <label>GMAIL:</label><br/>
       <input type='email' className='gmail'required name='gmail'/><br/>
       <label>LOCATION:</label><br></br>
       <input type='text' className='location' required name='location'/> <br/><br/>
      
       <textarea id='vuga' cols={40} rows={10} required placeholder='Text Message' name='message'/><br/>
       <button type='submit' className='button' name='submit'>SUBMIT</button>

      </form>
   
    </Layout>
  )
}

export default Buy
