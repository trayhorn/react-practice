import s from './Form.module.css';
import { Formik, Form, Field } from 'formik';

export default function TodoForm() {
  const initialValues = {
    title: '',
  }

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  }

  return (
    <Formik onSubmit={handleSubmit} initialValues={initialValues}>
      <Form className={s.form} autoComplete="off">
        <label>
          Title
          <Field className={s.input} type="text" name="title"></Field>
        </label>
      </Form>
    </Formik>
  )
}