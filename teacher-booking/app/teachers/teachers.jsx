"use client";
import React, { useState } from "react"; 
import Teacher from "./Teacher";
import styles from "./teachers.module.css";

export default function Teachers({ initialTeachers }) {
  // const [teachers, setTeachers] = useState(initialTeachers); 
  const [teachers, setTeachers] = useState(initialTeachers || []);

  async function handleLoadTeachers(value) {
    const response = await fetch(`/api/teachers?${value}`);
    setTeachers(await response.json()); 
  }

  return (
    <div className={styles.teachersContainer}>
      {
        teachers.map((teacher) => 
          <Teacher teacher={teacher}/> 
        )
      }
    </div>
  );
}
