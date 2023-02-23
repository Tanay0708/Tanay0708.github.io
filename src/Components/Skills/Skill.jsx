import React from 'react'
import styles from './Skill.module.css';

export const Skill = () => {
  return (
    <div className={styles.skillMain} >
        <h1>MY SKILLs</h1>

        <div className={styles.skills}>
                <div className={styles["skills-card"]}>
                        <img src="https://cdn-icons-png.flaticon.com/512/1051/1051328.png" className={styles['skills-card-img']} alt="" />
                        <h2 className={styles['skills-card-name']}>HTML</h2>
                </div>
                <div className={styles["skills-card"]}>
                    <img src="https://cdn-icons-png.flaticon.com/512/732/732007.png" className={styles['skills-card-img']} alt="" />
                    <h2 className={styles['skills-card-name']}>CSS</h2>
                </div>
                <div className={styles["skills-card"]}>
                    <img src="https://cdn-icons-png.flaticon.com/512/721/721671.png" className={styles['skills-card-img']} alt="" />
                    <h2 className={styles['skills-card-name']}>JAVASCRIPT</h2>
                </div>
                <div className={styles["skills-card"]}>
                    <img src="https://cdn-icons-png.flaticon.com/512/3393/3393920.png" className={styles['skills-card-img']} alt="" />
                    <h2 className={styles['skills-card-name']}>REACT</h2>
                </div>
                <div className={styles["skills-card"]}>
                    <img src="https://cdn-icons-png.flaticon.com/512/1199/1199124.png" className={styles['skills-card-img']} alt="" />
                    <h2 className={styles['skills-card-name']}>HTML</h2>
                </div>
                <div className={styles["skills-card"]}>
                    <img src="https://cdn-icons-png.flaticon.com/512/1199/1199124.png" className={styles['skills-card-img']} alt="" />
                    <h2 className={styles['skills-card-name']}>HTML</h2>
                </div>
                <div className={styles["skills-card"]}>
                    <img src="https://cdn-icons-png.flaticon.com/512/1199/1199124.png" className={styles['skills-card-img']} alt="" />
                    <h2 className={styles['skills-card-name']}>HTML</h2>
                </div>
                <div className={styles["skills-card"]}>
                    <img src="https://cdn-icons-png.flaticon.com/512/1199/1199124.png" className={styles['skills-card-img']} alt="" />
                    <h2 className={styles['skills-card-name']}>HTML</h2>
                </div>
        </div>
        
    </div>
  )
}
