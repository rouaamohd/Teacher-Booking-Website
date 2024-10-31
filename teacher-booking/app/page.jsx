"use client"

import {useEffect, useState} from "react";
import styles from "./page.module.css";
import Loader from "./components/Loader";
import Header from "./components/Header";
import Teacher from "./teachers/Teacher";
import Teachers from "./teachers/Teachers";
import teachersRepo from "./repo/teachersRepo";


export default function Home() {
    const [loading, setLoading] = useState(true);
    const [teachers, setTeachers] = useState([]);

    useEffect(() => {
        // Fetch the teachers data asynchronously
        async function fetchTeachers() {
            // const fetchedTeachers = await teachersRepo.getTeachers();
            const fetchedTeachers = await fetch('/api/teachers/', {method: 'GET'})
            setTeachers(await fetchedTeachers.json());
            setLoading(false); // Update loading state once data is fetched
        }

        fetchTeachers();
    }, []); // Empty dependency array ensures this effect runs only once on mount

    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <body className={styles.Home}>
                    <header className={styles.Header}>
                        <Header />
                    </header>
                    <main className={styles.CardsListHolder}>
                        <Teachers initialTeachers={teachers} />
                    </main>
                    <footer></footer>
                </body>
            )}
        </>
    );
}