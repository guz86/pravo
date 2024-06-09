import React, { useEffect } from 'react';
import './Map.css';

const Map: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.charset = 'utf-8';
    script.async = true;
    script.src =
      'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A1cd84b0032042b859d1605599ba3e6f3afdbe66b57ebf6e354a16a84f7ba484e&amp;width=100%25&amp;height=300&amp;lang=ru_RU&amp;scroll=true';
    document.getElementsByClassName('map__content')[0].appendChild(script);

    return () => {
      document.getElementsByClassName('map__content')[0].removeChild(script);
    };
  }, []);

  return <div className="map__content"></div>;
};

export default Map;
