import React from 'react';
import { Link } from 'react-router-dom';
import styles from './TrainCard.module.css';
import { MousePointer2, MoveRight, Train } from 'lucide-react';

const TrainCard = ({ train }) => {
  const { number, route, departure, duration, type, price } = train;
  
  const departureDate = new Date(departure);
  const formattedTime = departureDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
  const formattedDate = departureDate.toLocaleDateString([], { day: 'numeric', month: 'short' });

  return (
    <div className={`${styles.card} animate-fade-in`}>
      <div className={styles.info}>
        <div className={styles.header}>
          <span className={styles.number}>{number}</span>
          <span className={styles.type}>
            <Train size={14} style={{ marginRight: 6, opacity: 0.6 }} />
            {type}
          </span>
        </div>
        
        <div className={styles.routeContainer}>
          <div className={styles.city}>
            <span className={styles.cityName}>{route.from}</span>
            <span className={styles.time}>{formattedTime}, {formattedDate}</span>
          </div>
          
          <div className={styles.arrow}>
            <span className={styles.duration}>{duration}</span>
            <MoveRight size={24} strokeWidth={1.5} />
          </div>
          
          <div className={styles.city}>
            <span className={styles.cityName}>{route.to}</span>
            <span className={styles.time}>Arrives same day</span>
          </div>
        </div>
      </div>
      
      <div className={styles.action}>
        <div className={styles.price}>
          {price}<small>₴</small>
        </div>
        <Link to={`/booking/${train.id}`} className={styles.bookBtn} style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
          Select Seats
          <MousePointer2 size={18} />
        </Link>
      </div>
    </div>
  );
};

export default TrainCard;
