import React, { useState, useEffect } from "react";
import "./tutorStyle.css";
import { FaRegTrashAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import MultiSelect from "react-multiple-select-dropdown-lite";
import "react-multiple-select-dropdown-lite/dist/index.css";
import "react-toastify/dist/ReactToastify.css";
import { showToast } from "../../../utils/toastUtils";

const TutorRegistration = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [selectedImages, setSelectedImages] = useState([]);
  const [selectedCVs, setSelectedCVs] = useState([]);
  // const [coursesList, setCoursesList] = useState({});
  const [selectedPackages, setSelectedPackages] = useState([]);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    profession: "",
    location: "",
    phoneNumber: "",
    majorTaken: "",
    dateOfBirth: "", // Add date of birth field
    gender: "", // Add gender field
    gradeLevel: "",
    selectedPackages: [], // Add courses field
    // Add more form fields and their default values here...
  });
  const gradeLevel = [
    "G1",
    "G2",
    "G3",
    "G4",
    "G5",
    "G6",
    "G7",
    "G8",
    "G9",
    "G10",
    "G11",
    "G12",
    "Collage",
  ];
  const coursesByGradeLevel = {
    G1: {
      "G1Package 1": ["English", "Amharic", "Social Studies", "Science"],
    },
    G2: {
      "G2Package 1": ["English", "Amharic", "Social Studies", "Science"],
    },
    G3: {
      "G3Package 1": ["English", "Amharic", "Social Studies", "Science"],
    },
    G4: {
      "G4Package 1": ["English", "Amharic", "Social Studies", "Science"],
    },
    G5: {
      "G5Package 1": ["English", "Amharic", "Social Studies", "Science"],
    },
    G6: {
      "G6Package 1": ["English", "Amharic", "Social Studies", "Science"],
    },
    G7: {
      "G7Package 1": ["English", "Amharic", "Social Studies", "Science"],
      "G7Package 2": ["Physics", "Biology", "Chemistry", "Maths"],
    },
    G8: {
      "G8Package 1": ["English", "Amharic", "Social Studies", "Science"],
      "G8Package 2": ["Physics", "Biology", "Chemistry", "Maths"],
    },
    G9: {
      "G9Package 1": ["English", "Amharic", "Geography", "History"],
      "G9Package 2": ["Maths", "Physics", "Biology", "Chemistry"],
    },
    G10: {
      "G10Package 1": ["English", "Amharic", "Geography", "History"],
      "G10Package 2": ["Maths", "Physics", "Biology", "Chemistry"],
    },
    G11: {
      "G11Natural": [
        "English",
        "Amharic",
        "Maths",
        "Science",
        "Physics",
        "Biology",
        "Chemistry",
      ],
      "G11Social": [
        "English",
        "Amharic",
        "Maths",
        "Geography",
        "History",
        "Economics",
        "Business",
      ],
    },
    G12: {
      "G12Natural": [
        "English",
        "Amharic",
        "Maths",
        "Science",
        "Physics",
        "Biology",
        "Chemistry",
      ],
      "G12Social": [
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
      "Programming Package": ["C++ Programming", "Java", "Python"],
    },
  };


  // useEffect(() => {
  //   // Fetch courses from your API endpoint
  //   const fetchCourses = async () => {
  //     try {
  //       const response = await fetch("/api/course/getCourses");
  //       if (!response.ok) {
  //         throw new Error("Failed to fetch courses");
  //       }

  //       const fetchedCourses = await response.json();
  //       setCoursesList(fetchedCourses);
  //     } catch (error) {
  //       console.error("Error fetching courses:", error.message);
  //     }
  //   };

  //   fetchCourses();
  // }, []);
  const [updatedGradeLevels, setUpdatedGradeLevels] = useState([]);

  // const [selectedGradeLevel, setSelectedGradeLevel] = useState("");
  // // const [value, setvalue] = useState("");
  // const [selectedCourses, setSelectedCourses] = useState([]);

  // const handleCourseChange = (event) => {
  //   const { value } = event.target;

  //   // Update the local state first
  //   setFormData((prevFormData) => {
  //     const updatedCourses = prevFormData.courses.includes(value)
  //       ? prevFormData.courses.filter((course) => course !== value)
  //       : [...prevFormData.courses, value];

  //     setSelectedCourses(updatedCourses);

  //     return { ...prevFormData, courses: updatedCourses };
  //   });
  // };

  // const handlePackageChange = (event) => {
  //   const { value } = event.target;
  //   setSelectedPackage(value);
  // };
  const handlePackageChange = (event) => {
    const { value } = event.target;

    // Check if the package is already selected
    setSelectedPackages((prevSelectedPackages) => {
      const updatedSelectedPackages = prevSelectedPackages.includes(value)
        ? prevSelectedPackages.filter((pkg) => pkg !== value)
        : [...prevSelectedPackages, value];

      // Set the updatedSelectedPackages state
      setSelectedPackages(updatedSelectedPackages);
      console.log(updatedSelectedPackages);
      return updatedSelectedPackages;
    });

    // console.log(selectedPackages);
  };

  const handleGradeLevelChange = (event) => {
    const { value } = event.target;

    // Update the local state first
    setFormData((prevFormData) => {
      // console.log("Prev Tutor:", updatedGradeLevels);
      // if (!prevTutor || !prevTutor.gradeLevel) {
      //   // Handle the case when prevTutor or prevTutor.gradeLevel is undefined
      //   return prevTutor;
      // }
      const updatedGradeLevels = prevFormData.gradeLevel.includes(value)
        ? prevFormData.gradeLevel.filter((level) => level !== value)
        : [...prevFormData.gradeLevel, value];

      // Set the updatedGradeLevels state
      setUpdatedGradeLevels(updatedGradeLevels);

      return { ...prevFormData, gradeLevel: updatedGradeLevels };
    });
  };

  const handleGenderChange = (values, e) => {
    const gender = values.target.value;

    setFormData((prevFormData) => ({
      ...prevFormData,
      gender: gender,
    }));
    console.log(gender);
  };
  // const handleOnChange = (selectedValues) => {
  //   // Update the gradeLevel field in formData with the selected values
  //   setFormData((prevFormData) => ({
  //     ...prevFormData,
  //     gradeLevel: selectedValues,
  //   }));
  //   console.log(selectedValues);
  // };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleImageChange = (event) => {
    const imageFiles = Array.from(event.target.files);
    setFormData((prevData) => ({
      ...prevData,
      selectedImages: imageFiles[0],
    }));
  };

  const handleCVChange = (event) => {
    const cvFiles = Array.from(event.target.files);
    setFormData((prevData) => ({
      ...prevData,
      selectedCVs: cvFiles[0],
    }));
  };

  const removeImage = (index) => {
    const newImages = [...selectedImages];
    newImages.splice(index, 1);
    setSelectedImages(newImages);
  };

  const removeCV = (index) => {
    const newCVs = [...selectedCVs];
    newCVs.splice(index, 1);
    setSelectedCVs(newCVs);
  };

  const handleFormChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // const formdata = new FormData()
    // formdata.append("image", formData);

    // const formdatafinal = new FormData();
    //   formdatafinal.append("cvs", formdata);
    let success = false; // Flag to track the success of the API call

    try {
      const result = await axios.post("/api/files/images", formData, {
        headers: { "Content-Type": "multipart/form-data" },
        // body: JSON.parse(JSON.stringify({ formData })),
      });
      // Convert selectedOptions into JSON format
      // const jsonData = JSON.stringify({ selectedOptions });

      // Send jsonData to the server or perform other actions
      // console.log("JSON Data:", jsonData);
      // console.log(result.data);
      console.log(formData.gender);

      console.log(formData.selectedPackage);
      // If successful, set the success flag to true
      // success = true;
      // if (success) {
      showToast("Register successful", "success");
      showToast(
        "Please wait till Your request is reviewed with in two work days",
        "info"
      );
      // If the API call was successful, navigate to the waitPage
      navigate("/waitPage");
      // }
    } catch (error) {
      if (error.response) {
        // If there is an error response from the server
        setError(error.response.data.message); // Set error message in state
      } else if (error.request) {
        // Handle request error
        setError("No response received");
        showToast(error.request, "error");
      } else {
        // Handle other errors
        setError("Error occurred: " + error.message);
        showToast(error, "error");
      }
    }
    // Check if gradeLevel is not selected (empty string or empty array)
    // if (
    //   !formData.gradeLevel ||
    //   (Array.isArray(formData.gradeLevel) && formData.gradeLevel.length === 0)
    // ) {
    //   // If not selected, show an error message
    //   console.error("Please Select Grade Level");
    //   // You might also set an error state to display the error in your UI
    //   // setError('Please Select Grade Level');
    //   return; // Prevent further form submission
    // }

    // {
    //   ...formData,
    //   selectedImages,
    //   selectedCVs,
    //   // Include other form data fields
    // };
    // const rs: {
    //     "Content-Type": "multipart/form-data",
    //   },
    //   body: esponse = await fetch("/api/files/images", {
    //   method: "POST",
    //   headerformDataToSubmit.selectedImages,
    // });

    // try {
    //   const response = await fetch("/api/tutors/tutorRegistration", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(formDataToSubmit),
    //   });

    //   if (response.ok) {
    //     navigate("/waitPage")
    //     // Handle success, e.g., show success message or redirect to a new page
    //     console.log('Form submitted successfully!');
    //   } else {
    //     // Handle error cases
    //     console.error('Error submitting the form.');
    //   }
    // } catch (error) {
    //   // Handle errors related to fetch or network issues
    //   console.error('An error occurred:', error);
    // }
  };
  const handleCourseCheckboxChange = (courseId) => {
    // Toggle the selection of the course
    setFormData((prevData) => {
      const isSelected = prevData.courses.includes(courseId);
      const updatedCourses = isSelected
        ? prevData.courses.filter((id) => id !== courseId)
        : [...prevData.courses, courseId];

      return { ...prevData, courses: updatedCourses };
    });
  };

  return (
    <>
      <div className="m-0 p-0 box-border">
        <div className="bg-register-image flex h-screen justify-center items-center bg-fixed bg-center bg-cover bg-no-repeat">
          <div className="w-full max-w-[75%] bg-opacity-50 bg-black p-7 mx-4 my-7 rounded-lg shadow-md border border-cyan-500">
            <h1 className="form-title">Registration</h1>
            <p className="text-lg text-slate-200 text-center">
              Welcome! To become a tutor, submit a request for supervisor
              approval. Await an email with your result. Ensure that your
              provided details match your CV and transcripts for system access.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="main-user-info">
                <div className="user-input-box ">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    value={formData.firstName}
                    onChange={handleFormChange}
                    placeholder="Enter First Name"
                    className="border border-cyan-600 text-white bg-cyan-500"
                  />
                </div>
                <div className="user-input-box ">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    value={formData.lastName}
                    onChange={handleFormChange}
                    placeholder="Enter Last Name"
                    className="border border-cyan-600 text-white bg-cyan-500"
                  />
                </div>
                <div className="user-input-box ">
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    id="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    placeholder="Enter Email"
                    className="border border-cyan-600 text-white bg-cyan-500"
                  />
                </div>
                <div className="user-input-box">
                  <label htmlFor="profession">Profession</label>
                  <select
                    id="profession"
                    value={formData.profession}
                    onChange={handleFormChange}
                    className="w-[95%] h-10 rounded-lg border bg-black bg-opacity-50 border-cyan-600 outline-none px-4"
                  >
                    <option value="other">Other</option>
                    <option value="student">Student</option>
                    <option value="teacher">Teacher</option>
                  </select>
                </div>
                <div className="user-input-box">
                  <label htmlFor="dateOfBirth">Date of Birth</label>
                  <input
                    type="date"
                    id="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleFormChange}
                    className="border border-cyan-600 text-white"
                  />
                </div>
                {/* <div className="user-input-box">
                  <div className="flex justify-start">
                    <label>Gender:</label>
                    <div className="flex  items-center">
                      <input
                        type="radio"
                        id="Male"
                        name="gender" // Add the name attribute to group the radio buttons
                        value="Male"
                        // checked={true}
                        onClick={handleGenderChange}
                        className="mr-2 ml-4"
                      />
                      <label htmlFor="male" className="text-white">
                        Male
                      </label>

                      <input
                        type="radio"
                        id="Female"
                        name="gender" // Add the name attribute to group the radio buttons
                        value="Female"
                        // checked={formData.gender === "Female"}
                        // checked={true}
                        onClick={handleGenderChange}
                        className="ml-4 mr-2"
                      />
                      <label htmlFor="female" className="text-white">
                        Female
                      </label>
                    </div>
                  </div>
                </div> */}

                <div className="user-input-box">
                  <label htmlFor="location">Location</label>
                  <input
                    type="text"
                    id="location"
                    value={formData.location}
                    onChange={handleFormChange}
                    placeholder="Wello Sefer, AA"
                    className="border border-cyan-600 text-white"
                  />
                </div>
                <div className="user-input-box">
                  <label htmlFor="phoneNumber">Phone Number</label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleFormChange}
                    placeholder="+251"
                    className="border border-cyan-600 text-white"
                  />
                </div>

                <div className="user-input-box">
                  <label htmlFor="majorTaken">
                    What Major are you taking/taken?
                  </label>
                  <input
                    type="text"
                    id="majorTaken"
                    value={formData.majorTaken}
                    onChange={handleFormChange}
                    placeholder="Computer Science"
                    className="border border-cyan-600 text-white"
                  />
                </div>

                {/* <div className="user-input-box">
                  <label>Courses:</label>
                  <div className="ml-3 flex flex-wrap justify-start items-center">
                    {coursesList.map((course) => (
                      <div key={course._id} className="flex items-center">
                        <input
                          type="checkbox"
                          id={course._id}
                          checked={formData.courses.includes(course._id)}
                          onChange={() =>
                            handleCourseCheckboxChange(course._id)
                          }
                          className="h-4 w-4 text-cyan-600 focus:ring-cyan-500 border-gray-300 rounded"
                        />
                        <label htmlFor={course._id} className="ml-2 text-sm">
                          {course.courseTitle}
                        </label>
                      </div>
                    ))}
                  </div>
                </div> */}

                {/* File and Image uploaders */}
                <div className="user-input-box">
                  <label>
                    Upload CVs:{" "}
                    <span className="text-yellow-400">
                      {formData.profession === "teacher"
                        ? "Must upload a single PDF file that includes your Curriculum Vitae (CV), Degree Certificate, and Degree Grade Report."
                        : formData.profession === "student"
                        ? "Required to upload a single PDF file containing your Grade 12 result Certificate and Curriculum Vitae (CV)"
                        : "Must upload a single PDF file that includes your Curriculum Vitae (CV), Degree Certificate, Grade 12 result certificate and Degree Grade Report."}
                    </span>
                  </label>
                  <input
                    type="file"
                    accept=".pdf,"
                    onChange={(e) => handleCVChange(e)}
                    className="w-full h-10 rounded-lg border bg-black bg-opacity-50 border-cyan-500 outline-none px-4"
                  />
                  {/* Display selected CVs */}
                  {selectedCVs.length > 0 && (
                    <div className="mt-2">
                      {selectedCVs.map((cv, index) => (
                        <div key={index} className="mb-2">
                          <p className="text-white">
                            CV {index + 1}: {cv.name}
                          </p>
                          <button
                            onClick={() => removeCV(index)}
                            className="text-red-500 mt-1"
                          >
                            <FaRegTrashAlt />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="user-input-box">
                  <label>Upload Profile Images:</label>
                  <input
                    type="file"
                    filename={selectedImages}
                    accept="image/*"
                    onChange={(e) => handleImageChange(e)}
                    className="w-full h-10 rounded-lg border bg-black bg-opacity-50 border-cyan-500 outline-none px-4"
                  />
                  {/* Display selected images */}
                  {selectedImages.length > 0 && (
                    <div className="mt-2">
                      {selectedImages.map((image, index) => (
                        <div key={index} className="mb-2">
                          <img
                            src={URL.createObjectURL(image)}
                            alt={`Selected Image ${index + 1}`}
                            className="max-w-md max-h-40"
                          />
                          <button
                            onClick={() => removeImage(index)}
                            className="text-red-500 mt-1 bg-white bg-opacity-20"
                          >
                            <FaRegTrashAlt />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Dropdown for selecting a package */}

                {/* Render additional checkboxes based on selectedGradeLevels */}
                {/* {updatedGradeLevels.map((selectedLevel) => (
                      <div
                        key={selectedLevel}
                        className="flex flex-row items-center mt-3 mr-4"
                      > 
                  {/* <label className="text-sm font-light ml-2">
                          Select courses for {selectedLevel}
                        </label> */}
                {/* {coursesByGradeLevel[selectedLevel].map((course) => (
                          <div
                            key={course}
                            className="flex flex-row items-center mt-3 mr-4"
                          >
                            <input
                              type="checkbox"
                              id={course}
                              value={course}
                              checked={formData.courses.includes(course)} // Set to true to make all checkboxes initially checked
                              onChange={handleCourseChange}
                              className="text-sm"
                              disabled={false} // Set to true to prevent unchecking
                            />
                            <label
                              htmlFor={course}
                              className="text-sm font-light ml-2"
                            >
                              {course}
                            </label>
                          </div>
                        ))}
                      </div>
                    ))} */}
                <div className="user-input-box">
                  {gradeLevel.map((level) => (
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
                      />
                      <label
                        htmlFor={level}
                        className="text-sm font-light ml-2"
                      >
                        {level}
                      </label>
                    </div>
                  ))}
                  <div className="">
                    {updatedGradeLevels.map((selectedLevel) => (
                      <div
                        key={selectedLevel}
                        className="flex flex-row items-center mt-3 mr-4"
                      >
                        {Object.keys(coursesByGradeLevel[selectedLevel]).map(
                          (packageKey) => (
                            <div
                              key={packageKey}
                              className="flex flex-row items-center mt-3 mr-4"
                            >
                              <input
                                type="checkbox"
                                id={packageKey}
                                value={packageKey}
                                checked={selectedPackages.includes(packageKey)}
                                onChange={handlePackageChange}
                                className="text-sm"
                                disabled={false}
                              />
                              <label
                                htmlFor={packageKey}
                                className="text-sm font-light ml-2"
                              >
                                {packageKey}
                              </label>
                            </div>
                          )
                        )}
                        {selectedPackages.includes(selectedLevel) && (
                          <div>
                            {Object.entries(
                              coursesByGradeLevel[selectedLevel]
                            ).map(([pkg, courses]) => (
                              <div key={pkg} className="text-sm">
                                {pkg}: {courses.join(", ")}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  {/* </div> */}
                </div>
                {/* Render course packages based on selectedCourses */}
                {/* {selectedCourses.map((selectedCourse) => (
                      <div
                        key={selectedCourse}
                        className="flex flex-row items-center mt-3 mr-4"
                      >
                        {/* Display the course package or take further action as needed */}
                {/* <p>{selectedCourse}</p>
                  </div>
                    ))}  */}
                {/* </div> */}
                {/* </div> */}
              </div>
              <div className="gender-details-box">
                <span className="gender-title flex justify-start">Gender</span>
                <div className="flex justify-start">
                  <div className="flex items-center mt-7">
                    <input
                      type="radio"
                      id="Male"
                      name="gender" // Add the name attribute to group the radio buttons
                      value="Male"
                      // checked={true}
                      onClick={handleGenderChange}
                      className="mr-2 ml-4"
                    />
                    <label htmlFor="male" className="text-white text-md">
                      Male
                    </label>
                    <input
                      type="radio"
                      id="Female"
                      name="gender" // Add the name attribute to group the radio buttons
                      value="Female"
                      // checked={formData.gender === "Female"}
                      // checked={true}
                      onClick={handleGenderChange}
                      className="ml-4 mr-2"
                    />
                    <label htmlFor="female" className="text-white text-md">
                      Female
                    </label>
                  </div>
                </div>
              </div>

              {error && <div className="error">Error: {error}</div>}
              <div className="form-submit-btn bg-cyan-600 hover:bg-cyan-900 text-center">
                <button type="submit">Register</button>
              </div>
              {/* </div> */}
              {/* {error && <div className="error">{error}</div>} */}
              {/* </div> */}
            </form>
          </div>
        </div>
        {/* <div className="w-96 p-4 border border-gray-300 rounded-lg ml-6">
          <p className="text-sm font-semibold mb-2">Additional Notes:</p>
          <p className="mb-2">
            - All uploaded documents should be clear and legible.
          </p>
          <p className="mb-2">
            - The PDF file's size should not exceed the specified limit (insert
            size limit).
          </p>
          <p className="mb-2">
            - Failure to adhere to these document upload requirements may result
            in the rejection of the registration.
          </p>*/}
        {/* </div>  */}
      </div>
    </>
  );
};
export default TutorRegistration;
