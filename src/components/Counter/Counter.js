import './Counter.css';
// import colors from '../../colors.json'
import { useState } from 'react';


export default function Counter() {
  const [value, setValue] = useState(10);

  const onButtonClick = e => {
    switch (e.target.name) {
      case 'increment':
        setValue(prevState => prevState + 1);
        break;
      case 'decrement':
        setValue(prevState => prevState - 1);
        break;
      default:
        break;
    }
  };

  return (
    <div className="Counter">
      <p className="degree">{value}</p>
      <button
        onClick={onButtonClick}
        type="button"
        name="increment"
        className="counterButton"
      >
        +
      </button>
      <button
        onClick={onButtonClick}
        type="button"
        className="counterButton"
        name="decrement"
      >
        -
      </button>
    </div>
  );
}