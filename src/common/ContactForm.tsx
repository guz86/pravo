import './ContactForm.css';

const ContactForm = () => {
  return (
    <div className="contact-form-container">
      <div className="phone-block">
        <a className="phone-link" href="tel:+79817506666">
          +7 (931) 590 99 70
        </a>
      </div>
      <div className="order-block">
        <span className="phone-icon">&#9742;</span>
        <a className="order-link" href="#">
          Заказать бесплатный звонок
        </a>
      </div>
      <div className="address-block">Санкт-Петербург, Просвещения пр. 43</div>
    </div>
  );
};

export default ContactForm;
