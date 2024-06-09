import React from 'react';
import './Home.css';
import TopVideo from '../components/TopVideo';
import Services from '../components/Services';
import Steps from '../components/Steps';
import Map from '../components/Map';

const Home: React.FC = () => {
  return (
    <>
      <div className="home-container">
        <TopVideo />
        <Services />
        <Steps />
        <Map />
      </div>
    </>
  );
};

export default Home;
