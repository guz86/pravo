import React from 'react';
import './Home.css';
import TopVideo from '../components/TopVideo';
import Services from '../components/Services';

const Home: React.FC = () => {
  return (
    <>
      <div className="home-container">
        <TopVideo />
        <Services />
      </div>
    </>
  );
};

export default Home;
