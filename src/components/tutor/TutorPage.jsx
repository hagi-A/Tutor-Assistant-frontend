import React from 'react'
// import RegistrationPage from './tutorRegister/forms/RegistrationPage'
import Sidebar from './tutorDashboard/Sidebar'
// import { useAuthContext } from "../../hooks/useAuthContext";
import { FaEnvelope, FaRegBell, FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { TodoWrapper } from './tutorDashboard/todoApp/TodoWrapper';
import { useTutorContext } from "../../hooks/useTutorContext";
import TutorDashboard from './tutorDashboard/TutorDasboard'

const TutorPage = () => {
  // const { user } = useAuthContext();
  
  const { tutor } = useTutorContext();

  return (
    <>
      <div className="flex">
        <div className="basis-[12%] h-[100vh]">
          <Sidebar />
        </div>
        <div className="basis-[88%] border h-[100vh] overflow-scroll">
          <TutorDashboard />
          <div className=" pt-6 px-6 min-h-screen bg-slate-200 ">
            <div className="flex float-right">
              <TodoWrapper />
            </div>
          </div>
        </div>
      </div>
      {/* </TutorContextProvider> */}
    </>
  );
}

export default TutorPage