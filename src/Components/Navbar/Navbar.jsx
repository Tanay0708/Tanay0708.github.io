import React from 'react';
import styles from '../Navbar/navbar.module.css'
import resume from '../../Resume/Tanay_Vyas_Resume.pdf';
import Project from '../Projects/Project'
import { Stack, HStack, VStack, Text } from '@chakra-ui/react';

function Navbar() {


  const handleClick =() => {
    console.log("yes")
  }


  return (
    <>
    <div className={styles.nav} id='nav-menu' >
      <div>
      <h2 className={styles.name}>TANAY VYAS</h2>
      </div>
      <div className= {styles.detail}>
        <ul>
          <li className='nav-link home'><a href="#">Home</a></li>
          <li className='nav-link about' ><a href="#"> About me</a></li>
          <li className='nav-link skills'><a href="#">Skills</a></li>
          <li className='nav-link projects'><a href={<Project />}>Projects</a></li>
          <li className='nav-link contact'><a href="#">Contanct</a></li>
          <li className='nav-link resume'>
            <a href={resume}
              download='Tanay_Vyas_Resume.pdf'
            >Resume</a>
            </li>
        </ul>
        
        
      </div>
      <div className={styles.but}>
        <button onClick={handleClick}>show</button>
      </div>
    </div>
    {/* <div>
    <HStack className='nav-menu'>
        <Text className='nav-link home' fontWeight='700' fontSize='0.8rem' textTransform='uppercase' transition='all 0.50s ease' _hover={{color:'red'}} >Home</Text>
        <Text className='nav-link about' fontWeight='700' fontSize='0.8rem' textTransform='uppercase' transition='all 0.50s ease' _hover={{color:'red'}}  >About Me</Text>
        <Text className='nav-link skills' fontWeight='700' fontSize='0.8rem' textTransform='uppercase' transition='all 0.50s ease' _hover={{color:'red'}}  >Skills</Text>
        <Text className='nav-link projects' fontWeight='700' fontSize='0.8rem' textTransform='uppercase' transition='all 0.50s ease' _hover={{color:'red'}}  >Projects</Text>
        <Text className='nav-link contanct' fontWeight='700' fontSize='0.8rem' textTransform='uppercase' transition='all 0.50s ease' _hover={{color:'red'}} >Contanct</Text>
        <a href="Tanay_Vyas_Resume.pdf">
        <Text   fontWeight='700' fontSize='0.8rem' textTransform='uppercase' transition='all 0.50s ease' _hover={{color:'white'}} >Resume</Text>
        </a>
    </HStack>
    </div> */}
    </>
  )
}

export default Navbar