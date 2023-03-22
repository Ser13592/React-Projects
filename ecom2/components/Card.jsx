import { urlFor } from '../lib/client';
import styles from '../styles/card.module.css';

export default function Card({ p }) {
  return (
    <div className={styles.card}>
      <div className={styles.front}>
        {/* Front of card content goes here */}
        <img src={urlFor(p.image && p.image[0])} width={80} height={80} alt="Front of card" />
        <h2>{p.name}</h2>
      </div>
      <div className={styles.back}>
        {/* Back of card content goes here */}
        <h2>Back of Card</h2>
      </div>
    </div>
  );
}
