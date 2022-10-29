import { Component } from 'react';
import { createPortal } from 'react-dom';
import s from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

class ModalWindow extends Component {
  componentDidMount() {
    window.addEventListener('keydown', (e) => {
      if (e.code === 'Escape') {
        this.props.onClose()
      }
    })
  }

  render() {
    return (createPortal(<div className={s.backdrop}>
        <div className={s.modal}>{this.props.children}</div>
      </div>, modalRoot)
    )
  }
}

export default ModalWindow;