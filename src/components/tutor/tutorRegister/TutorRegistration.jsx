import React, { useState } from "react";
import "./tutorStyle.css";
import { FaRegTrashAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

const TutorRegistration = () => {
  const navigate = useNavigate();
  const [selectedImages, setSelectedImages] = useState([]);
  const [selectedCVs, setSelectedCVs] = useState([]);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    profession: "",
    location: "",
    phoneNumber: "",
    ueeeResult: "",
    majorTaken: "",
    cgpa: "",
    price: "",
    gradeLevel: "",
    // Add more form fields and their default values here...
  });

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

    const formdata = new FormData()
      
      formdata.append("image", formData);

    const result = await axios.post("/api/files/images", formdata, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    console.log(result.data);
    // {
    //   ...formData,
    //   selectedImages,
    //   selectedCVs,
    //   // Include other form data fields
    // };
      // const response = await fetch("/api/files/images", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "multipart/form-data",
      //   },
      //   body: formDataToSubmit.selectedImages,
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
                provided details match your CV and transcripts for system
                access.
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
                      <option value="teacher">Teacher</option>
                      <option value="student">Student</option>
                      <option value="other">Other</option>
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
                      type="number"
                      id="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleFormChange}
                      placeholder="+251"
                      className="border border-cyan-600 text-white"
                    />
                  </div>
                  <div className="user-input-box">
                    <label htmlFor="ueeeResult">
                      Your Grade 12 UEEE result
                    </label>
                    <input
                      type="number"
                      id="ueeeResult"
                      value={formData.ueeeResult}
                      onChange={handleFormChange}
                      placeholder="350"
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
                    <label htmlFor="cgpa">Your CGPA</label>
                    <input
                      type="number"
                      id="cgpa"
                      value={formData.cgpa}
                      onChange={handleFormChange}
                      placeholder="2.5"
                      className="border border-cyan-600 text-white"
                    />
                  </div>
                  <div className="user-input-box">
                    <label htmlFor="price">Price Rate per Hour</label>
                    <input
                      type="number"
                      id="price"
                      value={formData.price}
                      onChange={handleFormChange}
                      placeholder="250 ETB"
                      className="border border-cyan-600 text-white"
                    />
                  </div>
                  <div className="user-input-box">
                    <label htmlFor="gradeLevel">
                      Garde level you want to Tutor?
                    </label>
                    <select
                      id="gradeLevel"
                      value={formData.gradeLevel}
                      onChange={handleFormChange}
                      className="w-full h-10 rounded-lg border bg-black bg-opacity-50 border-cyan-500 outline-none px-4"
                    >
                      <option value="kindergarten">Kindergarten</option>
                      <option value="elementary">Elementary</option>
                      <option value="middleSchool">Middle School</option>
                      <option value="highSchool">High School</option>
                      <option value="college">College</option>
                    </select>
                  </div>
                  {/* File and Image uploaders */}
                  <div className="user-input-box">
                    <label>
                      Upload CVs:{" "}
                      <span className="text-yellow-400">
                        Must contain Transcript, Grade 10 and 12 and CGPA result{" "}
                      </span>
                    </label>
                    <input
                      type="file"
                      accept=".pdf, .doc, .docx"
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

                <div className="form-submit-btn bg-cyan-600 hover:bg-cyan-900 text-center">
                  <button type="submit">Register</button>
                  {/* {error && <div className="error">{error}</div>} */}
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
};
export default TutorRegistration;