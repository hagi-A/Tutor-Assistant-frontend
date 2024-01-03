import React from 'react'
import './modal.css'

const PostModal = ({ isOpen, onClose, children }) => {
  return (
    // Your modal structure here
    <div className={`modal ${isOpen ? 'block' : 'hidden'}`}>
      <div className="modal-overlay" onClick={onClose}></div>
      <div className="modal-container">
        <div className="modal-header">
          <h3 className="text-lg font-semibold">Tutor Request Form</h3>
          <button className="close-button" onClick={onClose}>
            X
          </button>
        </div>
        <div className="modal-body">
          {/* Render the TutorRequestForm inside the modal body */}
          {children}
        </div>
      </div>
    </div>
  );
};

export default PostModal