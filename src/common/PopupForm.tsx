import React, { useEffect, useRef } from 'react';
import './PopupForm.css';

interface PopupFormProps {
  onClose: () => void;
}

const PopupForm: React.FC<PopupFormProps> = ({ onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [onClose]);

  return (
    <div className="modal-overlay">
      <div className="modal-container" ref={modalRef}>
        <form action="https://api.web3forms.com/submit" method="POST" className="contact-form" id="contact-form">
          <input type="hidden" name="access_key" value="999999-b91a-9999-bbd4-b78ff5d1297c" />
          <input type="text" name="name" placeholder="Имя" className="input-field" required />
          <input type="email" name="email" placeholder="Email" className="input-field" />
          <input type="text" name="Phone Number" placeholder="Номер телефона" className="input-field" required />
          <textarea name="message" placeholder="Сообщение" className="input-field" required></textarea>
          <button type="submit" className="submit-button">Отправить</button>
          <button type="button" className="close-button" onClick={onClose}>Закрыть</button>
        </form>
      </div>
    </div>
  );
};

export default PopupForm;
