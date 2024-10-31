"use client";

import React, { useState, useEffect } from "react";
import Loader from "./components/Loader";
import Header from "./components/Header";
import Teachers from "./teachers/Teachers";
import styles from "./page.module.css";

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
      setLoading(false);
    }
  };

  const handleSearch = (searchValue) => {
    setLoading(true);
    fetchTeachers(searchValue);
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className={styles.Home}>
          <Header handleSearch={handleSearch} />
          <main className={styles.CardsListHolder}>
            <Teachers initialTeachers={teachers} />
          </main>
        </div>
      )}
    </>
  );
}
