import React from 'react';
import './styles.css'; // Припускаємо, що всі стилі в одному файлі для зручності

const TrainCard = ({ train }) => {
  return (
    <div className="train-card">
      <div className="train-header">
        <span className="train-number">{train.number}</span>
      </div>
      <div className="train-route">
        <h3>{train.from} — {train.to}</h3>
      </div>
      <div className="train-details">
        <div className="detail-item">
          <span className="detail-label">Відправлення:</span>
          <span className="detail-value">{train.date} о {train.time}</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Тривалість:</span>
          <span className="detail-value">{train.duration}</span>
        </div>
      </div>
      <button className="book-btn">Вибрати місця</button>
    </div>
  );
};

export default TrainCard;