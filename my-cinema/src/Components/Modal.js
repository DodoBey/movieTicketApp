import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css'

const Modal = (props) => props.isShowing ? ReactDOM.createPortal(
  <>
    <div className="bgModal" onClick={props.hide}>
      <div style={{ background: `url(${props.image})` }} className="allModal">
        <div className="bg-define">
          <div className="title">
            <div>
              <h2>{props.title}</h2>
              <h6 id={props.genresId}>{props.genres}</h6>
            </div>
            <div><span>MovieDB Rate: <b>{props.rate}</b></span></div>
          </div>
          <div className="trailer">
            <iframe width="100%" height="350vw" src={props.trailer} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture, fullscreen" allowFullScreen></iframe>
          </div>
          <div className="modal-info">
            <p>{props.sum}</p>
            <span id={props.starringId}>Starring: <b>{props.starring}</b></span>
            <span>Duration: <b>{props.duration}</b></span>
            <span>Release Date: <b>{props.release}</b></span>
          </div>
          <div className="modal-buttons">
            <a href={props.imdbId} target="_blank">
              <button>
                IMDB
          </button></a>
            <button>
              Book a Ticket
          </button>
          </div>
        </div>
      </div>
    </div>
  </>, document.body
) : null;




export default Modal;