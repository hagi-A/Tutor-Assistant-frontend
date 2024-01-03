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
      className="flex justify-between ml-5 border border-[#745B83] text-white text-lg font-light bg-[#745B83] p-2 rounded-full "
    >
      <FaArrowLeft className="text-2xl mr-2" />
      
    </button>
    //   <button
    //               // onClick={openModal}
    //               className="ml-5"
    //             >
    //               <Link
    //                 to={`/viewTutorRequests/${userId}`}
    //                 // to={"/viewTutorRequests"}
    //                 className="flex justify-between  border border-[#745B83] text-white text-lg font-light bg-[#745B83] p-2 rounded-full "
    //               >
    //                 <FaArrowLeft  className="text-2xl mr-2" />
    //                 View Request
    //               </Link>
    //             </button>
  );
};

export default BackButton;
