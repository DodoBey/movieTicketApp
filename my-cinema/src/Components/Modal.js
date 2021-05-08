import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css'

const Modal = (props) => props.isShowing ? ReactDOM.createPortal(
  <>
    <div style={{ background: `url(${props.image})`}} onClick={props.isShowing} className="allModal">
      <div className="leftGrid">
        <h3>{props.title}</h3>
        <h6 id={props.genresId}>{props.genres}</h6>
        <span id={props.starringId}>Starring: {props.starring}</span>
        <span>Duration: {props.duration}</span>
        <span>Release Date: {props.release}</span>
        <span>MovieDB Rate: {props.rate}</span>
      </div>
      <div className="rightGrid">
        <div><iframe width="100%" height="300vw" src={props.trailer} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
        <p>{props.sum}</p>
        <div>
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
  </>, document.body
) : null;



export default Modal;