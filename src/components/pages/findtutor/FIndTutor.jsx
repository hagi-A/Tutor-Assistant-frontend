import React, { useState } from "react";
import "./findtutor.css";
import Header from "../../common/heading/Header";
// import Title from "../common/title/Title";
// import { FaArrowRight } from "react-icons/fa";
import AvailableTutors from "./AvailableTutors";
import FindTutorNote from "./FindTutorNote.";
import SearchBar from "./SearchBar"; // Import the SearchBar component
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Dashboard from "../../chatPage/components/Dashboard";
import { FaComment } from "react-icons/fa";
import Chat from "../../Chat/TutorChat";

function FindTutor() {
  const [searchResults, setSearchResults] = useState([]);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const navigate = useNavigate();

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
    // Directly navigate to the Dashboard component
    // navigate("/chatPage");
  };
  const closeChat = () => {
    setIsChatOpen(false);
    // navigate("/findTutor");
  };

  const handleSelectUser = (userId) => {
    // Use the selected user's ID to send a notification
    const notificationData = {
      title: "New Notification",
      message: "You have a new notification from a user.",
      userId: userId, // The selected user's ID
    };

    // Make an API request to create and send the notification
    axios
      .post("/api/notifications", notificationData)
      .then((response) => {
        // Handle success (e.g., show a success message)
        console.log("Notification created and sent:", response.data);
      })
      .catch((error) => {
        // Handle errors (e.g., show an error message)
        console.error("Error creating and sending the notification:", error);
      });
  };

  // const handleSearch = (query) => {
  //   // Implement your search logic here and update the search results state
  //   // For example, fetch data from an API or filter local data
  //   setSearchResults(/* Search results based on the query */);
  // };

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
              {/* // eslint-disable-next-line no-undef */}
              {/* <SearchBar onSelectUser={handleSelectUser} /> */}
              {/* <Title  title='"EMPOWERING LEARNING BEYOND THE CLASSROOM"'/> */}
              {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste necessitatibus dolorum pariatur, repellat aperiam sequi eos magni facere sunt, 
                distinctio sapiente quasi fugiat illum quia nulla laborum doloremque, expedita nam.</p> */}
              {/* <div className=" mt-40"> 
                  <button className='primary-btn'>GET STARTED NOW <FaArrowRight /></button>
                  <button>Find a Tutor NOW <FaArrowRight /></button>
                </div> */}
            </div>
          </div>
          <Link
            to={signupURL}
            className=" ml-20 cursor-pointer font-sans border border-cyan-800 text-white bg-transparent rounded-full font-light text-2xl md:text-sm tracking-wide md:px-9 px-7 py-3"
          >
            <button>Find Tutor Now</button>
          </Link>
        </section>
        <div className="flex justify-end">
          <button
            className="bg-cyan-700 w-16  float-right text-white rounded-full p-2 fixed bottom-4 right-4"
            onClick={toggleChat}
          >
            <FaComment className="text-3xl text-teal-200 flex justify-center" />
          </button>
          {/* <Dashboard
            isOpen={isChatOpen}
            toggleChat={toggleChat}
            closeChat={closeChat}
          /> */}
          {/* {isChatOpen && <Dashboard toggleChat={toggleChat} />}
          <Dashboard isOpen={isChatOpen} toggleChat={toggleChat} /> */}
          {isChatOpen && <Chat toggleChat={toggleChat} />}
          <Chat isOpen={isChatOpen} toggleChat={toggleChat} />
        </div>
        <div className="">
          <FindTutorNote />
          <AvailableTutors />\
        </div>
      </section>
    </>
  );
}

export default FindTutor;
//bg-center bg-cover bg-no-repeat h-screen flex items-center justify-center
