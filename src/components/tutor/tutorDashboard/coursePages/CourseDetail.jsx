import React from "react";
import Sidebar from "../Sidebar";
import Breadcrumb from "../../../../utils/Breadcrumb";
import { FaEnvelope, FaRegBell, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoIosAddCircleOutline } from "react-icons/io";
import { useTutorContext } from "../../../../hooks/useTutorContext";

const CourseDetail = ({ courseData }) => {
  const { tutor } = useTutorContext();

  // if (!course) {
  //   return <div>Loading...</div>; // Handle loading state or error
  // }

  return (
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
            {tutor && (
              <div className="flex items-center gap-4 relative">
                <p>
                  {tutor.tutor.firstName} {tutor.tutor.lastName}
                </p>
                <div className="h-[50px] w-[50px] rounded-full bg-cyan-800 cursor-pointer flex items-center justify-center relative ">
                  <button>
                    <Link to="/profilePage">
                      <div>
                        <img
                          src={`http://localhost:9999/api/files/images/${tutor.tutor.selectedImages}`}
                          alt={tutor.tutor.firstName}
                          className="h-[50px] w-[50px] rounded-full bg-cyan-800 cursor-pointer flex items-center justify-center relative "
                        />
                      </div>
                    </Link>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="pt-6 px-6 min-h-screen bg-slate-200 ">
          <div className="flex justify-between">
            <Breadcrumb pageName="Courses" />
            {/* <button className="flex justify-between border border-cyan-800 text-white text-xl font-light bg-cyan-600 p-4 rounded-full ">
              <IoIosAddCircleOutline className="text-3xl mr-2" />
              <Link to={`/addCourse`}>Add Course</Link>
            </button> */}
          </div>
          {tutor && (
            <div className="overflow-auto rounded-lg shadow hidden md:block">
              <div className="mt-5 w-full bg-slate-100 border border-cyan-900 h-[50%] rounded-lg">
                <div className="overflow-auto rounded-lg shadow hidden md:block">
                  <div>
                    <h1>{tutor.courseData.courseTitle}</h1>
                    {/* Display other course details */}
                    <p>Instructor: {tutor.courseData.instructorInfo}</p>
                    <p>Description: {courseData.courseDescription}</p>
                    {/* Add more details as needed */}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
