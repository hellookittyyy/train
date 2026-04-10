import React from 'react';
import { Search, MapPin, Hash } from 'lucide-react';

const SearchFilters = ({ searchTerm, setSearchTerm, searchRoute, setSearchRoute }) => {
  return (
    <div style={{
      background: 'white',
      padding: '24px',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-sm)',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '20px',
      marginBottom: '32px',
      marginTop: '20px'
    }}>
      <div style={{ position: 'relative' }}>
        <div style={{ 
          position: 'absolute', 
          left: '16px', 
          top: '50%', 
          transform: 'translateY(-50%)',
          color: 'var(--primary)',
          display: 'flex',
          alignItems: 'center'
        }}>
          <Hash size={18} />
        </div>
        <input
          type="text"
          placeholder="Search by train number (e.g. 001-K)"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: '100%',
            padding: '16px 16px 16px 48px',
            borderRadius: 'var(--radius-md)',
            border: '2px solid var(--secondary)',
            fontSize: '1rem',
            outline: 'none',
            transition: 'border-color 0.2s'
          }}
          onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
          onBlur={(e) => e.target.style.borderColor = 'var(--secondary)'}
        />
      </div>

      <div style={{ position: 'relative' }}>
        <div style={{ 
          position: 'absolute', 
          left: '16px', 
          top: '50%', 
          transform: 'translateY(-50%)',
          color: 'var(--primary)',
          display: 'flex',
          alignItems: 'center'
        }}>
          <MapPin size={18} />
        </div>
        <input
          type="text"
          placeholder="Search by arrival city (e.g. Lviv)"
          value={searchRoute}
          onChange={(e) => setSearchRoute(e.target.value)}
          style={{
            width: '100%',
            padding: '16px 16px 16px 48px',
            borderRadius: 'var(--radius-md)',
            border: '2px solid var(--secondary)',
            fontSize: '1rem',
            outline: 'none',
            transition: 'border-color 0.2s'
          }}
          onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
          onBlur={(e) => e.target.style.borderColor = 'var(--secondary)'}
        />
      </div>
    </div>
  );
};

export default SearchFilters;
