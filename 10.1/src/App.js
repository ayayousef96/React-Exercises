import "./App.css"
import React, { useRef} from 'react';
import video from "./video/trailer_hd.mp4"

function App() {

  const vidRef = useRef();

  const handlePlayVideo = (e) => {
    vidRef.current.play();
  
  }
  const handlePauseVideo = (e) => {
     vidRef.current.pause();
  }
  return ( 
    <div className="container">
    <video src={video} ref={vidRef}  width="100%"  type="video/mp4"/>
    <button  onClick={handlePlayVideo}>Play</button>
    <button  onClick={handlePauseVideo}>Pause</button>
    </div>
  )
}
export default App