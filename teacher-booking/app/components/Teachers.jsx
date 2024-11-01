"use client"

import React, { useState } from "react"; 
import Teacher from "./Teacher";
import styles from "@/app/styles/teachers.module.css";
export default function Teachers({ initialTeachers }) {
  const [teachers, setTeachers] = useState(initialTeachers || []);

  return (
    <div className={styles.teachersContainer}>
      {teachers.map((teacher) => (
        <Teacher key={teacher.id} teacher={teacher} />
      ))}
    </div>
  );
  
}
