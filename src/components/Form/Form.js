import s from './Form.module.css';
import { Formik, Form, Field } from 'formik';

export default function TodoForm({onSubmit}) {
  const initialValues = {
    title: '',
  }

  const handleSubmit = (values, actions) => {
    actions.resetForm();
    this.props.onSubmit();
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