import React from 'react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <h1>Юрист Рыжков Сергей Анатольевич</h1>
      <p>
        Если у меня получится решить Вашу проблему по телефону, я не возьму с
        Вас денег. Консультации по телефону я провожу бесплатно.
      </p>
    </div>
  );
};

export default Home;
