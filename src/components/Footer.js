import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faYoutube, faVaadin, faViacoin, faViadeo } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';
import { faVanShuttle, faVault, faVcard, faVectorSquare, faVenus, faVest } from '@fortawesome/free-solid-svg-icons';
function Footer() {
  return (
        <div className='footermain' >
     <div className='footer1'>
     <h1>Coming your  <br/>way soon!</h1>
     <div className='company'>
      <div className='download'> <img src='./image/Apple.png'/></div>
      <div className='download'> <img src='./image/google.jpeg'/></div>
      </div>
      <div className='line'></div><br/>
      <div className='socialMedia'>
        <FontAwesomeIcon icon={faFacebook} size='2x' className='icons'/>
        <FontAwesomeIcon icon={faTwitter} size='2x' className='icons'/>
        <FontAwesomeIcon icon={faInstagram} size='2x' className='icons'/>
        <FontAwesomeIcon icon={faViacoin} size='2x' className='icons'/>
        <FontAwesomeIcon icon={faYoutube} size='2x' className='icons'/>
      </div>
     </div>
     <div className='footer2'>
        <img src='./image/balanced.jpg' className='motoImage'></img>
     </div>
  </div>
  

  )
}

export default Footer
