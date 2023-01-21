import './Counter.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from "../../redux/store";


export default function Counter() {
  const dispatch = useDispatch();
  const count = useSelector(state => state.myCounter)

  return (
    <main className="Counter">
      <p className="degree">{count}</p>
      <div className='buttonWrapper'>
        <button
          onClick={() => dispatch(increment(10))}
          type="button"
          name="increment"
          className="counterButton"
        >
          +
        </button>
        <button
          onClick={() => dispatch(decrement(10))}
          type="button"
          name="decrement"
          className="counterButton"
        >
          -
        </button>
      </div>
    </main>
  );
}