import React from 'react'
import styles from '@/app/styles/NavBar.module.css'

export default function NavBar() {
    return (
      <nav className={styles.navbar}>
        {/* Logo */}
        <div className={styles.logo}>
          {/* <h2>Logo</h2> */}
          <div className={styles.Logo}>teacherBooking.</div>
        </div>
  
        {/* Centered Navigation Links */}
        <ul className={styles.navLinks}>
          <li className={styles.navItem}>Home</li>
          <li className={styles.navItem}>My Account</li>
          <li className={styles.navItem}>Messages</li>
          <li className={styles.navItem}>Settings</li>
          <li className={styles.navItem}>Contact Us</li>
        </ul>
  
        {/* Login/Sign-up */}
        <div className={styles.auth}>
          <button className={styles.authButton}>Login/Sign Up</button>
        </div>
      </nav>
    );
  }