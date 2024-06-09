import React from 'react';
import './Header.css';
import ConsultationButton from '../common/ConsultationButton';
import Name from '../common/Name';
import ContactForm from '../common/ContactForm';

const Header: React.FC = () => {
  return (
    <div className="navbar">
      <Name />
      <ConsultationButton nameButton={'Бесплатная консультация'} />
      <ContactForm />
    </div>
  );
};

export default Header;
