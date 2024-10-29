import React from 'react'
import styles from './Header.module.css'
import Search from './Search'

export default function Header() {
  return (
    <div className={styles.HeaderContainer}>
        <div className={styles.Logo}>teacherBooking.</div>
        <div className={styles.SearchBar}>
            <Search/>
        </div>
        <div className={styles.Filter}></div>
    </div>
  )
}
