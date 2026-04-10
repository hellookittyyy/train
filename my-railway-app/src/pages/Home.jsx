import React from 'react';
import TrainList from '../components/TrainList';
import '../components/styles.css';

const Home = () => {
  return (
    <div className="page-container">
      <header className="page-header">
        <h1>Розклад потягів</h1>
        <p>Знайди свій ідеальний маршрут</p>
      </header>
      <main>
        <TrainList />
      </main>
    </div>
  );
};

export default Home;