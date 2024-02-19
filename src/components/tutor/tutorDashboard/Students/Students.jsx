import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../Sidebar";
import { FaComment, FaEnvelope, FaRegBell, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import Breadcrumb from "../../../../utils/Breadcrumb";
import { IoIosAddCircleOutline } from "react-icons/io";
import { useTutorContext } from "../../../../hooks/useTutorContext";
import { useAuthContext } from "../../../../hooks/useAuthContext";
import TutorBackButton from "../../../../utils/TutorBackButton";
import TutorDasboard from "../TutorDasboard";
const Students = () => {
  const [student, setStudent] = useState();
  const { tutor } = useTutorContext();
  const { user } = useAuthContext();
  // Example frontend code (React and axios)
  //   const fetchStudents = async () => {
  //     try {
  //       const response = await axios.get("/api/user/students");
  //       const fetchedStudents = response.data;
  //       console.log("Students:", fetchedStudents);
  //       // Update your component state with the fetched students
  //       setStudent(fetchedStudents);
  //     } catch (error) {
  //       console.error("Error fetching students:", error);
  //     }
  //   };
  const fetchStudents = async () => {
    try {
      const response = await axios.get("/getStudents");
      setStudent(response.data);
    } catch (error) {
      console.error("Error fetching tutors:", error);
    }
  };
  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div className="flex">
      <div className="basis-[12%] h-[100vh]">
        <Sidebar />
      </div>
      <div className="basis-[88%] border h-[100vh] overflow-scroll">
        <TutorDasboard />
        <div className="pt-6 px-6 min-h-screen bg-slate-200 ">
          <div className="flex justify-between">
            <Breadcrumb pageName="Students" />
            <TutorBackButton />
          </div>
          <div>
            <h1 className="flex justify-center text-2xl font-light">
              Students List
            </h1>
            <section className=" md:px-5  min-h-screen flex flex-col-4 ">
              <div className=" max-w-full w-full">
                <div className="p-3  lg:flex lg:flex-wrap md:flex lg:justify-between rounded-lg flex  justify-center items-center">
                  {student &&
                    student.map((students) => (
                      <div
                        key={students._id}
                        className="card lg:w-1/4 w-full p-8  justify-center transition duration-300 "
                      >
                        <Link to={"/classroom"}>
                          <div className="p-4 border rounded-lg bg-slate-50  hover:border-cyan-600">
                            <div className="flex justify-between mb-4 ">
                              <img
                                // src=""
                                // alt=""
                                className="h-16 w-16 rounded-full bg-gray-500"
                              />
                              <h3 className="text-2xl lg:text-3xl font-light text-center lg:leading-9">
                                {students.username}
                              </h3>
                              <h4 className="text-sm lg:text-base font-light leading-5 text-center">
                                {students.age} yrs
                              </h4>
                            </div>
                            <p className="text-sm lg:text-base">
                              {students.firstName} {students.lastName}
                            </p>
                            <button className="bg-cyan-500 text-white rounded-lg w-full h-10 mt-4 cursor-pointer transition duration-300 hover:bg-transparent border hover:text-cyan-500 hover:border-cyan-200">
                              <Link to={""}>Message</Link>
                            </button>
                          </div>
                        </Link>
                        {/* <Link
                    {/* to={"/classroom"}
                    className="  items-center p-2"
                  >
                    <div className="bg-slate-100 flex flex-row rounded-lg p-4">
                      <div>
                        <img
                          // src=""
                          // alt=""
                          className="h-16 w-16 rounded-full bg-gray-500"
                        />
                      </div>
                      <div className="">
                        <div className="font-semibold text-xl mt-4 text-cyan-800">
                          {students.username}
                        </div>
                        <div className="text-md mt-4 text-gray-500 ">
                          {" "}
                          {students.firstName} {students.lastName}
                        </div>
                      </div> */}

                        {/* <div className="flex justify-between mt-auto">
                        <button className="ml-4 h-10 p-4 flex justify-between border bg-cyan-600 hover:bg-transparent hover:border-cyan-700 text-white hover:text-cyan-700">
                          <FaComment /> Message
                        </button>
                      </div>
                    </div>
                  </Link> */}
                      </div>
                    ))}{" "}
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Students;
