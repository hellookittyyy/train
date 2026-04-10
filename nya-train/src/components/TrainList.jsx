import React from 'react';
import TrainCard from './TrainCard';

const TrainList = ({ trains }) => {
  if (trains.length === 0) {
    return (
      <div style={{ 
        textAlign: 'center', 
        padding: '60px 20px', 
        background: 'var(--card-bg)', 
        borderRadius: 'var(--radius-lg)',
        border: '1px dashed var(--accent)',
        marginTop: '20px'
      }}>
        <h3 style={{ color: 'var(--text-main)', marginBottom: '8px' }}>No trains found matching your search</h3>
        <p style={{ color: 'var(--text-muted)' }}>Try adjusting your destination or train number.</p>
      </div>
    );
  }

  return (
    <div style={{ marginTop: '20px' }}>
      {trains.map(train => (
        <TrainCard key={train.id} train={train} />
      ))}
    </div>
  );
};

export default TrainList;
