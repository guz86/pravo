import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-contact-form-container">
          <div className="footer-address-block">
            Санкт-Петербург, Просвещения пр. 43
          </div>
          <div className="footer-phone-block">
            <a className="footer-phone-link" href="tel:+79817506666">
              +7 (931) 590 99 70
            </a>
          </div>
          <div>
            <div className="privacy-policy">Политика конфиденциальности</div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
