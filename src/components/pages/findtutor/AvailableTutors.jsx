import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaHandshake } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import tutor1 from "../../../images/tutor1.jpg";
import tutor2 from "../../../images/tutor2.jpg";
import tutor3 from "../../../images/tutor3.jpg";
import tutor4 from "../../../images/tutor4.jpg";
import StarRating from "./StarRating";
import { FaBell, FaEnvelope, FaRegBell, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./findtutor.css";
import { useTutorContext } from "../../../hooks/useTutorContext";
import { useTranslation } from "react-i18next";



const AvailableTutors = () => {
   const { t } = useTranslation();
  const { tutor } = useTutorContext();
  const [tutors, setTutors] = useState();

  const fetchTutors = async () => {
    try {
      const response = await axios.get("/api/supervisor/getAcceptedTutors");
      setTutors(response.data);
    } catch (error) {
      console.error("Error fetching tutors:", error);
    }
  };
  useEffect(() => {
    fetchTutors();
  }, []);

  return (
    <>
      <div className="p-4 h-screen mt-9">
        <h2 className="text-4xl font-light mb-4 text-center">
          {t("availableTutors")}
        </h2>

        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"> */}
          {/* {tutors &&
            tutors.map((tutor) => (
              // <div className=" md:row-span-2 md:col-start-3 md:row-start-1 col-span-2 row-start-3  rounded-md">
              <div
                key={tutor._id}
                className="h-[75%] grid-item relative group bg-white rounded-md mt-5 border border-violet-400 "
              >
                // {/* {tutor && ( 
                 <img
                //   // src={`http://localhost:9999/api/files/images/${tutor.selectedImages}`}
                //   // alt={tutor.firstName}
                //   className="object-cover w-full rounded-md  h-[50%]"
                // />
                // {/* )} 
                // <div className="overlay-text text-white w-full font-light flex flex-col items-center text-center md:text-sm text-sm">
                //   <Link to="">Hire Now!</Link>{" "}
                //   {/*  if a user is signed in or logged in it will direct them to the detail page if not it will redirect them to login page */}
          {/* // </div>
                // <div className="flex items-center mb-0 mt-6">
                //   <h3 className="text-xl font-light ml-2 mb-2">
                //     {tutor.firstName}
                //   </h3>
                //   <div className="flex items-center">
                //     <span className="text-yellow-500 ml-32 flex">
                //       {[1, 2, 3, 4, 5].map((star, index) => ( 
                //         <div*/}
          {/* key={index} */}
          {/* className={`h-4 w-4 flex  justify-between  ${ */}
          {/* //             tutor.rank >= star
                //               ? "text-yellow-500"
                //               : "text-gray-300"
                //           }`}
                //           viewBox="0 0 20 20"
                //         >
                //           <FaStar />
                //         </div>
                //       ))}
                //     </span>
                //     <span className="text-gray-500 ml-1 font-light">
                //       {tutor.rank}
                //     </span>
                //   </div> */}
          {/* // </div>
                // <p className="text-gray-500 text-sm ml-2 font-extralight">
                //   {tutor.profession}
                // </p> */}
          {/* <p className="text-black p-4 font-light text-sm mb-0">
                  {tutor.description}
                </p> */}
          {/* </div>

              //   </div> */}
          {/* ))} */}

          <section className=" md:px-5  min-h-screen flex flex-col-4 ">
            <div className=" max-w-full w-full">
              <div className="p-3  lg:flex lg:flex-wrap md:flex lg:justify-between rounded-lg flex  justify-center items-center">
                {tutors &&
                  tutors.map((tutor) => (
                    <div
                      key={tutor._id}
                      className=" lg:w-1/4 w-full p-8  justify-center transition duration-300 "
                    >
                      <Link to={"/classroom"}>
                        <div className="p-4 border rounded-lg bg-slate-50  hover:border-cyan-600">
                          <div className="flex justify-between mb-4 ">
                            <img
                              // src={`http://localhost:9999/api/files/images/${tutor.selectedImages}`}
                              // alt={tutor.firstName}
                              className="h-16 w-16 rounded-full bg-gray-500"
                            />
                            <h3 className="text-2xl lg:text-3xl font-light text-center lg:leading-9">
                              {tutor.firstName} {tutor.lastName}
                            </h3>
                            <h4 className="text-sm lg:text-base font-light leading-5 text-center">
                              <div className="relative">
                                <FaRegBell />

                                {tutors.map((tutor) =>
                                  tutor.sentRequest ? (
                                    <div
                                      key={tutor._id}
                                      className={`absolute -top-1 -right-1 ${
                                        tutor.status === "Accepted"
                                          ? "bg-green-500" // Use a green color for accepted tutors
                                          : "bg-red-500" // Use a different color for other statuses
                                      } text-white rounded-full w-4 h-4 flex items-center justify-center`}
                                    >
                                      {tutor.notificationCount > 0 &&
                                        tutor.notificationCount}
                                    </div>
                                  ) : null
                                )}
                              </div>
                            </h4>
                          </div>
                          <div className="flex justify-between">
                            <p className="text-sm lg:text-base">
                              {tutor.profession}
                            </p>
                            {/* Display the stars based on the tutor's rank */}
                            <StarRating rank={tutor.rank} />
                          </div>
                          <button className="bg-cyan-500 text-white rounded-lg w-full h-10 mt-4 cursor-pointer transition duration-300 hover:bg-transparent border hover:text-cyan-500 hover:border-cyan-200">
                            <Link to="/userChat">Hire NOW!</Link>
                          </button>
                        </div>
                      </Link>
                    </div>
                  ))}{" "}
              </div>
            </div>
          </section>
        {/* </div> */}
      </div>
    </>
  );
};

export default AvailableTutors;
