import React, { useState, useEffect } from "react";
import styles from "./teacher.module.css";
import Image from "next/image";
import Link from "next/link";

// Rating component
const StarRating = ({ rating }) => {
  const stars = Array.from({ length: 5 }, (_, index) => {
    const full = index < Math.floor(rating);
    const half = index === Math.floor(rating) && rating % 1 !== 0;

    return (
      <span key={index} className={styles.star}>
        {full ? "★" : half ? "☆" : "☆"}
      </span>
    );
  });

  return <div className={styles.starRating}>{stars}</div>;
};

export default function Teacher({ teacher }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [reviews, setReviews] = useState(null);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  useEffect(() => {
    async function fetchReviews() {
      try {
        const response = await fetch(`/api/reviews/${teacher.id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch reviews");
        }
        const data = await response.json();
        setReviews(data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    }

    if (teacher?.id) {
      fetchReviews();
    }
  }, [teacher?.id]);

  if (!teacher) {
    return null; // Render nothing if teacher data is not available
  }

  return (
    <div
      className={`${styles.CardContainer} ${isFlipped ? styles.flipped : ""}`}
    >
      <div className={styles.front}>
        <div className={styles.backgroundContainer}></div>
        <div className={styles.imageContainer}>
          {teacher.image && (
            <Image
              src={teacher.image}
              alt={teacher.name}
              width={100}
              height={120}
              className={styles.image}
              crossOrigin="anonymous"
            />
          )}
        </div>
        <div className={styles.infoContainer}>
          <h3 className={styles.name}>{teacher.name}</h3>
          {reviews && <StarRating rating={parseFloat(reviews.rating || 0)} />}
          <p className={styles.class}>{teacher.qualifications}</p>
          <p className={styles.class}>{teacher.teachingExperience}</p>
          <div className={styles.buttonContainer}>
            <button className={styles.bookBtn}>Book Class</button>
            <button className={styles.more} onClick={handleFlip}>
              More
            </button>
          </div>
        </div>
      </div>
      <div className={styles.back}>
        <div className={styles.infoContainer}>
          <h4 className={styles.backtitle}>Course Overview</h4>
          <p>{teacher.courseOverview}</p>
          {reviews && (
            <div className={styles.reviews}>
              <h4 className={styles.backtitle}>Reviews</h4>
              <p>
                Rating: {reviews.rating} -{" "}
                <span className={styles.reviewText}>"{reviews.text}"</span>
              </p>
              <div className={styles.buttonContainer}>
                <button onClick={handleFlip} className={styles.bookBtn}>
                  Back
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}