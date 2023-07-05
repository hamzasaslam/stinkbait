// Card.jsx

import React from 'react';
import styles from './Card.module.css';
import cardsData from './cardData';
import { AiFillCheckCircle } from 'react-icons/ai';

const Card = () => {
  return (
    <div className={styles.cardDisplay}>
      {cardsData.map((card, index) => (
        <div
          key={index}
          className={`${styles.card} ${index === 2 ? styles.blackCard : ''}`}
        >
          <div className={styles.cardHead}>
            <h2 className={styles.title}>{card.title}</h2>
            <div className={styles.priceDuration}>
              <p className={styles.price}>{card.price}</p>
              <p className={styles.duration}>{card.duration}</p>
            </div>
          </div>
          <ul className={styles.content}>
            {card.content.map((item, itemIndex) => (
              <li key={itemIndex}>
                <AiFillCheckCircle className={styles.icon} />
                {item}
              </li>
            ))}
          </ul>
          <p className={styles.highlight}>{card.highlight}</p>
          <button
            className={`${styles.button} ${styles.greenButton} ${
              index === 2 ? styles.whiteFont : ''
            }`}
          >
            {card.button}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Card;
