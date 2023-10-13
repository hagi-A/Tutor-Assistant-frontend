import React, { useState } from "react";

const Step1 = ({ formData, setFormData }) => {
  
  //the name attribute is used to determine which field in the form is being updated when an input element's value changes.
  const handleChange = (e) => {
    setFormData((prev) =>({
        ...prev,
        [e.target.id]: e.target.value,
      }));
  };

  
  const formOnChageHandler = (e) => {
    e.preventDefault();
  };
  const fromOnSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="w-full max-w-sm">
      <form onChange={formOnChageHandler} onSubmit={fromOnSubmitHandler} className="border border-midnight-blue-700 shadow-md  px-20 pt-16 pb-10 mb-6 rounded-md">
        <h1 className="text-white pb-8 font-light text-xl">Personal Info</h1>

        <div className="mb-2">
          <label
            className=" text-white text-md font-light mb-2"
            htmlFor="fullname"
          >
            Full Name:
          </label>
          <input
            className="bg-transparent  border border-midnight-blue-800 rounded-md w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="fullname"
            name="fullname"
            value={formData.fullname}
            onChange={handleChange}
          />
        </div>
        <div className="mb-2">
          <label
            className=" text-white text-md font-light mb-2"
            htmlFor="profession"
          >
            Profession:
          </label>
          <input
            className="bg-transparent placeholder-gray-300 border border-midnight-blue-800 rounded-md w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="profession"
            name="profession"
            value={formData.profession}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="mb-2">
          <label
            className=" text-white text-md font-light mb-2"
            htmlFor="phoneNumber"
          >
            Phone Number:
          </label>
          <input
            className="bg-transparent placeholder-gray-300 border border-midnight-blue-800 rounded-md w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
            type="number"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="mb-2">
          <label
            className=" text-white text-md font-light mb-2"
            htmlFor="location"
          >
            Location:
          </label>
          <input
            className="bg-transparent placeholder-gray-300 border border-midnight-blue-800 rounded-md w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="flex items-center justify-between"></div>
      </form>
    </div>
  );
};

export default Step1;
