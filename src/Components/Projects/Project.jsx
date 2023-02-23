import React, { useEffect } from 'react';
import styles from '../Projects/Project.module.css';

import gsap from 'gsap';


const Project = () => {
// useEffect(() => {

// })



  return (
    <>

        <div>
            <h1>PROJECTS</h1>

        </div>

        <div className={styles.main}>
            <div className={styles['project-card']}>
              <div className={styles.image}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpYNzcH1n-pkI4h2jAKyGv8SNCl2JcD3CMOA&usqp=CAU" alt="" />
              </div>
              <div className={styles.description}>
                <h1 className={styles['project-title']}>MYNTRA CLONE</h1>
                <p className={styles['project-description']}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero minima, quod voluptatum ullam veniam sed sunt, ex facere laborum quasi beatae animi eaque possimus alias deserunt porro. Sequi, laboriosam quas?</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui libero, dolorem quisquam non consequatur, assumenda voluptas tenetur accusantium porro dolores minima blanditiis. Deserunt unde ad ducimus quas temporibus inventore enim.</p>
                <h3 className={styles['project-tech-stack']}>--TECH STACKS--</h3>

              </div>
            </div>
            <div className={styles.sub}>
            
        <div className={styles.description}>
                <h1>MYNTRA CLONE</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero minima, quod voluptatum ullam veniam sed sunt, ex facere laborum quasi beatae animi eaque possimus alias deserunt porro. Sequi, laboriosam quas?</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui libero, dolorem quisquam non consequatur, assumenda voluptas tenetur accusantium porro dolores minima blanditiis. Deserunt unde ad ducimus quas temporibus inventore enim.</p>
                <h3>--TECH STACKS--</h3>

              </div>
              <div className={styles.image}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpYNzcH1n-pkI4h2jAKyGv8SNCl2JcD3CMOA&usqp=CAU" alt="" />

        </div>
            </div>
            <div className={styles.sub}>
            <div className={styles.image}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpYNzcH1n-pkI4h2jAKyGv8SNCl2JcD3CMOA&usqp=CAU" alt="" />
          
        </div>
        <div className={styles.description}>
                <h1>MYNTRA CLONE</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero minima, quod voluptatum ullam veniam sed sunt, ex facere laborum quasi beatae animi eaque possimus alias deserunt porro. Sequi, laboriosam quas?</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui libero, dolorem quisquam non consequatur, assumenda voluptas tenetur accusantium porro dolores minima blanditiis. Deserunt unde ad ducimus quas temporibus inventore enim.</p>
                <h3>--TECH STACKS--</h3>

              </div>
            </div>
            <div className={styles.sub}>
         
<div className={styles.description}>
                <h1>MYNTRA CLONE</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero minima, quod voluptatum ullam veniam sed sunt, ex facere laborum quasi beatae animi eaque possimus alias deserunt porro. Sequi, laboriosam quas?</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui libero, dolorem quisquam non consequatur, assumenda voluptas tenetur accusantium porro dolores minima blanditiis. Deserunt unde ad ducimus quas temporibus inventore enim.</p>
                <h3>--TECH STACKS--</h3>

              </div>
              <div className={styles.image}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpYNzcH1n-pkI4h2jAKyGv8SNCl2JcD3CMOA&usqp=CAU" alt="" />

</div>
</div>    
        </div>   

    </>
  )
}

export default Project