import React, { useState } from "react";
import Modal from "react-modal";
import "./modal.css";

const AddChild = ({ isOpen, onClose, onAddKid }) => {
  const [kidData, setKidData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    learningStyle: "",
    contactInfo: "",
    schoolInfo: "",
    medicalInfo: "",
    profilePicture: "",
  });

  const handleChange = (e) => {
    setKidData({ ...kidData, [e.target.name]: e.target.value });
  };

  const handleAddKid = () => {
    onAddKid(kidData);
    setKidData({
      firstName: "",
      lastName: "",
      dob: "",
      grade: "",
      learningStyle: "",
      contactInfo: "",
      schoolInfo: "",
      medicalInfo: "",
      profilePicture: "",
    });
    onClose();
  };
  return (
    // <Modal
    //   isOpen={isOpen}
    //   onRequestClose={onClose}
    //   contentLabel="Add Kid Modal"
    //   className="modal"
    //   overlayClassName="modal-overlay"
    // >
    <div className="bg-slate-50 border border-green-900 rounded-lg ">
      <h2>Add Child</h2>
      <label>
        First Name:
        <input
          type="text"
          name="firstName"
          value={kidData.firstName}
          onChange={handleChange}
        />
      </label>
      <label>
        Last Name:
        <input
          type="text"
          name="lastName"
          value={kidData.lastName}
          onChange={handleChange}
        />
      </label>
      <label>
        Date of Birth:
        <input
          type="text"
          name="dob"
          value={kidData.dob}
          onChange={handleChange}
        />
      </label>
      <label>
        Grade/Class:
        <input
          type="text"
          name="grade"
          value={kidData.grade}
          onChange={handleChange}
        />
      </label>
      <label>
        Learning Style:
        <input
          type="text"
          name="learningStyle"
          value={kidData.learningStyle}
          onChange={handleChange}
        />
      </label>
      <p>Parent/Guardian Contact Information</p>
      <label>
        Parent Name:
        <input
          type="text"
          name="p"
          value={kidData.contactInfo}
          onChange={handleChange}
        />
      </label>
      <label>
        School Information:
        <input
          type="text"
          name="schoolInfo"
          value={kidData.schoolInfo}
          onChange={handleChange}
        />
      </label>
      <label>
        Medical Information:
        <input
          type="text"
          name="medicalInfo"
          value={kidData.medicalInfo}
          onChange={handleChange}
        />
      </label>
      <label>
        Profile Picture:
        <input
          type=".png, .jpg"
          name="profilePicture"
          value={kidData.profilePicture}
          onChange={handleChange}
        />
      </label>
      <button type="button" onClick={handleAddKid}>
        Add Kid
      </button>
      <button type="button" >
        Close
      </button>
    </div>
    // </Modal>
  );
};

export default AddChild;
