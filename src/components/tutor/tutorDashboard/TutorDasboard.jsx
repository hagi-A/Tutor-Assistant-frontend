import React from 'react'
import { useTutorContext } from "../../../hooks/useTutorContext";
import { FaEnvelope, FaRegBell, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const TutorDasboard = () => {
    
    const { tutor } = useTutorContext();
    
  return (
    <div className="flex items-center justify-between h-[70px] shadow-lg px-6">
      <div className="flex items-center rounded-sm ">
        <input
          type="text"
          className="bg-white h-10 border border-cyan-500 outline-none pl-3 w-[350px] rounded-md placeholder:text-sm leading-5 font-normal"
          placeholder="Search for ..."
        />
        <div className="bg-cyan-500 h-10 px-3 flex items-center justify-center cursor-pointer rounded-tr-[5px] rounded-br-[5px]">
          <FaSearch color="white" />
        </div>
      </div>
      <div className="flex items-center gap-4 relative">
        <div className="flex items-center gap-6 border-r-2 border-cyan-900 pr-6">
          <FaRegBell />
          <Link to="/tutorChat" >

          {/* <Link to="/chatLogin"> */}
            <FaEnvelope />
          </Link>
        </div>
        <div className="flex items-center gap-4 relative">
          {tutor && (
            <>
              <p>
                {tutor.tutor.firstName} {tutor.tutor.lastName}
              </p>
              <div className="h-[50px] w-[50px] rounded-full bg-cyan-800 cursor-pointer flex items-center justify-center relative ">
                <Link to="/profilePage">
                  <img
                    src={`http://localhost:9999/api/files/images/${tutor.tutor.selectedImages}`}
                    alt=""
                    className="h-[50px] w-[50px] rounded-full bg-cyan-800 cursor-pointer flex items-center justify-center relative "
                  />
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default TutorDasboard