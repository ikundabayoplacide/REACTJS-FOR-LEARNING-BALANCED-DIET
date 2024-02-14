import React, { useState } from 'react'
 const videoStyle={
  width:'1400px',
  height:'500px'
 }
function FourPart() {
    const[showVideo, setVideo]=useState(false);



     const videoPlayer=()=>{
        setVideo(true);
    
    };

  return (
     <div>
         {showVideo ? (
        <video controls width={1400} height={400} onClick={()=>setVideo(false)}>
      <source src='./video/What is a Balanced Diet_ (2).mp4' width={14000} height={400} onClick={videoPlayer} className='vedoImage'></source>
      </video>
         ):(
          <img 
          src='./image/foodvideo.jpeg'
          style={videoStyle} onClick={videoPlayer} className='vedoImage' alt='Video Thumbnail'/>
         )}


    </div>
  );
}

export default FourPart;
