import React, { useState } from 'react';
import './Footer.css';
import Modal from '../common/Modal';
import PrivacyPolicy from '../common/privacyPolicy';

const Footer: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

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
            <div className="privacy-policy" onClick={handleShowModal}>
              Политика конфиденциальности
            </div>
          </div>
        </div>
      </footer>
      <Modal show={showModal} onClose={handleCloseModal}>
        <PrivacyPolicy />
      </Modal>
    </>
  );
};

export default Footer;
