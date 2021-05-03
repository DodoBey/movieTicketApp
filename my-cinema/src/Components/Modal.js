import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ isShowing, hide }, props) => isShowing ? ReactDOM.createPortal(
  <React.Fragment>
    <div className="modal-overlay"/>
    <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
      <div className="modal">
        <div className="modal-header">
          <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
          
          </button>
        </div>
        <div className="movieInformation">
                        <div className="movieTitle">
                            <span>{props.title}</span>
                        </div>
                        <div className="movieType">
                            <span>{props.type}</span>
                        <span>{props.rate}</span>
                        </div>
                    </div>
      </div>
    </div>
  </React.Fragment>, document.body
) : null;

export default Modal;