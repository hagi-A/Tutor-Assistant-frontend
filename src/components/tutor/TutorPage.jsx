import React from 'react'
// import RegistrationPage from './tutorRegister/forms/RegistrationPage'
import Sidebar from './tutorDashboard/Sidebar'
import { useAuthContext } from "../../hooks/useAuthContext";
import { FaEnvelope, FaRegBell, FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const TutorPage = () => {
    const { user } = useAuthContext();

  return (
    <>
      <div className="flex">
        <div className="basis-[12%] h-[100vh]">
          <Sidebar />
        </div>
        <div className="basis-[88%] border h-[100vh] overflow-scroll">
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
                <FaEnvelope />
              </div>
              <div className="flex items-center gap-4 relative">
                <p>Hareg Alemu</p>
                <div className="h-[50px] w-[50px] rounded-full bg-cyan-800 cursor-pointer flex items-center justify-center relative ">
                  <button>
                    <Link to="/profilePage">
                      <div className="h-[50px] w-[50px] rounded-full bg-cyan-800 cursor-pointer flex items-center justify-center relative ">
                        <img src="" alt="" />
                      </div>
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TutorPage