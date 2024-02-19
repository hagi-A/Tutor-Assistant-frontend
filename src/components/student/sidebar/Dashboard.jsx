import React from 'react'
import { FaEnvelope, FaRegBell, FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useAuthContext } from "../../../hooks/useAuthContext";
const Dashboard = () => {
    const { user } = useAuthContext();
  return (
    <div className="flex items-center justify-between h-[70px] shadow-lg px-6">
      <div className="flex items-center rounded-sm ">
        <input
          type="text"
          className="bg-white h-10 border border-[#745B83] outline-none pl-3 w-[350px] rounded-md placeholder:text-sm leading-5 font-normal"
          placeholder="Search for ..."
        />
        <div className="bg-[#A98DB8]  h-10 px-3 flex items-center justify-center cursor-pointer rounded-tr-[5px] rounded-br-[5px]">
          <FaSearch color="white" />
        </div>
      </div>
      <div className="flex items-center gap-4 relative">
        <div className="flex items-center gap-6 border-r-2 border-[#745B83] pr-6">
          <FaRegBell />
          <Link to="/userChat">
            <FaEnvelope />
          </Link>
        </div>
        <div className="flex items-center gap-4 relative">
          {user && (
            <div className='flex '>
              <p className='mt-3 mr-3'>
                {user.user.firstName} {user.user.lastName}
              </p>
              <div className="h-[50px] w-[50px] rounded-full bg-[#745B83] cursor-pointer flex items-center justify-center relative ">
                <Link to="/profilePage">
                  <img
                    // src={`http://localhost:9999/api/files/images/${user.selectedImages}`}
                    // alt=""
                    className="h-[50px] w-[50px] rounded-full bg-cyan-800 cursor-pointer flex items-center justify-center relative "
                  />
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;