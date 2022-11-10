import React, {useRef} from 'react'
import  ayablack from './ayablack.jpeg'
import  ayacolor from './ayacolor.jpeg'
import  nblack from './nblack.jpeg'
import  ncolor from './ncolor.jpeg'
import "./App.css" 

function App(props) {
const ref1 = useRef()
const ref2 = useRef()


const handle_mouseover1 =()=>{
  ref1.current.src = ayacolor;
}
const handle_mouseout1 = () =>{
  ref1.current.src = ayablack;
}
const handle_mouseover2 =()=>{
  ref2.current.src = ncolor;
}
const handle_mouseout2 = () =>{
  ref2.current.src = nblack;
}

// useEffect(() => {
//   // ref1.current.addEventListener("mouseover", (e) => {
//   //   ref1.current.src = ayacolor;
//   // });
//   // ref1.current.addEventListener("mouseout", (e) => {
//   //   ref1.current.src = ayablack;
//   // });
//   ref2.current.addEventListener("mouseover", (e) => {
//     ref2.current.src = ncolor ;
//   });
//   ref2.current.addEventListener("mouseout", (e) => {
//     ref2.current.src = nblack;
//   });
// } );

return (
  <div>
    <img alt="aya" ref={ref1} src={ayablack} onMouseOver={handle_mouseover1} onMouseOut={handle_mouseout1}></img>
    <img alt ="nofar" ref={ref2} src={nblack} onMouseOver={handle_mouseover2} onMouseOut={handle_mouseout2}></img>
  
  </div>
)
}
export default App