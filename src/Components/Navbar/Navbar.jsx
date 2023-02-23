import React from 'react';
import styles from '../Navbar/navbar.module.css'

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
          <li className='nav-link projects'><a href="#">Projects</a></li>
          <li className='nav-link contact'><a href="#">Contanct</a></li>
          <li className='nav-link resume'><a href="#">Resume</a></li>
        </ul>
        
        
      </div>
      <div className={styles.but}>
        <button onClick={handleClick}>show</button>
      </div>
    </div>
    </>
  )
}

export default Navbar