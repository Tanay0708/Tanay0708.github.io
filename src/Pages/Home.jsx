import React, { useEffect, useRef } from 'react'
import { About } from '../Components/About/About';
import Banner from '../Components/Banner/Banner';
import { GitStatus } from '../Components/GIT/GitStatus';
import Navbar from '../Components/Navbar/Navbar';
import Project from '../Components/Projects/Project';
import { Skill } from '../Components/Skills/Skill';



function Home() {




  return (
    <div>
        <Navbar />
       
        <Banner />
        <About />
        <Skill />
        <Project />
        <GitStatus />
    </div>
  )
}

export default Home