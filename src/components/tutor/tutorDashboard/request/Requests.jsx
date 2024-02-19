import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../Sidebar";
import { FaComment, FaEnvelope, FaRegBell, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import Breadcrumb from "../../../../utils/Breadcrumb";
import { useTutorContext } from "../../../../hooks/useTutorContext";
import TutorBackButton from "../../../../utils/TutorBackButton";
import TutorDasboard from "../TutorDasboard";

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
        <TutorDasboard />
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
