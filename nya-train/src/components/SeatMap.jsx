import React from 'react';
import styles from './SeatMap.module.css';

const SeatMap = ({ capacity, bookedSeats, selectedSeats, onToggleSeat }) => {
    const isPlatzkart = capacity === 54;
    const numCompartments = isPlatzkart ? 9 : capacity / 4;

    const getSeatClass = (seatId) => {
        let classes = '';
        if (bookedSeats.includes(seatId)) classes = styles.booked;
        else if (selectedSeats.includes(seatId)) classes = styles.selected;
        else classes = styles.free;

        if (seatId % 2 === 0) classes += ` ${styles.upperSeat}`;
        else classes += ` ${styles.lowerSeat}`;

        return classes;
    };

    const renderSeat = (seatId) => (
        <button
            key={seatId}
            disabled={bookedSeats.includes(seatId)}
            className={`${styles.seat} ${getSeatClass(seatId)}`}
            onClick={() => onToggleSeat(seatId)}
            title={`Seat ${seatId}`}
        >
            {seatId}
        </button>
    );

    return (
        <div className={styles.container}>
            <div className={styles.mapHeader}>
                <h3>Wagon Seat Map</h3>
                <div className={styles.legend}>
                    <div className={styles.legendItem}>
                        <div className={`${styles.colorBox} ${styles.free}`}></div> Free
                    </div>
                    <div className={styles.legendItem}>
                        <div className={`${styles.colorBox} ${styles.selected}`}></div> Selected
                    </div>
                    <div className={styles.legendItem}>
                        <div className={`${styles.colorBox} ${styles.booked}`}></div> Booked
                    </div>
                    <div className={styles.legendItem} style={{marginLeft: '12px'}}>
                        <div className={`${styles.colorBox} ${styles.free} ${styles.upperSeat}`}></div> Upper
                    </div>
                    <div className={styles.legendItem}>
                        <div className={`${styles.colorBox} ${styles.free} ${styles.lowerSeat}`}></div> Lower
                    </div>
                </div>
            </div>

            <div className={styles.wagonWrapper}>
                <div className={styles.wagonOutline}>
                    <div className={styles.serviceArea}>
                        <span>👨‍✈️</span>
                    </div>

                    <div className={styles.compartments}>
                        {Array.from({ length: numCompartments }, (_, i) => {
                            const n = i + 1;
                            const leftUpper = 4 * n - 2;
                            const rightUpper = 4 * n;
                            const leftLower = 4 * n - 3;
                            const rightLower = 4 * n - 1;

                            const leftSide = 56 - 2 * n;
                            const rightSide = 55 - 2 * n;

                            return (
                                <div key={n} className={styles.compartment}>
                                    <div className={`${styles.mainSeats} ${isPlatzkart ? styles.platzkartMainSeats : styles.coupeMainSeats}`}>
                                        <div className={styles.seatRow}>
                                            {renderSeat(leftUpper)}
                                            {renderSeat(rightUpper)}
                                        </div>
                                        <div className={styles.seatRow}>
                                            {renderSeat(leftLower)}
                                            {renderSeat(rightLower)}
                                        </div>
                                    </div>

                                    {isPlatzkart ? (
                                        <>
                                            <div className={styles.aisle}></div>
                                            <div className={`${styles.sideSeats} ${styles.platzkartSideSeats}`}>
                                                {renderSeat(leftSide)}
                                                {renderSeat(rightSide)}
                                            </div>
                                        </>
                                    ) : (
                                        <div className={styles.coupeAisle}></div>
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    <div className={styles.serviceArea}>
                        <span>🚻</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SeatMap;
