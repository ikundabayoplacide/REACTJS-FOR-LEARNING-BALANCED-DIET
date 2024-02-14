// Home.js

import React from 'react';
import Layout from './Layout';

function Home() {
  return (
    <Layout>
      <div className='main'>
        <p>Healthy delicious meals</p>
        <p>delivered right to your door</p>
        <span>Color your day with Goodness</span>
        <img src='./image/fluits2.jpeg' className='img' alt='Fruits'/>
      </div>
      <div className='btn'>
        <p>Enter your Address to Check If you we're Available at your Region</p>
      </div>
    </Layout>
  );
}

export default Home;
