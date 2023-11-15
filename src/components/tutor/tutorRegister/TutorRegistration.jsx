import React, { useState } from "react";
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
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    profession: "",
    location: "",
    phoneNumber: "",
    majorTaken: "",
    gradeLevel: [],
    // Add more form fields and their default values here...
  });
  // const [value, setvalue] = useState("");
const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSelectChange = (values, e) => {
    // const selectedValues = Array.from(event.target.selectedOptions, (option) => option.value);
    // setSelectedOptions(selectedValues);
    const gradeLevel = values.split(', ');
    // for (let i = 0, l = event.length; i < l; i += 1) {
    //   value.push(event[i].value);
    // }
    setFormData((prevFormData) => ({
      ...prevFormData,
      gradeLevel: JSON.stringify(gradeLevel),
    }));
    console.log(gradeLevel);

  };
  // const handleOnChange = (selectedValues) => {
  //   // Update the gradeLevel field in formData with the selected values
  //   setFormData((prevFormData) => ({
  //     ...prevFormData,
  //     gradeLevel: selectedValues,
  //   }));
  //   console.log(selectedValues);
  // };

  const options = [
    { label: "Kindergarten", value: "Kindergarten" },
    { label: "Elementary", value: "Elementary" },
    { label: "Middle School", value: "Middle School" },
    { label: "High School", value: "High School" },
    { label: "College", value: "College" },
  ];

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  // const formOnChageHandler = (e) => {
  //   e.preventDefault();
  // };
  // const fromOnSubmitHandler = (e) => {
  //   e.preventDefault();
  // };
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
      console.log(result.data);
      showToast("Register successful", "success");
      showToast(
        "Please wait till Your request is reviewed with in two work days",
        "info"
      );
      // If successful, set the success flag to true
      success = true;
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
    if (success) {
      // If the API call was successful, navigate to the waitPage
      //  navigate("/waitPage");
    }

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

  return (
    <>
      <div className="m-0 p-0 box-border">
        <div className="bg-register-image flex h-screen justify-center items-center bg-fixed bg-center bg-cover bg-no-repeat">
          <div className="w-full max-w-3xl bg-opacity-50 bg-black p-7 mx-4 my-7 rounded-lg shadow-md border border-cyan-500">
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
                    className="w-full h-10 rounded-lg border bg-black bg-opacity-50 border-cyan-600 outline-none px-4"
                  >
                    <option value="other">Other</option>
                    <option value="student">Student</option>
                    <option value="teacher">Teacher</option>
                  </select>
                </div>

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
                <div className="user-input-box">
                  <label htmlFor="gradeLevel">
                    Garde level you want to Tutor?
                  </label>
                  <MultiSelect
                    id="gradeLevel"
                    onChange={handleSelectChange}
                    value={selectedOptions}
                    // value={formData.gradeLevel}
                    options={options}
                    // className="w-full rounded-lg border  border-cyan-500 outline-none px-4"
                  />
                  {/* <select
                    id="gradeLevel"
                    value={formData.gradeLevel}
                    onChange={handleFormChange}
                    // multiple // Allow multiple selections
                    className="w-full h-10 rounded-lg border bg-black bg-opacity-50 border-cyan-500 outline-none px-4"
                  >
                    <option value="Kindergarten">Kindergarten</option>
                    <option value="Elementary">Elementary</option>
                    <option value="Middle School">Middle School</option>
                    <option value="High School">High School</option>
                    <option value="College">College</option>
                  </select> */}
                </div>
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
                {/* <div className="gender-details-box">
                    <span className="gender-title justify-between">Gender</span>
                    <div className="gender-category flex flex-col">
                      <input type="radio" name="gender" id="male" />
                      <label htmlFor="male">Male</label>
                      <input type="radio" name="gender" id="female" />
                      <label htmlFor="female">Female</label>
                    </div>
                  </div> */}
              </div>
              {error && <div className="error">Error: {error}</div>}
              <div className="form-submit-btn bg-cyan-600 hover:bg-cyan-900 text-center">
                <button type="submit">Register</button>
              </div>

              {/* {error && <div className="error">{error}</div>} */}
            </form>
          </div>
        </div>
        <div className="w-96 p-4 border border-gray-300 rounded-lg ml-6">
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
          </p>
        </div>
      </div>
    </>
  );
};
export default TutorRegistration;
