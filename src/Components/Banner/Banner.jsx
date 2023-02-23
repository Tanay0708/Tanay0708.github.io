import React ,{useRef, useEffect} from 'react';
import styles from './Banner.module.css'
import {gsap} from 'gsap/all';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)

const Banner = () => {




  return (
    <div>
      <div className={styles.behind}>


      </div>
         <div  className={styles.namediv} >

      
           <h1 className={styles.name}  >
           
            <span >Hi, I am </span>
            <br/>
            <span className={styles.nameCap}>Tanay Vyas,</span>  
            <br />
            <span>Full stack Web Developer</span>
            
           

           </h1>
           <button className={styles.resumeBut}>Resume</button>
        </div>
        
     
    </div>
  )
}

export default Banner