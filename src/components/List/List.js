import s from './List.module.css';
import Button from '@mui/material/Button';


export default function List({ initialTodos, onDeleteTodo }) {

  return (
    <ul className={s.list}>
      {initialTodos.map(({id, name}) => {
        return (
          <li
            className={s.item}
            key={id}>
            <p className={s.itemText}>{name}</p>
            <button
              onClick={() => onDeleteTodo(id)}
              className={s.itemButton}>Delete</button>
          </li>
        )
      })}
    </ul>
  )
}