import { useState } from 'react';
import colors from './colors.json';
import s from "./App.module.css";


const App = () => {
  const [value, setValue] = useState(10);

  const onButtonClick = e => {
    switch (e.target.name) {
      case 'increment':
        setValue(prevState => prevState + 1);
        console.log(colors[1].color);
        break;
      case 'decrement':
        setValue(prevState => prevState - 1);
        break;
      default: console.log('nothing')
    }
  }

  return (
      <div className={s.container}>
          <p className={s.degree}>{value}</p>
          <div>
              <button onClick={onButtonClick} type="button" name="increment">
                  +
              </button>
              <button onClick={onButtonClick} type="button" name="decrement">
                  -
              </button>
          </div>
      </div>
  )
}


export default App;