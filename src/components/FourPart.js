import React, { useState } from 'react'

function FourPart() {
    const[showVideo, setVideo]=useState(false);



     const videoPlayer=()=>{
        setVideo(true);
    
    };

  return (
     <div>
         {showVideo ? (
        <video controls width={1400} height={400} onClick={()=>setVideo(false)}>
      <source src='./video/What is a Balanced Diet_ (2).mp4' width={1400} height={400} onClick={videoPlayer} className='vedoImage'></source>
      </video>
         ):(
          <img 
          src='./image/foodvideo.jpeg'
          width={1400} height={600} onClick={videoPlayer} className='vedoImage' alt='Video Thumbnail'/>
         )}


    </div>
  );
}

export default FourPart;
