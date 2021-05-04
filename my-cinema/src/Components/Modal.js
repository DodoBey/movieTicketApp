import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css'

const Modal = ({ isShowing, hide }, props) => isShowing ? ReactDOM.createPortal(
  <>
    <div onClick={isShowing} className="allModal">
      <div><p>{props.title}</p></div>
      <div><p>{props.overview}</p></div>
      <div><p>{props.poster_path}</p></div>
    </div>
  </>, document.body
) : null;

export default Modal;