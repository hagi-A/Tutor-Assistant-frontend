// PasswordResetModal.js

import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import axios from "axios";
import "./modal.css";

Modal.setAppElement("#root");

function PasswordResetModal({ isOpen, onRequestClose }) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [resetRequested, setResetRequested] = useState(false);

  useEffect(() => {
    if (resetRequested) {
      handlePasswordReset();
    }
  }, [resetRequested]);

  const handlePasswordReset = async () => {
    try {
      const response = await axios.post("/api/forgotPassword", { email });

      if (response.data.message) {
        setMessage(
          "Password reset initiated. Check your email for further instructions."
        );
        
      }
      showToast("Reset Password Successfully", "success");
    } catch (error) {
      setMessage("An error occurred while initiating the password reset.");
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Password Reset Modal"
      className="modal float-right" // Apply the "modal" class
      overlayClassName="overlay" // Apply the "overlay" class
    >
      <div className="modal-content ">
        <h2>Forgot Password</h2>
        <p>Enter your email to reset your password.</p>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="text-black"
        />
        <button onClick={() => setResetRequested(true)}>Reset Password</button>
        <p>{message}</p>
      </div>
    </Modal>
  );
}


export default PasswordResetModal;
