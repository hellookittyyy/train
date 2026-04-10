import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Роут для Лаб 10 буде тут: <Route path="/booking/:trainId" element={<Booking />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;