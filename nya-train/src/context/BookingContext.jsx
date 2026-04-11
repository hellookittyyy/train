import React, { createContext, useContext, useState } from 'react';

const BookingContext = createContext();

export const useBooking = () => {
    const context = useContext(BookingContext);
    if (!context) {
        throw new Error('useBooking must be used within a BookingProvider');
    }
    return context;
};

export const BookingProvider = ({ children }) => {
    const [selectedWagon, setSelectedWagon] = useState(null);
    const [selectedSeats, setSelectedSeats] = useState([]);

    const toggleSeat = (seatId) => {
        setSelectedSeats(prev => {
            if (prev.includes(seatId)) {
                return prev.filter(id => id !== seatId);
            } else {
                return [...prev, seatId];
            }
        });
    };

    const clearSelection = () => {
        setSelectedWagon(null);
        setSelectedSeats([]);
    };

    return (
        <BookingContext.Provider value={{
            selectedWagon,
            setSelectedWagon,
            selectedSeats,
            setSelectedSeats,
            toggleSeat,
            clearSelection
        }}>
            {children}
        </BookingContext.Provider>
    );
};
