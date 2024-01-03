import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const BackButton = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // This function navigates back in the history
  };

  return (
    <button
      onClick={handleGoBack}
      className="flex justify-between ml-5 border border-cyan-700 text-white text-lg font-light bg-cyan-600 p-2 rounded-full "
    >
      <FaArrowLeft className="text-2xl mr-2" />
      Go Back
    </button>
    
  );
};

export default BackButton;
