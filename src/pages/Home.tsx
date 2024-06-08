import React from 'react';
import './Home.css';
import TopVideo from '../components/TopVideo';

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <TopVideo /> {/* Используйте компонент TopVideo */}
    </div>
  );
};

export default Home;
