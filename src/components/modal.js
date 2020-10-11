import React from 'react';

const Modal = ({ id, onClose, content }) => {

  const handleOutsideClick = e => {
    if(e.target.id === id) onClose();
  }

  return (
    <div id={id} className="modal" onClick={handleOutsideClick}>
      <div className="container">
        <button className="close" onClick={onClose}>X</button>
        <div className="content">{content}</div>
      </div>
    </div>
  );
}

export default Modal ;