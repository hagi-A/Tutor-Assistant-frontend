// Modal.js
import "./modal.css"

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../../../hooks/useAuthContext";
// import axios from "axios";
import Breadcrumb from "../../../../utils/Breadcrumb";
import Sidebar from "../../sidebar/Sidebar";
import { FaEnvelope, FaRegBell, FaSearch } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";
import { showToast } from "../../../../utils/toastUtils";
import { FaTimes } from "react-icons/fa";
import BackButton from "../../../../utils/BackButton";

const TutorRequestForm = ({ isOpen, onClose }) => {
  const { user } = useAuthContext();
  const [gender, setGender] = useState("");
  const [grade, setGrade] = useState("");
  // const [courses, setCourses] = useState([]);
  const [profession, setProfession] = useState("");
  const [ageGroups, setAgeGroups] = useState("");
  // Add state for selected package
  const [selectedPackages, setSelectedPackages] = useState([]);
useEffect(() => {
  // Reset selectedPackages when grade changes
  setSelectedPackages([]);
}, [grade]);
  // Add the handlePackageClick function
  // const handlePackageClick = (packageKey) => {
  //   setSelectedPackage(packageKey === selectedPackage ? null : packageKey);
  // };
  // Toggle the selected packages
  const togglePackage = (packageKey) => {
    setSelectedPackages((prevSelectedPackages) => {
      if (prevSelectedPackages.includes(packageKey)) {
        // Remove package if already selected
        return prevSelectedPackages.filter((pkg) => pkg !== packageKey);
      } else {
        // Add package if not selected
        return [...prevSelectedPackages, packageKey];
      }
    });
  };
  // Example list of courses
  // const courseOptions = [
  //   "Mathimatics",
  //   "Science",
  //   "History",
  //   "English",
  //   "Physics",
  //   "Chemistry",
  //   "Biology",
  //   "Geography",
  //   "Economics",
  //   "Buisness mgt",
  //   "Amharic",
  // ];
  const coursesByGradeLevel = {
    // G1: {
    //   G1Package: ["English", "Amharic", "Social Studies", "Science"],
    // },
    // G2: {
    //   G2Package: ["English", "Amharic", "Social Studies", "Science"],
    // },
    // G3: {
    //   G3Package: ["English", "Amharic", "Social Studies", "Science"],
    // },
    // G4: {
    //   G4Package: ["English", "Amharic", "Social Studies", "Science"],
    // },
    // G5: {
    //   G5Package: ["English", "Amharic", "Social Studies", "Science"],
    // },
    // G6: {
    //   G6Package: ["English", "Amharic", "Social Studies", "Science"],
    // },
    G7: {
      G7Package_1: ["English", "Amharic", "Social Studies", "Science"],
      G7Package_2: ["Physics", "Biology", "Chemistry", "Maths"],
    },
    G8: {
      G8Package_1: ["English", "Amharic", "Social Studies", "Science"],
      G8Package_2: ["Physics", "Biology", "Chemistry", "Maths"],
    },
    G9: {
      G9Package_1: ["English", "Amharic", "Geography", "History"],
      G9Package_2: ["Maths", "Physics", "Biology", "Chemistry"],
    },
    G10: {
      G10Package_1: ["English", "Amharic", "Geography", "History"],
      G10Package_2: ["Maths", "Physics", "Biology", "Chemistry"],
    },
    G11: {
      G11Natural: ["English", "Maths", "Physics", "Biology", "Chemistry"],
      G11Social: [
        "English",
        "Maths",
        "Geography",
        "History",
        "Economics",
        "Business",
      ],
    },
    G12: {
      G12Natural: [
        "English",
        "Amharic",
        "Maths",
        "Physics",
        "Biology",
        "Chemistry",
      ],
      G12Social: [
        "English",
        "Amharic",
        "Maths",
        "Geography",
        "History",
        "Economics",
        "Business",
      ],
    },
    College: {
      CS: ["C++ Programming", "Java", "Python"],
    },
  };

  // const handleCheckboxChange = (course) => {
  //   // Toggle the selected course
  //   setCourses((prevCourses) => {
  //     if (prevCourses.includes(course)) {
  //       return prevCourses.filter((c) => c !== course);
  //     } else {
  //       return [...prevCourses, course];
  //     }
  //   });
  // };

  const handleRadioChange = (e, setState) => {
    setState(e.target.value);
  };

  const handlePostRequest = async (e) => {
    e.preventDefault();

    try {
      const userId = user.user._id;
      // if (ageGroups.length === 0) {
      //   // Handle the case where ageGroup is not selected
      //   console.error("Please select an age group");
      //   return;
      // }

      // Use the first selected age group, modify this logic as needed
      // const selectedAgeGroup = ageGroups[0];
      // Prepare the request data
      const requestData = {
        gender,
        grade,
        selectedPackages,
        profession,
        // creator: creator,
        // ageGroup: selectedAgeGroup,
      };

      // Send a POST request to the backend
      const response = await axios.post(
        `/api/tutorRequest/${userId}`,
        requestData
      );

      // Handle the response if needed
      console.log("Tutor request submitted successfully:", response.data);
      console.log(requestData);

      showToast("Post successful", "success");
      // Close the modal after handling the request
      // onClose();
    } catch (error) {
      console.error("Error submitting tutor request:", error);
    }
  };

  return (
    <div className="flex">
      <div className="basis-[12%] h-[100vh]">
        <Sidebar />
      </div>
      <div className="basis-[88%]  border h-[100vh] overflow-scroll">
        <div className="flex items-center justify-between h-[70px] shadow-lg px-6">
          <div className="flex items-center rounded-sm ">
            <input
              type="text"
              className="bg-white h-10 border border-[#745B83] outline-none pl-3 w-[350px] rounded-md placeholder:text-sm leading-5 font-normal"
              placeholder="Search for ..."
            />
            <div className="bg-[#A98DB8] h-10 px-3 flex items-center justify-center cursor-pointer rounded-tr-[5px] rounded-br-[5px]">
              <FaSearch color="white" />
            </div>
          </div>
          <div className="flex items-center gap-4 relative">
            <div className="flex items-center gap-6 border-r-2 border-cyan-900 pr-6">
              <FaRegBell />
              <FaEnvelope />
            </div>
            <div className="flex items-center gap-4 relative">
              {user && (
                <>
                  <p>
                    {user.user.firstName} {user.user.lastName}
                  </p>
                  <div className="h-[50px] w-[50px] rounded-full bg-cyan-800 cursor-pointer flex items-center justify-center relative ">
                    <Link to="/profilePage">
                      <img
                        // src={`http://localhost:9999/api/files/images/${user.selectedImages}`}
                        // alt=""
                        className="h-[50px] w-[50px] rounded-full bg-cyan-800 cursor-pointer flex items-center justify-center relative "
                      />
                    </Link>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
        <div className=" pt-6 px-6 min-h-screen bg-slate-200 ">
          <div className="flex justify-between">
            <Breadcrumb pageName="Tutors /" subPageName="Post Request" />
            <BackButton />
          </div>
          <div className="flex justify-center mt-16">
            <form className=" flex  p-8  w-1/2 h-1/2 border border-[#745B83] bg-slate-100 rounded-lg ">
              <div className="">
                <div className=" m-7">
                  <h2 className="ml-68 flex justify-center text-3xl font-semibold mb-4">
                    Tutor Request Form
                  </h2>

                  {/* Gender Radio Buttons */}
                  <div className="mt-4">
                    <div className="flex justify-start">
                      <label className="text-2xl font-semibold text-gray-700">
                        Gender:
                      </label>
                      <label className="flex items-center ml-16">
                        <input
                          name="gender"
                          type="radio"
                          value="Male"
                          checked={gender === "Male"}
                          onChange={(e) => handleRadioChange(e, setGender)}
                        />
                        <span className="ml-2 text-xl">Male</span>
                      </label>
                      <label className="flex items-center ml-16">
                        <input
                          name="gender"
                          type="radio"
                          value="Female"
                          checked={gender === "Female"}
                          onChange={(e) => handleRadioChange(e, setGender)}
                        />
                        <span className="ml-2 text-xl">Female</span>
                      </label>
                    </div>
                  </div>
                  {/* Profession Radio Buttons */}
                  <div className="mt-4">
                    <div className="flex items-center">
                      <label className="text-2xl font-semibold text-gray-700">
                        Profession:
                      </label>
                      <label className="flex items-center ml-16">
                        <input
                          name="profession"
                          type="radio"
                          value="teacher"
                          checked={profession === "teacher"}
                          onChange={(e) => handleRadioChange(e, setProfession)}
                        />
                        <span className="ml-2 text-xl">Teacher</span>
                      </label>
                      <label className="flex items-center ml-16">
                        <input
                          name="profession"
                          type="radio"
                          value="student"
                          checked={profession === "student"}
                          onChange={(e) => handleRadioChange(e, setProfession)}
                        />
                        <span className="ml-2 text-xl">Student</span>
                      </label>
                      <label className="flex items-center ml-16">
                        <input
                          name="profession"
                          type="radio"
                          value="other"
                          checked={profession === "other"}
                          onChange={(e) => handleRadioChange(e, setProfession)}
                        />
                        <span className="ml-2 text-xl">Other</span>
                      </label>
                    </div>
                  </div>

                  {/* Grade Radio Buttons */}
                  {/* <div className="mb-4 mt-4 flex ">
                    <label className="text-2xl font-semibold text-gray-700">
                      Grade:
                    </label>
                    <div className="flex justify-between ">
                      {["G7", "G8", "G9", "G10", "G11", "G12"].map(
                        (gradeOption) => (
                          <label
                            key={gradeOption}
                            className="ml-9 flex items-center"
                          >
                            <input
                              name="grade"
                              type="radio"
                              value={gradeOption}
                              checked={grade === gradeOption}
                              onChange={(e) => handleRadioChange(e, setGrade)}
                            />
                            <span className="ml-3 text-md">{gradeOption}</span>
                          </label>
                        )
                      )}
                      <label className="ml-9 flex items-center">
                        <input
                          name="grade"
                          type="radio"
                          value="college"
                          checked={grade === "college"}
                          onChange={(e) => handleRadioChange(e, setGrade)}
                        />
                        <span className="ml-3 text-md">College</span>
                      </label>
                    </div>
                  </div> */}

                  {/* Courses Checkboxes */}
                  {/* <div className="mb-4 grid grid-cols-2 gap-4">
                    <label className="text-2xl font-semibold text-gray-700">
                      Courses:
                    </label>
                    {courseOptions.map((course) => (
                      <label key={course} className="flex items-center">
                        <input
                          type="checkbox"
                          value={course}
                          checked={courses.includes(course)}
                          onChange={() => handleCheckboxChange(course)}
                        />
                        {course}
                      </label>
                    ))}
                  </div> */}

                  {/* <div className="user-input-box">
                    <label htmlFor="gradeLevel">
                      Grade level you want to Tutor?
                    </label>
                    <div className="ml-3 flex flex-wrap justify-start items-center">
                      {grade.map((level) => (
                        <div
                          key={level}
                          className="flex flex-row items-center mt-3 mr-4"
                        >
                          <input
                            type="checkbox"
                            id={level}
                            value={level}
                            checked={updatedGradeLevels.includes(level)}
                            onChange={handleGradeLevelChange}
                            className="text-sm"
                            disabled={
                              level === "G1" ||
                              level === "G2" ||
                              level === "G3" ||
                              level === "G4" ||
                              level === "G5" ||
                              level === "G6"
                            }
                          />
                          <label
                            htmlFor={level}
                            className="text-sm font-light ml-2"
                          >
                            {level}
                          </label>

                          {/* Render additional checkboxes based on selectedGradeLevels */}
                  {/* {updatedGradeLevels.includes(level) && (
                            <div>
                              {coursesByGradeLevel[level].map((course) => (
                                <div
                                  key={course}
                                  className="flex flex-row items-center mt-3 mr-4"
                                >
                                  <input
                                    type="checkbox"
                                    id={`course-${course}`}
                                    value={`course-${course}`}
                                    checked={formData.courses.includes(course)}
                                    onChange={() =>
                                      handleCourseCheckboxChange(course)
                                    }
                                    className="text-sm"
                                  />
                                  <label
                                    htmlFor={`course-${course}`}
                                    className="text-sm font-light ml-2"
                                  >
                                    {course}
                                  </label>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div> */}

                  <div className="mb-4 mt-4 flex flex-row">
                    <label className="text-2xl font-semibold text-gray-700">
                      Grade:
                    </label>
                    <div className="flex justify-between ">
                      {Object.keys(coursesByGradeLevel).map((gradeOption) => (
                        <label
                          key={gradeOption}
                          className="ml-9 flex items-center"
                        >
                          <input
                            name="grade"
                            type="radio"
                            value={gradeOption}
                            checked={grade === gradeOption}
                            onChange={(e) => handleRadioChange(e, setGrade)}
                          />
                          <span className="ml-3 text-md">{gradeOption}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Courses Checkboxes */}
                  {/* <div className=" ">
                    {grade && (
                      <>
                        <label
                          htmlFor="gradeLevel"
                          className="text-2xl font-semibold text-gray-700"
                        >
                          Courses:
                        </label>
                        <div className="ml-3 flex flex-wrap justify-start items-center">
                          <div>
                            {coursesByGradeLevel[grade].map((course) => (
                              <div
                                key={course}
                                className="flex flex-row justify-start items-center mt-3 mr-4 text-black"
                              >
                                <input
                                  type="checkbox"
                                  id={`course-${course}`}
                                  value={`course-${course}`}
                                  checked={courses.includes(course)}
                                  onChange={() => handleCheckboxChange(course)}
                                  className="text-sm"
                                />
                                <label
                                  htmlFor={`course-${course}`}
                                  className="text-sm  font-light ml-2"
                                >
                                  {course}
                                </label>
                              </div>
                            ))}
                          </div>
                        </div>
                      </>
                    )}
                  </div> */}
                  <div className="">
                    {grade && (
                      <>
                        <label
                          htmlFor="gradeLevel"
                          className="text-2xl font-semibold text-gray-700"
                        >
                          Courses:
                        </label>
                        <div className="ml-3 flex flex-wrap justify-start items-center">
                          <div>
                            {Object.keys(coursesByGradeLevel[grade]).map(
                              (packageKey) => (
                                <div key={packageKey} className="mb-2">
                                  <div className="flex items-center">
                                    <input
                                      type="checkbox"
                                      id={`package-${packageKey}`}
                                      value={`package-${packageKey}`}
                                      checked={selectedPackages.includes(
                                        packageKey
                                      )}
                                      onChange={() => togglePackage(packageKey)}
                                      className="text-sm"
                                    />
                                    <label
                                      htmlFor={`package-${packageKey}`}
                                      className="text-base font-semibold cursor-pointer ml-2"
                                    >
                                      {packageKey}:
                                    </label>
                                  </div>
                                  {selectedPackages.includes(packageKey) && (
                                    <div className="ml-4">
                                      {coursesByGradeLevel[grade][
                                        packageKey
                                      ].map((course) => (
                                        <div key={course} className="text-sm">
                                          {course}
                                        </div>
                                      ))}
                                    </div>
                                  )}
                                </div>
                              )
                            )}
                          </div>
                        </div>
                      </>
                    )}
                  </div>

                  {/* Post Request Button */}
                  <div className="flex justify-center mt-10">
                    <button
                      onClick={handlePostRequest}
                      className=" bg-[#745B83] text-white py-2 px-4 rounded-full"
                    >
                      Post Request
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorRequestForm;
