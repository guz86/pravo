import './Steps.css';

const Steps: React.FC = () => {
  return (
    <div className="steps__content">
      <div className="steps-header">Этапы работы</div>
      <ul className="steps-item">
        <li>Бесплатная консультация</li>
        <li className="steps-arrow">»</li>

        <li>Заключение соглашение на оказание юридической помощи</li>

        <li className="steps-arrow">»</li>
        <li>Немедленное юридическое исполнение поручения</li>
      </ul>
    </div>
  );
};

export default Steps;
