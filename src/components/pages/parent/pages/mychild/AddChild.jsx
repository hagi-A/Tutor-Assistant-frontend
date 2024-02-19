import React, { useState } from "react";
import Modal from "react-modal";
import axios from "axios";
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
  });
  // const [isOpen, setIsOpen] = useState(true);
  const handleChange = (e) => {
    setKidData({ ...kidData, [e.target.name]: e.target.value });
  };

  const handleAddKid = () => {
    // Perform any client-side logic with the kidData here
    // For example, you can push the data into an array or perform other actions.

    // Make a POST request to your API endpoint using Axios
    axios
      .post("/api/child/createChild", kidData)
      .then((response) => {
        console.log("Kid Data posted successfully:", response.data);
        alert("Kid profile is created successfully!")
        // Reset the form after handling the data
        setKidData({
          firstName: "",
          lastName: "",
          dob: "",
          grade: "",
          learningStyle: "",
          contactInfo: "",
          schoolInfo: "",
          medicalInfo: "",
        });
        // Close the modal
        // setIsOpen(false);
        // close();
      })
      .catch((error) => {
        console.error("Error posting Kid Data:", error);
      });
  };

  const handleCloseModal = () => {
    // Close the modal when the "Close" button is clicked
    // setIsOpen(false);
  };

  return (
    // <Modal
    //   isOpen={isOpen}
    //   onRequestClose={onClose}
    //   contentLabel="Add Kid Modal"
    //   className="modal"
    //   overlayClassName="modal-overlay"
    // >
    // { isOpen && (
      <div className="bg-slate-50 border border-green-900 rounded-lg ">
        <div className="flex justify-center">
          <h2 className="text-2xl font-light ">Add Child</h2>
        </div>
        <div className="flex justify-center p-9 ">
          {/* Child Information */}
          <div className=" p-7 ">
            <label className="mb-2 font-semibold text-xl ">
              First Name:
              <input
                type="text"
                name="firstName"
                value={kidData.firstName}
                onChange={handleChange}
                className="mt-3 p-4  border border-green-900 w-full rounded-lg"
              />
            </label>
            <label className="mb-2 font-semibold text-xl ">
              Last Name:
              <input
                type="text"
                name="lastName"
                value={kidData.lastName}
                onChange={handleChange}
                className="mt-3 p-4  border border-green-900 w-full   rounded-lg"
              />
            </label>
            <label className="mb-2 font-semibold text-xl ">
              Date of Birth:
              <input
                type="date"
                name="dob"
                value={kidData.dob}
                onChange={handleChange}
                className="mt-3 p-4  border border-green-900 w-full   rounded-lg"
              />
            </label>
            <label className="mb-2 font-semibold text-xl ">
              Grade/Class:
              <input
                type="text"
                name="grade"
                value={kidData.grade}
                onChange={handleChange}
                className="mt-3 p-4  border border-green-900 w-full   rounded-lg"
              />
            </label>
          </div>
          {/* Vertical Line */}
          <div className="border-3 border-green-900 h-full"></div>
          {/* Parent/Guardian Information */}
          <div className="ml-72">
            {/* <p className="mb-4">Parent/Guardian Contact Information</p> */}
            <label className="mb-2 font-semibold text-xl ">
              Parent Name:
              <input
                type="text"
                name="contactInfo"
                value={kidData.contactInfo}
                onChange={handleChange}
                className="mt-3 p-4  border border-green-900 w-full   rounded-lg"
              />
            </label>
            <label className="mb-2 font-semibold text-xl ">
              School Name:
              <input
                type="text"
                name="schoolInfo"
                value={kidData.schoolInfo}
                onChange={handleChange}
                className="mt-3 p-4  border border-green-900 w-full   rounded-lg"
              />
            </label>
            <label className="mb-2 font-semibold text-xl ">
              Medical Information:
              <textarea
                name="medicalInfo"
                value={kidData.medicalInfo}
                onChange={handleChange}
                className="mt-3 p-4  border border-green-900 w-full   rounded-lg"
              />
            </label>
            <label className="mb-2 font-semibold text-xl ">
              Learning Style:
              <textarea
                name="learningStyle"
                value={kidData.learningStyle}
                onChange={handleChange}
                className="mt-3 p-4  border border-green-900 w-full   rounded-lg"
              />
            </label>
          </div>
        </div>
        <div className="flex justify-center mb-9">
          <button
            type="button"
            onClick={handleAddKid}
            className="p-3 bg-green-700 hover:bg-transparent border rounded-lg hover:border-green-700 text-white hover:text-green-900"
          >
            Add Kid
          </button>
          <button
            type="button"
            onClick={handleCloseModal}
            className="p-3 ml-9 bg-red-500 hover:bg-transparent border rounded-lg hover:border-red-500 text-white hover:text-red-500"
          >
            Close
          </button>
        </div>
      </div>
    // )};
    // </Modal>
  );
};

export default AddChild;
  {
    /* <label>
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
        <textarea
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
        School Name:
        <input
          type="text"
          name="schoolInfo"
          value={kidData.schoolInfo}
          onChange={handleChange}
        />
      </label>
      <label>
        Medical Information:
        <textarea
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
      </label>*/ }