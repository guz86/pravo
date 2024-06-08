import React from 'react';
import './TopVideo.css';

const getRandomVideo = (): string => {
  const videos = ['video1.mp4', 'video2.mp4'];
  const randomIndex = Math.floor(Math.random() * videos.length);
  return videos[randomIndex];
};

const TopVideo: React.FC = () => {
  const videoSrc = getRandomVideo();

  return (
    <div className="top__content">
      <div className="top__content-item">
        <h1 className="top__title">Юрист Рыжков Сергей Анатольевич</h1>
        <div className="top__text">
          Если у меня получится решить Вашу проблему по телефону, я не возьму с
          Вас денег. Консультации по телефону я провожу бесплатно.
        </div>
      </div>
      <video className="top__content-video" loop muted autoPlay>
        <source src={`https://zhilischnoe-pravo.ru/video/${videoSrc}`} type="video/mp4" />
      </video>
    </div>
  );
};

export default TopVideo;
