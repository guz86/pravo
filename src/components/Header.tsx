import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';
import ConsultationButton from '../common/ConsultationButton';
import Name from '../common/Name';
import ContactForm from '../common/ContactForm';

const Header: React.FC = () => {
  return (
    <Navbar expand="lg" className="bg-dark justify-content-end">
      <Name />
      <ConsultationButton nameButton={'Бесплатная консультация'} />
      <ContactForm />
    </Navbar>
  );
};

export default Header;
