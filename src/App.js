
import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import Home from './Pages/Home';
import { motion } from 'framer-motion'; 



function App() {

  const [mousePosition,setMousePosition] = useState({
    X:0,
    y:0
  });

  // console.log(mousePosition);

  useEffect(() => {

    const mouseMove = (e) => {
        setMousePosition({
          x: e.clientX,
          y: e.clientY
        })
    }
    
    
    window.addEventListener('mousemove',mouseMove);

    return () => {
      window.removeEventListener("mousemove",mouseMove);
    }
  },[])

  const variants = {
    default : {
      x : mousePosition.x -150,
      y : mousePosition.y -70
    }
  }

  return (
    <div className="App">
      <Home />
   
      {/* <div className={'helper'}>

</div> */}
      <motion.div
      
      className='cursor'
      variants={variants}
      animate="default"
      />

     
    </div>
  );
}

export default App;
