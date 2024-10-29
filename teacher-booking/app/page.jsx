"use client"

import {useEffect, useState} from "react";
import styles from "./page.module.css";
import Loader from "./components/Loader";
import Header from "./components/Header";

export default function Home() {
  // Simulate loading time
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 4000);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <body className={styles.Home}>
          <header className={styles.Header}>
            <Header/>
          </header>
          <main className={styles.CardsListHolder}>
            {/* ADD TEACHERS COMPONENT HERE */}
          </main>
          <footer></footer>
        </body>
      )}
    </>
  );
}
