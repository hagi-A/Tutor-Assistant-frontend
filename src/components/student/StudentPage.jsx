import React from "react";
import Sidebar from "./sidebar/Sidebar";
// import UpcomingClasses from './UpcomingClasses';
// import Quizzes from './Quizzes';
// import Schedules from './Schedules';
// import Progress from './Progress';
import { FaEnvelope, FaRegBell, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import Dashboard from "./sidebar/Dashboard";
import { TodoWrapper } from "./studentTodo/TodoWrapper";
function StudentPage() {
  const { user } = useAuthContext();
  return (
    <>
      <div className="flex">
        <div className="basis-[12%] h-[100vh]">
          <Sidebar />
        </div>
        <div className="basis-[88%]  border h-[100vh] overflow-scroll">
          <Dashboard />
          <div className=" pt-6 px-6 min-h-screen bg-slate-200 ">
            <div className="flex float-right">
              <TodoWrapper />
            </div>
          </div>
        </div>
      </div>
    </>
    //   {/* <div className="flex-1 flex flex-col overflow-hidden">
    //     <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
    //       <div className="container mx-auto px-6 py-8">
    //         <h1 className="text-2xl font-semibold text-gray-800 mb-4">Dashboard</h1>

    //         <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
    //           <UpcomingClasses />
    //           <Quizzes />
    //           <Schedules />
    //           <Progress />
    //         </div>
    //       </div>
    //     </main>
    //   </div> */}
    // // </div>
  );
}

export default StudentPage;
