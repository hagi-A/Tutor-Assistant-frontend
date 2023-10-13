import React, { useState } from "react";
import { FaUserCircle, FaGraduationCap, FaCertificate } from "react-icons/fa";
import Step1 from "./forms/Step1";
import Step2 from "./forms/Step2";
import Step3 from "./forms/Step3";
import './tutorStyle.css';

const RegistrationPage = () => {
  const formList = ["Step1", "Step2", "Step3"];
  const formLength = formList.length;

  const [page, setPage] = useState(0);

  const handlePrev = () => {
    setPage(page === 0 ? formLength - 1 : page - 1);
  };
  const handleNext = () => {
    console.log(formData);
    setPage(page === formLength - 1 ? 0 : page + 1);
  };

  const [formData, setFormData] = useState({
    fullname: "",
    profession: "",
    phoneNumber: "",
    location: "",
    priceRate: "",
    gradeLevel: "",
    courses: "",
    cvPath: "",
    certificateImages: [],
  });
  // const [values, setValues] = useState(initialValues);
  //  const onChange = (e) => {
  //   const { name, value, type, checked } = e.target;
  //   setValues({ ...values, [name]: type === "checkbox" ? checked : value });
  // };
  const handleChange = (e) => {
    
    const { name, newValue } = e.target;
    setFormData({
      ...formData,
      [name]: newValue,
    });
  };
  
  const handleForms = () => {
    switch (page) {
      case 0: {
        return (
         
            <Step1  formData={formData} setFormData={setFormData}></Step1>
      
        );
      }
      case 1: {
        return <Step2 formData={formData} onChange={handleChange}></Step2>;
      }
      case 2: {
        return <Step3  formData={formData} onChange={handleChange}></Step3>;
      }
      default:
        return null;
    }

  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/tutors/tutorRegistration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (response.status === 201) {
        console.log("Tutor registered successfully");
        // Optionally, you can reset the form here
        // setValues(initialValues);
      } else {
        console.error("An error occurred while registering the tutor");
      }
    } catch (error) {
      console.error("An error occurred while making the request", error);
    }
    const response = await setTimeout(() => {
      console.log("form", formData);
    }, 2000);
    return response;
  };

  const setForm = (e) => {
    const name = e.target.innerText;
    switch (name) {
      case "Personal Info": {
        return setPage(0);
      }
      case "Tuition Info": {
        return setPage(1);
      }
      case "Certification Info": {
        return setPage(2);
      }
      default:
        setPage(0);
    }
  };

 

  return (
    <>
    <div className="bg-images bg-opacity-20">
    <div className="flex flex-col items-center justify-center h-screen">
      <ul className="flex flex-row mt-8 w-2/6 items-center justify-between">
        <li
          onClick={setForm}
          className={
            page === 0 ? "bg-midnight-blue-700 w-2/6 rounded-lg  " : "bg: transparent"
          }
        >
          <div className="flex items-center ml-2">
            <span className="stepper-head-icon">
              <FaUserCircle className="h-8 w-8 text-blue-300"/>
            </span>
            <span
              className={
                page === 0
                  ? "ml-2 text-white font-light"
                  : "ml-2 text-white cursor-pointer"
              }
            >
              Personal Info
            </span>
          </div>
        </li>
        <li
          onClick={setForm}
          className={
            page === 1 ? "bg-midnight-blue-700  w-2/6 rounded-lg" : "bg: transparent "
          }
        >
          <div className="flex items-center ml-2">
            <span className="stepper-head-icon">
                {" "}
            <FaGraduationCap className="h-8 w-8 text-blue-300"/>
            </span>
            <span
              className={
                page === 1
                  ? "ml-2 text-white font-medium"
                  : "ml-2 text-white cursor-pointer"
              }
            >
              Tuition Info
            </span>
          </div>
        </li>
        <li
          onClick={setForm}
          className={
            page === 2 ? "bg-midnight-blue-700 w-2/6 rounded-lg" : "bg: transparent"
          }
        >
          <div className="flex items-center">
            <span className="stepper-head-icon">
              <FaCertificate className="h-8 w-8 text-blue-300"/>
            </span>
            <span
              className={
                page === 2
                  ? "ml-2 text-white font-medium"
                  : "ml-2 text-white cursor-pointer"
              }
            >
              
              Certification Info
            </span>
          </div>
        </li>
      </ul>
      <div className="flex">{handleForms()}</div>
    {/*   {error && <div className="error">{error}</div>} */}
      <div className="flex flex-row items-center justify-between">
        <button
          onClick={handlePrev}
          className="bg-midnight-blue-700  hover:bg-midnight-blue-400 rounded-md text-white font-light py-2 px-4 disabled:bg-gray-400 disabled:text-black"
          disabled={page === 0}
        >
          Prev
        </button>
        {page === 2 ? (
          <button
            onClick={handleSubmit}
            className="bg-midnight-blue-700 hover:bg-midnight-blue-400 rounded-md text-white font-light py-2 px-4 ml-4"
          >
            Submit
          </button>
        ) : (
          <button
            onClick={handleNext}
            className="bg-midnight-blue-700 hover:bg-midnight-blue-400 rounded-md text-white font-light py-2 px-4 ml-4"
          >
            Next
          </button>
        )}
      </div>
    </div>
    </div>
    </>
  );
};


export default RegistrationPage;
