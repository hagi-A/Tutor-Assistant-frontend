import React, { useState, useEffect } from "react";
import Sidebar from "../../dashboard/Sidebar";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../../../../hooks/useAuthContext";
import axios from "axios";
import Breadcrumb from "../../../../../utils/Breadcrumb";
import { MdPostAdd } from "react-icons/md";
import { SiCodereview } from "react-icons/si";
// import noData from "../../../../images/noData.jpg";
// import PostModal from "./TutorRequestForm";
// import TutorRequestForm from "./TutorRequestForm";
import BackButton from "../../../../../utils/BackButton";
import Dashboard from "../../dashboard/Dashboard";
// import AvailableModal from "./AvailableModal";
const Tutors = () => {
  const { user } = useAuthContext();
  const [tutors, setTutors] = useState([]);
  const [post, setPost] = useState([]);

  // useEffect(() => {
  //   // Fetch tutor requests when the component mounts
  //   const fetchPosts = async () => {
  //     try {
  //       const response = await axios.get(
  //         "/api/tutorRequest/viewTutorRequests"
  //       );
  //       setPost(response.data);
  //     } catch (error) {
  //       console.error("Error fetching posts for tutor requests:", error);
  //     }
  //   };

  //   fetchPosts();
  // }, []);

  const userId = user ? user.user._id : null;

  const fetchTutors = async () => {
    try {
      const response = await axios.get("/getTutors");
      setTutors(response.data);
    } catch (error) {
      console.error("Error fetching tutors:", error);
    }
  };
  useEffect(() => {
    fetchTutors();
  }, []);

  // const [data, setData] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div className="flex">
        <div className="basis-[12%] h-[100vh]">
          <Sidebar />
        </div>
        <div className="basis-[88%]  border h-[100vh] overflow-scroll">
          <Dashboard />
          <div className=" pt-6 px-6 min-h-screen bg-slate-200 ">
            <div className="flex justify-between">
              <Breadcrumb pageName="Tutors" />
              <div className="flex justify-between">
                <button
                // onClick={openModal}
                >
                  <Link
                    to={"/parentTutorRequestForm"}
                    className="flex justify-between border border-[#29644c] text-white text-lg font-light bg-[#29644c] p-2 rounded-full "
                  >
                    <MdPostAdd className="text-2xl mr-2" />
                    Post Request
                  </Link>
                </button>
                <button
                  // onClick={openModal}
                  className="ml-5"
                >
                  <Link
                    to={`/viewTutorRequests/${userId}`}
                    // to={"/viewTutorRequests"}
                    className="flex justify-between  border border-[#29644c] text-white text-lg font-light bg-[#29644c] p-2 rounded-full "
                  >
                    <SiCodereview className="text-2xl mr-2" />
                    View Request
                  </Link>
                </button>
                <BackButton />
              </div>
            </div>

            <div className="flex">
              <div className="w-70">
                <section className=" md:px-5  min-h-screen flex flex-col-3 ">
                  <div className=" max-w-full w-full">
                    <div className="p-3  lg:flex lg:flex-wrap md:flex lg:justify-between rounded-lg flex  justify-center items-center">
                      {tutors &&
                        tutors.map((tutor) => (
                          <div
                            key={tutor._id}
                            className=" lg:w-1/4 w-full p-8  justify-center transition duration-300 "
                          >
                            <Link to={"/classroom"}>
                              <div className="p-4  rounded-lg bg-slate-50 border hover:border-[#745B83]">
                                <div className="flex justify-between mb-4 ">
                                  <img
                                    src={`http://localhost:9999/api/files/images/${tutor.selectedImages}`}
                                    alt={tutor.firstName}
                                    className="h-16 w-16 rounded-full bg-gray-500"
                                  />
                                  <h3 className="text-2xl lg:text-3xl font-light text-center lg:leading-9">
                                    {tutor.firstName} {tutor.lastName}
                                  </h3>
                                  {/* <h4 className="text-sm lg:text-base font-light leading-5 text-center">
                                <div className="relative">
                                  <FaRegBell />

                                  {tutors.map((tutor) =>
                                    tutor.sentRequest ? (
                                      <div
                                        key={tutor._id}
                                        className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center"
                                      >
                                        {tutor.notificationCount > 0 &&
                                          tutor.notificationCount}
                                      </div>
                                    ) : null
                                  )}
                                </div>
                              </h4> */}
                                </div>
                                <p className="text-sm lg:text-base">
                                  {tutor.profession}
                                </p>
                                <button className="bg-[#29644c] text-white rounded-lg w-full h-10 mt-4 cursor-pointer transition duration-300 hover:bg-transparent border  hover:border-[#29644c] hover:text-[#29644c]">
                                  <Link to={""}>View Tutor</Link>
                                </button>
                              </div>
                            </Link>
                          </div>
                        ))}{" "}
                    </div>
                  </div>
                </section>
              </div>
              {/* <div className="w-30 mt-10 p-4 bg-slate-100 rounded-md border border-[#745B83]">
                <div className="flex flex-col  mt-8">
                  {post.length > 0 ? (
                    post.map((posts) => (
                      <div
                        key={posts._id}
                        className="p-4 mb-4 border border-[#745B83] rounded-md"
                      >
                        <h3 className="text-lg font-semibold ">{`Gender: ${posts.gender}`}</h3>
                        <p className="text-lg font-semibold ">{`Grade: ${posts.grade}`}</p>
                        <p className="text-lg font-semibold ">{`Courses: ${posts.courses.join(
                          ", "
                        )}`}</p>
                        <p className="text-lg font-semibold ">{`Profession: ${posts.profession}`}</p>
                        {/* <p>{`Age Group: ${post.ageGroup}`}</p> */}
              {/* </div>
                    ))
                  ) : (
                    <p>No post for requests available.</p>
                  )}
                </div>
              </div> */}
            </div>

            {/* <div className="flex justify-center items-center mt-48">
              {data ? (
                // Display content when data is available
                <div>
                  {/* Your content here */}
            {/* <img src={noData} alt="Your Image" className="rounded-full" />
                  <p className="text-center">Other data or components</p>
                </div>
              ) : (
                // Display placeholder image when no data is available
                <div>
                  <img
                    src={noData}
                    alt="Placeholder"
                    className="rounded-full w-96 h-96"
                  /> */}
            {/* <p className="text-center text-gray-500">Loading...</p> */}
            {/* </div> */}
            {/* )}
            </div>
            <AvailableModal isOpen={isModalOpen} onClose={closeModal}>
              <h2>This is a Modal</h2>
              <p>Modal content goes here.</p>
            </AvailableModal> */}
          </div>
        </div>
      </div>
      {/* <PostModal isOpen={isModalOpen} onClose={closeModal}>
        <TutorRequestForm />
      </PostModal> */}
    </>
  );
};

export default Tutors;
