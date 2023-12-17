import React, { useState, useEffect } from "react";
import Sidebar from "../Sidebar";
import { FaEnvelope, FaRegBell, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios  from "axios"
import Breadcrumb from "../../../../utils/Breadcrumb";
// import { useParams } from "react-router-dom";
// import { TutorContext } from "../../../context/TutorContext"
import { useTutorContext } from "../../../../hooks/useTutorContext";
import { IoIosAddCircleOutline } from "react-icons/io";

const AddCourse = () => {
  // const TutorContext = useContext(TutorContext);

  const { tutor } = useTutorContext();
  const tutorId = tutor ? tutor.tutor._id : null;

  // const { id } = useParams();

//   const handleSubmit = async () => {
//     try {
//       // Assuming you have an API endpoint for creating a course
//       const response = await fetch(`/api/course/addCourse`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(courseData),
//       });
//       console.log(tutor.tutor._id);
//       if (!response.ok) {
//         throw new Error("Failed to create course");
//       }
//       console.log("trrrryyyy");
//       // Optionally, you can handle the response or redirect the user
//       const createdCourse = await response.json();
//       console.log(createdCourse);
//     } catch (error) {
//       // console.log(tutor.tutor._id);
//       console.log("catchhhhh");
//       console.log(error);
//       console.error("Error creating course:", error.message);
//     }
    //   };
    
    const [courses, setCourses] = useState([]);
    useEffect(() => {
      axios
        .get("/getCourses")
        .then((courses) => setCourses(courses.data))
        .catch((err) => console.log(err));
    }, []);

    function truncateDescription(description, maxLength) {
      if (description.length <= maxLength) {
        return description;
      } else {
        return description.substring(0, maxLength) + "...";
      }
    }


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
                            // src=""
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
            <div className="">
              <Breadcrumb pageName="Courses" subPageName="/ Add Course" />
            </div>
            <div className="overflow-auto rounded-lg shadow hidden md:block">
              {/* <div className=" w-full bg-slate-100 border border-cyan-900 h-[50%] rounded-lg"></div> */}
              <section className="md:px-5 mt-5 min-h-screen flex flex-col-4">
                <div className="mt-4 max-w-full w-full">
                  <div className="p-3 mt-4 lg:flex lg:flex-wrap md:flex lg:justify-between rounded-lg flex justify-center items-center">
                    {courses &&
                      courses.map((course) => (
                        <div
                          key={course._id}
                          className="card lg:w-1/4 w-full p-8 justify-center transition duration-300"
                        >
                          <div className="p-4 border rounded-lg bg-slate-50 hover:border-cyan-600">
                            <div className="flex justify-between mb-4">
                              <h3 className="text-2xl lg:text-3xl font-light text-center lg:leading-9">
                                {course.courseTitle}
                              </h3>
                              <h4 className="text-sm lg:text-base font-light leading-5 text-center">
                                {course.courseCode}
                              </h4>
                            </div>
                            <div className="text-sm lg:text-base description-container">
                              {truncateDescription(
                                course.courseDescription,
                                50
                              )}
                            </div>
                            <button className="flex items-center justify-center bg-cyan-500 text-white rounded-lg w-full h-10 mt-4 cursor-pointer transition duration-300 hover:bg-transparent border hover:text-cyan-500 hover:border-cyan-200">
                              <IoIosAddCircleOutline className="text-2xl mr-2" />
                              <Link
                                // to={`/courses/${course._id}`}
                                // onClick={() => setSelectedCourse(course)}
                              >
                                Add Course
                              </Link>
                            </button>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default AddCourse;
