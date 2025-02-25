import React from 'react'
import styles from './Footer.module.css'

export default function Footer() {
  return (   <>

 
      <footer className={styles.footer}>
        <div className={styles.container}>
          <p>&copy; {new Date().getFullYear()} <a href="https://ebrahim-mamdoh.github.io/portfolio./#">Ebrahim Mamdouh.</a> All Rights Reserved.</p>
        </div>
      </footer>    </>

  )
}
