import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../Sidebar";
import { FaComment, FaEnvelope, FaRegBell, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import Breadcrumb from "../../../../utils/Breadcrumb";
import { useTutorContext } from "../../../../hooks/useTutorContext";
import TutorBackButton from "../../../../utils/TutorBackButton";

const Requests = () => {
  const { tutor } = useTutorContext();
  const [tutorRequests, setTutorRequests] = useState([]);
    useEffect(() => {
      const fetchTutorRequests = async () => {
        try {
          // Fetch tutor requests from the backend based on tutor's criteria
          const response = await fetch(
            "/api/tutorRequest/requests/grade/courses/profession/gender"
          );
          const data = await response.json();
          setTutorRequests(data.tutorRequests || []);
          //   setLoading(false);
        } catch (error) {
          console.error("Error fetching tutor requests:", error);
        }
      };

      fetchTutorRequests();
    }, []);

//   useEffect(() => {
//     const fetchTutorRequests = async () => {
//       try {
//         // Fetch tutor's ID from the tutor context
//         const tutorId = tutor.tutor._id;

//         const response = await axios.get(
//           `/api/tutorRequest/requests/${tutorId}`
//         );
//         // Fetch tutor requests from the backend based on tutor's ID and criteria
//         // const response = await axios.get(
//         //   `/api/tutorRequest/requests/${tutorId}/grade/courses/profession/gender`
//         // );

//         const data = response.data;
//         setTutorRequests(data.tutorRequests);
//       } catch (error) {
//         console.error("Error fetching tutor requests:", error);
//       }
//     };

//     fetchTutorRequests();
//   }, [tutor]);

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
            <Breadcrumb pageName="Requests" />
            {/* <button className="flex justify-between border border-cyan-800 text-white text-xl font-light bg-cyan-600 p-4 rounded-full ">
              <IoIosAddCircleOutline className="text-3xl mr-2" />
              <Link to={`/addCourse`}>Add Course</Link>
            </button> */}
            {/* {user && ( */}
            <TutorBackButton className="text-cyan-700" />
          </div>
          <section className=" md:px-5 mt-5 min-h-screen flex flex-col-4 ">
            <div className="mt-4 max-w-full w-full">
              <div className="p-3 mt-4 lg:flex lg:flex-wrap md:flex  rounded-lg flex   items-center">
                {tutorRequests.length > 0 ? (
                  tutorRequests.map((tutorRequest) => (
                    <div
                      key={tutorRequest._id}
                      className="p-4 mb-4 border border-[#745B83] rounded-md bg-white shadow-md"
                    >
                      <h3 className="text-xl font-semibold text-[#333] mb-2">{`Subject: ${tutorRequest.subject}`}</h3>
                      <p className="text-lg font-normal text-[#555]">{`Grade: ${tutorRequest.grade}`}</p>
                      {/* Add other relevant information */}
                    </div>
                  ))
                ) : (
                  <p className="text-lg font-semibold text-[#745B83]">
                    No tutor requests available.
                  </p>
                )}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Requests;
