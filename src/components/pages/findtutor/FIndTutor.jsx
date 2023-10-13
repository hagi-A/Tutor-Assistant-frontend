import React, { useState } from "react";
import "./findtutor.css";
import Header from "../../common/heading/Header";
// import Title from "../common/title/Title";
// import { FaArrowRight } from "react-icons/fa";
import AvailableTutors from "./AvailableTutors";
import FindTutorNote from "./FindTutorNote.";
import SearchBar from "./SearchBar"; // Import the SearchBar component
import { Link } from "react-router-dom";

const FindTutor = () => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (query) => {
    // Implement your search logic here and update the search results state
    // For example, fetch data from an API or filter local data
    setSearchResults(/* Search results based on the query */);
  };

  // Determine the desired role based on some condition
  const isParent = true; // Change this condition as needed

  // Generate the URL with the appropriate role query parameter
  const signupURL = isParent ? "/signup?role=Parent" : "/signup?role=Student";

  return (
    <>
      {/* <Back/> */}

      <section className="bg-image bg-cover bg-fixed h-screen bg-no-repeat ">
        <Header />
        <section className="bg-cover bg-fixed  top-0 left-0 z-0 w-full h-screen pt-20 pr-50 text-white">
          <div className="container">
            <div>
              <SearchBar onSearch={handleSearch} />
              {/* <Title  title='"EMPOWERING LEARNING BEYOND THE CLASSROOM"'/> */}
              {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste necessitatibus dolorum pariatur, repellat aperiam sequi eos magni facere sunt, 
                distinctio sapiente quasi fugiat illum quia nulla laborum doloremque, expedita nam.</p> */}
              {/* <div className=" mt-40"> 
                  <button className='primary-btn'>GET STARTED NOW <FaArrowRight /></button>
                  <button>Find a Tutor NOW <FaArrowRight /></button>
                </div> */}
            </div>
          </div>
          <Link to={signupURL}>
            <button>Find Tutor Now</button>
          </Link>
        </section>
      </section>
      <div className="mt-9">
        <FindTutorNote />
        <AvailableTutors />
      </div>
    </>
  );
};

export default FindTutor;
//bg-center bg-cover bg-no-repeat h-screen flex items-center justify-center
