import React, { useState } from 'react';
import TrainCard from './TrainCard';
import { trains } from '../data/trains';
import './styles.css';

const TrainList = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTrains = trains.filter(train => {
    const query = searchQuery.toLowerCase();
    return (
      train.number.toLowerCase().includes(query) ||
      train.from.toLowerCase().includes(query) ||
      train.to.toLowerCase().includes(query)
    );
  });

  return (
    <div className="train-list-container">
      <div className="search-bar">
        <input 
          type="text" 
          placeholder="Пошук за номером або містом..." 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
      </div>
      
      {filteredTrains.length > 0 ? (
        <div className="train-grid">
          {filteredTrains.map(train => (
            <TrainCard key={train.id} train={train} />
          ))}
        </div>
      ) : (
        <p className="no-results">За вашим запитом нічого не знайдено 🌸</p>
      )}
    </div>
  );
};

export default TrainList;