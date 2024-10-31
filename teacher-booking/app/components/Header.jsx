"use client";

import React, { useState } from "react";
import styles from "./Header.module.css";

export default function Header({ handleSearch, handleFilterSelect }) {
  return (
    <div className={styles.HeaderContainer}>
      <div className={styles.Logo}>teacherBooking.</div>
      <div className={styles.SearchBar}>
        <SearchBarComponent handleSearch={handleSearch} />
      </div>
      <div className={styles.Filter}>
        <MenuComponent handleFilterSelect={handleFilterSelect}/>
      </div>
    </div>
  );
}

const SearchBarComponent = ({ handleSearch }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const onEnter = (event) => {
    if (event.key === "Enter") {
      handleSearch(searchValue);
    }
  };

  return (
    <>
      <div className={styles.group}>
        <svg className={styles.icon} aria-hidden="true" viewBox="0 0 24 24">
          <g>
            <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
          </g>
        </svg>
        {/* <input placeholder="Search" type="search" className={styles.myinput} /> */}
        <input
          type="search"
          value={searchValue}
          onChange={handleInputChange}
          onKeyDown={onEnter}
          placeholder="Search"
          className={styles.myinput}
        />
      </div>
    </>
  );
};

const MenuComponent = ({ handleFilterSelect }) => {
  return (
    <div className={styles.menu}>
      <div className={styles.item}>
        <a href="#" className={styles.link}>
          <span> Filter By Subject </span>
          <svg viewBox="0 0 360 360">
            <g id="SVGRepo_iconCarrier">
              <path
                d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
              />
            </g>
          </svg>
        </a>
        <div className={styles.submenu}>
          {["All","Biology", "Neuroscience", "Chemistry", "Physics", "Environmental Science", "Mathematics", "Computer Science", "Economics", "History"].map(subject => (
            <div key={subject} className={styles.submenuItem}>
              <a href="#" className={styles.submenuLink} onClick={() => handleFilterSelect(subject)}>
                {subject}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

