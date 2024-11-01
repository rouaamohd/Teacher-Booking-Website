"use client";

import React, { useState, useEffect } from "react";
import Loader from "@/app/components/Loader";
import Header from "@/app/components/Header";
import Teachers from "@/app/components/Teachers";
import styles from "@/app/styles/page.module.css";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    fetchTeachers('');
  }, []);

  const fetchTeachers = async (val) => {
    try {
      const response = await fetch(`/api/teachers?query=${encodeURIComponent(val)}`);
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      const data = await response.json();
      if (data.error) {
        throw new Error(data.error);
      }
      setTeachers(data);
    } catch (error) {
      console.error("Failed to fetch teachers:", error);
    } finally {
      // Delay the loading state change to show the loader for a bit longer
      setTimeout(() => {
        setLoading(false);
      }, 1000); // Adjust the delay time (in milliseconds) as desired
    }
  };
  const fetchTeachersBySubject = async (val) => {
    try {
      const response = await fetch(`/api/teachers?subject=${encodeURIComponent(val)}`);
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      const data = await response.json();
      if (data.error) {
        throw new Error(data.error);
      }
      setTeachers(data);
    } catch (error) {
      console.error("Failed to fetch teachers:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (searchValue) => {
    setLoading(true);
    fetchTeachers(searchValue);
  };

  const handleFilter = (filter) => {
    setLoading(true);
    fetchTeachersBySubject(filter)
  }

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className={styles.Home}>
          <Header handleSearch={handleSearch} handleFilterSelect={handleFilter}/>
          <main className={styles.CardsListHolder}>
            <Teachers initialTeachers={teachers} />
          </main>
        </div>
      )}
    </>
  );
}
