"use client";

import { React, useState } from "react";
import styles from "./Search.module.css";

export default function Search({ handleTeacherSearch }) {
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const onEnter = () => {
    handleTeacherSearch(searchValue);
  };

  return (
    <>
      <input
        className={styles.SearchBox}
        // list="list"
        name="searchValue"
        placeholder="Search teachers"
        onChange={handleInputChange}
      />
    </>
  );
}
