import React from 'react';
import styles from './About.module.css';
import { FaHeart } from "react-icons/fa";
import {AiOutlineLinkedin} from 'react-icons/ai';
import {AiFillGithub} from 'react-icons/ai';
import { Container, HStack } from '@chakra-ui/react';
import proimage from '../Image/TanayCopy.JPG'; 

export const About = () => {
  return (
    <div className={styles.about} >
{/* <Container className='about section' id='about' backgroundColor='#212225' color='white' display='flex' gap='20%'> */}
        <div className={styles.aboutMe}>
          
            <h1 id='user-detail-name' style={{fontSize:'2rem',fontWeight:'700',marginBottom:'20px'}}>About Me</h1>
            <p id='user-detail-intro'>Aspiring Full Stack web developer with advance
problem solving skills and 1200+ hours of
coding experience . Creating Responsive
websites using React, JavaScript, HTML, CSS and
other libraries . Looking forward for the
opportunity to be a part of the creative project
to learn more and to make a significant
contribution to the organization.</p>

<HStack marginLeft='20%'>
  <a href="https://github.com/Tanay0708" >
  <AiFillGithub id='contact-github'  style={{fontSize:'30px',marginRight:'50px'}} />  
  </a>
<AiOutlineLinkedin id='contact-linkedin' style={{fontSize:'30px'}}/>
</HStack>

        </div>
        <div className={styles.image}>
            <img src={proimage} alt="" />
        </div>
{/* </Container> */}
    </div>
  )
}
