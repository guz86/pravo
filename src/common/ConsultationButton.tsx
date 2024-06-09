import React, { useState } from 'react';
import './ConsultationButton.css';
import PopupForm from './PopupForm';




const ConsultationButton: React.FC<{ nameButton: string }> = ({ nameButton }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

const handleClosePopup = () => {
  console.log('handleClosePopup');
  setIsPopupOpen(false); 
}; 

  return (
    <>
    <button className="consultation-button" onClick={handleOpenPopup}>{nameButton}</button>
    {isPopupOpen && <PopupForm onClose={handleClosePopup} />}
    </>
  );
};

export default ConsultationButton;
