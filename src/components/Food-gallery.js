import FoodCard from "./Food-card"
import PropTypes from 'prop-types';

export default function FoodGallery({ items }) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <FoodCard
            url={item.image}
            name={item.name}
            price={item.price}
            description={item.description}
          />
        </li>
      ))}
  </ul>
  )
}

FoodGallery.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
}