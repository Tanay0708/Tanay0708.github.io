import React from 'react';
import styles from './About.module.css';
import { FaHeart } from "react-icons/fa";
import {AiOutlineLinkedin} from 'react-icons/ai';
import {AiFillGithub} from 'react-icons/ai'

export const About = () => {
  return (
    <div className={styles.about} >

        <div className={styles.aboutMe}>
            <h1>About Me</h1>
            <p>Aspiring Full Stack web developer with advance
problem solving skills and 1200+ hours of
coding experience . Creating Responsive
websites using React, JavaScript, HTML, CSS and
other libraries . Looking forward for the
opportunity to be a part of the creative project
to learn more and to make a significant
contribution to the organization.</p>

  <AiFillGithub style={{fontSize:'30px',marginRight:'50px'}}/>  
<AiOutlineLinkedin style={{fontSize:'30px'}}/>


        </div>
        <div className={styles.image}>
            {/* <img src="https://img1.hkrtcdn.com/18588/prd_1858760-MB-Fuel-One-Whey-Protein-Immunity-1.87-lb-Chocolate_c_l.jpg" alt="" /> */}
        </div>

    </div>
  )
}
