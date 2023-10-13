import React, { useState, useEffect } from "react";
import MultiSelect from "react-multiple-select-dropdown-lite";
import "react-multiple-select-dropdown-lite/dist/index.css";

const Step2 = ({ formData, setFormData }) => {
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [selectedGrades, setSelectedGrades] = useState([]);

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

  
  //the name attribute is used to determine which field in the form is being updated when an input element's value changes.
  

  const handleGradeOnchange = (val) => {
    setSelectedGrades(val);
  };

  const handleOnchange = (vals) => {
    setSelectedCourses(vals);
  };

  const courseValues = [
    { label: "English", value: "English" },
    { label: "Amharic", value: "Amharic" },
    { label: "Mathimatics", value: "Mathimatics" },
    { label: "Physics", value: "Physics" },
    { label: "Chemistry", value: "Chemistry" },
    { label: "Biology", value: "Biology" },
    { label: "Spoken", value: "Spoken" },
    { label: "Geography", value: "Geography" },
    { label: "History", value: "History" },
    { label: "Economics", value: "Economics" },
    { label: "Business", value: "Business" },
    { label: "Programming", value: "Programming" },
    { label: "Python", value: "Python" },
    { label: "JavaScript", value: "JavaScript" },
    { label: "others", value: "others" },
  ];

  const gradeLevelValues = [
    { label: "Kindergarten", value: "Kindergarten" },
    { label: "Elementary", value: "Elementary" },
    { label: "Middle School", value: "Middle School" },
    { label: "High School", value: "High School" },
    { label: "College", value: "College" },
  ];

  return (
    <>
      <div className="w-full max-w-sm">
        <form onChange={formOnChageHandler} onSubmit={fromOnSubmitHandler} className="border border-midnight-blue-700 shadow-md  px-20 pt-16 pb-10 mb-6 rounded-md">
          <h1 className="text-white pb-6 font-light text-xl">Tuition Info</h1>
          <div className="mb-2">
            <label
              className=" text-white text-md font-light mb-2"
              htmlFor="priceRate"
            >
              Price Rate per Hour:
            </label>
            <input
              className="bg-transparent placeholder-gray-300 border border-midnight-blue-800 rounded-md w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
              type="number"
              id="priceRate"
              name="priceRate"
              value={formData.priceRate}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2">
            <label className=" text-white text-md font-light mb-2">
              Grade Level:
            </label>
            <div>
              <MultiSelect
                options={gradeLevelValues}
                onChange={handleGradeOnchange}
                // selected={selectedGrades}
                // disableSearch
                // isOpen={false} // Dropdown initially closed
                // showArrow
                // label="label"
                // value="value"
              />
            </div>
          </div>

          <div className="mb-2">
            <label className=" text-white text-md font-light mb-2">
              Courses:
            </label>
            <div>
              <MultiSelect onChange={handleOnchange} options={courseValues} />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Step2;
// {
//   /* <div className="mb-2">
//           <label
//              className=" text-white text-md font-light mb-2"
//             htmlFor="gradeLevel"
//           >
//             Grade Level:
//           </label>
//           <input
//             className="bg-transparent placeholder-gray-300 border border-midnight-blue-800 rounded-md w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
//             type="text"
//             id="gradeLevel"
//             name="gradeLevel"
//             value={gradeLevel}
//             onChange={handleChange}
//           />
//         </div> */
// }
{
  /*  <label className="inline-flex items-center text-white">
              <input
                type="checkbox"
                name="gradeLevel"
                value="Kindergarten"
                checked={gradeLevel.includes("Kindergarten")}
                onChange={handleCheckboxChange}
                className=" form-checkbox bg-transparent h-5 w-5 focus:ring-2 focus:ring-blue-400 checked:text-black"
              />
              <span className="ml-2">Kindergarten</span>
            </label>

            <label className="inline-flex items-center text-gray-400">
              <input
                type="checkbox"
                name="gradeLevel"
                value="Elementary"
                checked={gradeLevel.includes("Elementary")}
                onChange={handleCheckboxChange}
                className=" form-checkbox bg-transparent h-5 w-5 focus:ring-2 focus:ring-blue-400 checked:text-black"
              />
              <span className="ml-2">Elementary</span>
            </label>

            <label className="inline-flex items-center text-gray-400">
              <input
                type="checkbox"
                name="gradeLevel"
                value="Middle School"
                checked={gradeLevel.includes("Middle School")}
                onChange={handleCheckboxChange}
                className=" form-checkbox bg-transparent h-5 w-5 focus:ring-2 focus:ring-blue-400 checked:text-black"
              />
              <span className="ml-2">Middle School</span>
            </label>

            <label className="inline-flex items-center text-gray-400">
              <input
                type="checkbox"
                name="gradeLevel"
                value="High School"
                checked={gradeLevel.includes("High School")}
                onChange={handleCheckboxChange}
                className=" form-checkbox bg-transparent h-5 w-5 focus:ring-2 focus:ring-blue-400 checked:text-black"
              />
              <span className="ml-2">High School</span>
            </label>

            <label className="inline-flex items-center text-gray-400">
              <input
                type="checkbox"
                name="gradeLevel"
                value="College"
                checked={gradeLevel.includes("College")}
                onChange={handleCheckboxChange}
                className=" form-checkbox bg-transparent h-5 w-5 focus:ring-2 focus:ring-blue-400 checked:text-black"
              />
              <span className="ml-2">College</span>
            </label> */
}
{
  /* <label
            className=" text-white text-md font-light mb-2"
            htmlFor="courses"
          >
            Courses:
          </label>
          <input
            className="bg-transparent placeholder-gray-300 border border-midnight-blue-800 rounded-md w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="courses"
            name="courses"
            value={courses}
            onChange={handleChange}
          /> */
}
