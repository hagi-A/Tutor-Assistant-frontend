import React from "react";
import "./tutorStyle.css";

const TutorRegistration = () => {
  return (
    <>
    <div className="container bg-images">
      <h1 className="form-title">Registration</h1>
      <form action="#">
        <div className="main-user-info">
          <div className="user-input-box">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Enter Full Name"
            />
          </div>
          <div className="user-input-box">
            <label htmlFor="profession">Profession</label>
            <select
              id="profession"
              name="profession"
              className="w-full h-10 rounded-lg border border-gray-300 outline-none px-4"
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
              name="location"
            />
          </div>
          <div className="user-input-box">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="number"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="+251"
            />
          </div>
          <div className="user-input-box">
            <label htmlFor="password">Your Grade 12 UEEE result</label>
            <input
              type="number"
              id="ueeeResult"
              name="ueeeResult"
              placeholder="350"
            />
          </div>
          <div className="user-input-box">
            <label htmlFor="confirmPassword">What Major are you taking/taken?</label>
            <input
              type="text"
              id="majorTaken"
              name="majorTaken"
              placeholder="Computer Science"
            />
          </div>
          <div className="user-input-box">
            <label htmlFor="phoneNumber">Your CGPA</label>
            <input
              type="number"
              id="CGPA"
              name="CGPA"
              placeholder="2.5"
            />
           </div>
           <div className="user-input-box">
            <label htmlFor="price">Price Rate per Hour</label>
            <input
              type="number"
              id="price"
              name="price"
              placeholder="250 ETB"
            />
           </div> 
           <div className="user-input-box">
            <label htmlFor="gradeLevel">Garde level you want to Tutor?</label>
            <select
              id="gradeLevel"
              name="gradeLevel"
              className="w-full h-10 rounded-lg border border-gray-300 outline-none px-4"
            >
              <option value="kindergarten">Kindergarten</option>
              <option value="elementary">Elementary</option>
              <option value="middleSchool">Middle School</option>
              <option value="highSchool">High School</option>
              <option value="college">College</option>
            </select>
          </div>
          <div className="user-input-box">
            <label htmlFor="phoneNumber">Upload your Grade 12 UEEE result</label>
            <input
              type="number"
              id="price"
              name="price"
              placeholder="250 ETB"
            />
           </div> 
        </div>
        <div className="gender-details-box">
          <span className="gender-title">Gender</span>
          <div className="gender-category flex flex-col">
            <input type="radio" name="gender" id="male" />
            <label htmlFor="male">Male</label>
            <input type="radio" name="gender" id="female" />
            <label htmlFor="female">Female</label>
          </div>
        </div>
        <div className="form-submit-btn bg-cyan-600 hover:bg-cyan-900">
          <input type="submit" value="Register" />
        </div>
      </form>
    </div>
    </>
  );
};

export default TutorRegistration;
