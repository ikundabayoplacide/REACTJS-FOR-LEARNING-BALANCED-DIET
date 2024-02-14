

import React from 'react';
import './part.css';
const greencolor={
  color:"green",
    fontSize:30,
};
const placide={
  color:"#BE2323",
  fontSize:20,
};
export default function ThirdPart() {
  return (
    <div className='mainThird'>
      <div className='flexContent'>
      <div  className='thirdContent'>
      <img src='./image/photoImage.png' width={350}className='imageThird'></img>
      </div>
      <div className='thirdContent'>
        <h1 className='textContent'> Download the app <br/> and start exploring</h1>
         <p style={greencolor}> Experience Nature's Gifts with Goodness</p>
         <p>We take pride in delivering only the freshest produce gathered
 daily from organic farms. Surround yourself in the serenity of
 pesticide-free flavors.</p> 
 <p className='italicontent'>Divine delicacies! Each Goodness bite transports you to a 
carefree sunny day in the countryside</p>
<div className='placideContent'>
<img src='./image/placide.jpg'  className='placideImage'/>
 <p style={placide}> IKUNDABAYO Placide</p>
        </div>
        </div>
        </div>
{/* this is part of video */}
<br/>
{/* <div className='videoContent'>
  <video controls width={1400} height={500}>
    <source src='./video/What is a Balanced Diet_.mp4' type="video/mp4"></source>
  </video>
</div> */}

    </div>
  )
}
