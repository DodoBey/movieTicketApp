import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css'

const Modal = (props) => props.isShowing ? ReactDOM.createPortal(
  <>
    <div onClick={props.isShowing} className="allModal">
      <div><p>{props.title}</p></div>
      <div><p>{props.sum}</p></div>
      <div><img src={props.image} alt=""/></div>
    </div>
  </>, document.body
) : null;



export default Modal;