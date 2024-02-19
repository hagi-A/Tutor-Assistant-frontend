import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import axios from "axios";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const SearchBar = () => {
   const { t } = useTranslation();
  const [gender, setGender] = useState("");
  const [gradeLevel, setGradeLevel] = useState("");
//   const [location, setLocation] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchResultsVisible, setSearchResultsVisible] = useState(false);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `/api/search/searchTutor?gender=${gender}&gradeLevel=${gradeLevel}`
      );
      setSearchResults(response.data);
      console.log(searchResults);
      // Show the search results
       setSearchResultsVisible(searchResults && searchResults.length > 0);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-11/12 h-auto md:w-8/12 xl:w-1/2 rounded-3xl border border-cyan-900 bg-white bg-opacity-20 p-5 flex justify-center">
      <div className="flex justify-between">
        <section className="w-full h-10 flex items-center text-black">
          <span className="w-10 h-full flex items-center ">
            <FaSearch className="text-cyan-900" />
          </span>
          <p>{t("filterOutTutor")}</p>
          {/* <input
            type="text"
            className="w-full h-full font-light md:pl-2 border border-cyan-900 ml-2 focus:outline-none bg-white bg-opacity-20" */}
          {/* //   placeholder="User Name . . ."
            //   onChange={(e) => setQuery(e.target.value)}
          /> */}
          {/* <button className="w-28 h-full bg-cyan-900 ml-2 flex justify-center items-center rounded-r-2xl rounded-l-md text-white font-light text-md">
            Search
          </button> */}

          {/* <form className= "p-4 border rounded"> */}
          <div className="flex ml-4 items-center">
            <label className="text-cyan-900 ">{t("gender")}:</label>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="ml-2 p-2 bg-transparent  border border-cyan-900 rounded text-black"
            >
              {/* <option value="">Select</option> */}
              <option value="Male">{t("male")}</option>
              <option value="Female">{t("female")}</option>
              <option value="">{t("bothGender")}</option>
            </select>
          </div>
          <div className="flex ml-4 items-center">
            <label className="ml-4 text-cyan-900">{t("gradeLevel")}:</label>
            <select
              value={gradeLevel}
              onChange={(e) => setGradeLevel(e.target.value)}
              className="ml-2 p-2  bg-transparent  border border-cyan-900 rounded text-black"
            >
              <option value="">Select</option>
              <option value="G1">G1</option>
              <option value="G2">G2</option>
              <option value="G3">G3</option>
              <option value="G4">G4</option>
              <option value="G5">G5</option>
              <option value="G6">G6</option>
              <option value="G7">G7</option>
              <option value="G8">G8</option>
              <option value="G9">G9</option>
              <option value="G10">G10</option>
              <option value="G11">G11</option>
              <option value="G12">G12</option>
              <option value="College">College</option>
            </select>
          </div>
          {/* <label className="ml-4">
          Location:
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="ml-2 p-2 border rounded text-black"
          />
        </label> */}
          <button
            type="button"
            onClick={handleSearch}
            className="w-50 p-5 h-full bg-cyan-900 ml-2 flex justify-center items-center rounded-r-2xl rounded-l-md text-white font-light text-md"
          >
            {t("search")}
          </button>
          {/* </form> */}
          {/* Custom Dropdown */}
          {searchResultsVisible && (
            <div className="relative ml-4">
              {searchResults && (
                <ul className="absolute  bg-slate-50 border border-gray-300 py-1 mt-2 w-72 max-h-72 overflow-y-auto rounded">
                  {searchResults.map((tutor) => (
                    <li
                      key={tutor._id}
                      className="m-4 px-2 py-1 mt-4 rounded border shadow-lg border-cyan-900 text-black"
                    >
                      <Link to={`/tutorProfile/${tutor._id}`}>
                        {/* {tutor.firstName} {tutor.lastName} - Gender:{" "}
                        {tutor.gender}, Grade Level:
                        {tutor.gradeLevel}.split(", ") */}
                        {`${tutor.firstName} ${tutor.lastName} - Gender: ${
                          tutor.gender
                        }, ${" "} 
                        Grade Level: ${tutor.gradeLevel}`.split(", ")}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}

          {/* Display the "No matching results found" message when there are no results */}
          {/* {!searchResultsVisible && (
            <p className="text-gray-500">No matching results found.</p>
          )} */}
        </section>
      </div>
      {/* <div className="relative ml-4"> */}
      {/* <button className="bg-cyan-900 text-white p-2 rounded">
              Select Tutor
            </button> */}

      {/* </div> */}
    </div>
  );
};

export default SearchBar;
