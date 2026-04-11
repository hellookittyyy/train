import React from 'react';
import styles from './WagonSelector.module.css';

const WagonSelector = ({ wagons, selectedWagon, onSelect }) => {
    return (
        <div className={styles.container}>
            {wagons.map((wagon) => (
                <button
                    key={wagon.id}
                    className={`${styles.wagonBtn} ${selectedWagon?.id === wagon.id ? styles.selected : ''}`}
                    onClick={() => onSelect(wagon)}
                >
                    Wagon {wagon.number}
                    <span>{wagon.type}</span>
                </button>
            ))}
        </div>
    );
};

export default WagonSelector;
