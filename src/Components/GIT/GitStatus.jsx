import React from 'react';
import GitHubCalendar from 'react-github-calendar';
import styles from './Git.module.css'


export const GitStatus = () => {
  return (
    <div className={styles.gitStatus} >
        <GitHubCalendar username='Tanay0708' style={{fontWeight:'700',textTransform:'uppercase',color:'honeydew'}} />
   
        <img id='github-streak-status' src="https://github-readme-streak-stats.herokuapp.com?user=Tanay0708&border_radius=3&type=png" alt="" />
        <img id="github-stats-card"  src="https://github-readme-stats.vercel.app/api?username=Tanay0708&show_icons=true&theme=dark" alt="" />
        <img id="github-top-langs"  src="https://github-readme-stats.vercel.app/api/top-langs/?username=Tanay0708&hide_progress=false" alt="" />
    </div>
  )
}
