import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaHandshake } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import tutor1 from "../../../images/tutor1.jpg";
import tutor2 from "../../../images/tutor2.jpg";
import tutor3 from "../../../images/tutor3.jpg";
import tutor4 from "../../../images/tutor4.jpg";
import { Link } from "react-router-dom";
import "./findtutor.css";
import { useTutorContext } from "../../../hooks/useTutorContext";

// const tutors = [
//   {
//     id: 1,
//     name: "Tutor 1",
//     imageUrl: tutor1,
//     profession: "Teacher",
//     description:
//       "Experienced in mathematics and physics. Passionate about teaching and helping students succeed.",
//     rating: 4.8,
//   },
//   {
//     id: 2,
//     name: "Tutor 2",
//     imageUrl: tutor2,
//     profession: "Student",
//     description:
//       "Specializes in English literature dfhkaufa ilaufgoaisuf and language. Patient and dedicated to student learning.",
//     rating: 2,
//   },
//   {
//     id: 3,
//     name: "Tutor 3",
//     imageUrl: tutor3,
//     profession: "Teacher",
//     description:
//       "Specializes in English literature and language. Patient and dedicated to student learning.",
//     rating: 3,
//   },
//   {
//     id: 4,
//     name: "Tutor 4",
//     imageUrl: tutor4,
//     profession: "Engineer",
//     description:
//       "Specializes in English literature and language. Patient and dedicated to student learning.",
//     rating: 5,
//   },
//   // Add more tutors here
// ];

const AvailableTutors = () => {
  const { tutor } = useTutorContext();
  const [tutors, setTutors] = useState();

  const fetchTutors = async () => {
    try {
      const response = await axios.get("/getTutors");
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
          Available Tutors
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {tutors &&
            tutors.map((tutor) => (
              // <div className=" md:row-span-2 md:col-start-3 md:row-start-1 col-span-2 row-start-3  rounded-md">
              <div
                key={tutor._id}
                className="h-[75%] grid-item relative group bg-white rounded-md mt-5 border border-violet-400 "
              >
                {/* {tutor && ( */}
                <img
                  src={`http://localhost:9999/api/files/images/${tutor.selectedImages}`}
                  alt={tutor.firstName}
                  className="object-cover w-full rounded-md  h-[50%]"
                />
                {/* )} */}
                <div className="overlay-text text-white w-full font-light flex flex-col items-center text-center md:text-sm text-sm">
                  <Link to="">Hire Now!</Link>{" "}
                  {/*  if a user is signed in or logged in it will direct them to the detail page if not it will redirect them to login page */}
                </div>
                <div className="flex items-center mb-0 mt-6">
                  <h3 className="text-xl font-light ml-2 mb-2">
                    {tutor.firstName}
                  </h3>
                  <div className="flex items-center">
                    <span className="text-yellow-500 ml-32 flex">
                      {[1, 2, 3, 4, 5].map((star, index) => (
                        <div
                          key={index}
                          className={`h-4 w-4 flex  justify-between  ${
                            tutor.rank >= star
                              ? "text-yellow-500"
                              : "text-gray-300"
                          }`}
                          viewBox="0 0 20 20"
                        >
                          <FaStar />
                        </div>
                      ))}
                    </span>
                    <span className="text-gray-500 ml-1 font-light">
                      {tutor.rank}
                    </span>
                  </div>
                </div>
                <p className="text-gray-500 text-sm ml-2 font-extralight">
                  {tutor.profession}
                </p>
                {/* <p className="text-black p-4 font-light text-sm mb-0">
                  {tutor.description}
                </p> */}
              </div>

              //   </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default AvailableTutors;
