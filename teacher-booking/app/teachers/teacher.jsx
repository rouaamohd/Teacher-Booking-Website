import React, { useState } from "react";
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
        {full ? '★' : half ? '☆' : '☆'}
      </span>
    );
  });

  return <div className={styles.starRating}>{stars}</div>;
};

export default function Teacher({ teacher }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={`${styles.CardContainer} ${isFlipped ? styles.flipped : ""}`}
    >
      <div className={styles.front}>
        <div className={styles.backgroundContainer}></div>
        <div className={styles.imageContainer}>
          <Image
            src={teacher.image} 
            alt={teacher.name}  
            width={100}
            height={120}
            className={styles.image}
          />
        </div>
        <div className={styles.infoContainer}>
          <h3 className={styles.name}>{teacher.name}</h3>
          <StarRating rating={parseFloat(teacher.reviews.rating)} /> 
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
          <div className={styles.reviews}>
            <h4 className={styles.backtitle}>Reviews</h4>
            <p>
              Rating: {teacher.reviews.rating} - "{teacher.reviews.text}"
            </p>
            <div className={styles.buttonContainer}>
              <button onClick={handleFlip} className={styles.bookBtn}>
                Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// export default function Teacher() {
//   const [isFlipped, setIsFlipped] = useState(false);

//   const handleFlip = () => {
//     setIsFlipped(!isFlipped);
//   };

//   return (
//     <div
//       className={`${styles.CardContainer} ${isFlipped ? styles.flipped : ""}`}
//     >
//       <div className={styles.front}>
//         <div className={styles.backgroundContainer}></div>
//         <div className={styles.imageContainer}>
//           <Image
//             src="/images/woman 4.jpg"
//             alt="Nara Smith"
//             width={100}
//             height={120}
//             className={styles.image}
//           />
//         </div>
//         <div className={styles.infoContainer}>
//           <h3 className={styles.name}>Dr. Nara Smith</h3>
//           <StarRating rating={4.8} /> {/* Add rating here */}
//           <p className={styles.class}>PhD in Organic Chemistry, MIT</p>
//           <p className={styles.class}>Teaching Experience: 10+ years</p>
//           <div className={styles.buttonContainer}>
//             <button className={styles.bookBtn}>Book Class</button>
//             <button className={styles.more} onClick={handleFlip}>
//               More
//             </button>
//           </div>
//         </div>
//       </div>
//       <div className={styles.back}>
//         <div className={styles.infoContainer}>
//           <h4 className={styles.backtitle}>Course Overview</h4>
//           <p>
//             Detailed study of molecular structures, reactions, and analytical
//             techniques in Organic Chemistry. Weekly lab sessions included.
//           </p>
//           <div className={styles.reviews}>
//             <h4 className={styles.backtitle}>Reviews</h4>
//             <p>
//               Rating: 4.8/5.0 - "Inspirational and thorough, with practical
//               applications in every lesson." - Jane Doe
//             </p>
//             <div className={styles.buttonContainer}>
//               <button onClick={handleFlip} className={styles.bookBtn}>
//                 Back
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
