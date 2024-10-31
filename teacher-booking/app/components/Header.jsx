import React from "react";
import styles from "./Header.module.css";
import Search from "./Search";


export default function Header() {
  return (
    <div className={styles.HeaderContainer}>
      <div className={styles.Logo}>teacherBooking.</div>
      <div className={styles.SearchBar}>
        <Search />
      </div>
      <div className={styles.Filter}>
        <MenuComponent/>
      </div>
    </div>
  );
}

const MenuComponent = () => {
  return (
    <div className={styles.menu}>
      <div className={styles.item}>
        <a href="#" className={styles.link}>
          <span> Filter By Subject </span>
          <svg viewBox="0 0 360 360" xmlSpace="preserve">
            <g id="SVGRepo_iconCarrier">
              <path
                id="XMLID_225_"
                d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
              ></path>
            </g>
          </svg>
        </a>
        <div className={styles.submenu}>
          <div className={styles.submenuItem}>
            <a href="#" className={styles.submenuLink}> Biology </a>
          </div>
          <div className={styles.submenuItem}>
            <a href="#" className={styles.submenuLink}> Neuroscience </a>
          </div>
          <div className={styles.submenuItem}>
            <a href="#" className={styles.submenuLink}> Chemistry </a>
          </div>
          <div className={styles.submenuItem}>
            <a href="#" className={styles.submenuLink}> Physics </a>
          </div>
          <div className={styles.submenuItem}>
            <a href="#" className={styles.submenuLink}> Environmental Science </a>
          </div>
          <div className={styles.submenuItem}>
            <a href="#" className={styles.submenuLink}> Mathematics </a>
          </div>
          <div className={styles.submenuItem}>
            <a href="#" className={styles.submenuLink}> Computer Science </a>
          </div>
          <div className={styles.submenuItem}>
            <a href="#" className={styles.submenuLink}> Economics </a>
          </div>
          <div className={styles.submenuItem}>
            <a href="#" className={styles.submenuLink}> History </a>
          </div>
        </div>
      </div>
    </div>
  );
}

