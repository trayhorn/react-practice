import PropTypes from 'prop-types';

export default function FoodCard({ url, name, price, description }) {
  return (
    <div style={{ width: '480px' }}>
      <img src={url} alt={name} width="480px" />
      <div>
        <h2>{name}</h2>
        <p>{price} кредитов</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

FoodCard.propTypes = {
  url: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  description: PropTypes.string,
};

