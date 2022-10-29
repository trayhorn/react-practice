import { Component } from 'react';
import s from './Modal.module.css';

class ModalWindow extends Component {


  render() {
    return (
      <div className={s.backdrop}>
        <div className={s.modal}>{this.props.children}</div>
      </div>
    )
  }
}

export default ModalWindow;