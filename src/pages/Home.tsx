import React from 'react';
import './Home.css';
import TopVideo from '../components/TopVideo';
import Services from '../components/Services';
import Steps from '../components/Steps';
import Map from '../components/Map';
import ConsultationButton from '../common/ConsultationButton';

const Home: React.FC = () => {
  return (
    <>
      <div className="home-container">
        <TopVideo />
        <Services />
        <ConsultationButton nameButton={'Обратиться'} />
        <Steps />
        <ConsultationButton nameButton={'Бесплатная консультация'} />
        <Map />
      </div>
    </>
  );
};

export default Home;
