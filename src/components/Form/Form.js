import s from './Form.module.css';

export default function Form() {
  return (
    <form className={s.form} autoComplete="off">
      <label>
        Title
        <input className={s.input} type="text" name="title"></input>
      </label>
    </form>
  )
}