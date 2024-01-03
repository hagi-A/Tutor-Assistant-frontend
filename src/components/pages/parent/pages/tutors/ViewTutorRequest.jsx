import React, {useState, useEffect} from 'react'
import Sidebar from "../../sidebar/Sidebar";
import { FaEnvelope, FaRegBell, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../../../hooks/useAuthContext";
import axios from 'axios'
import Breadcrumb from '../../../../utils/Breadcrumb';
import { IoIosAddCircleOutline } from 'react-icons/io';
import BackButton from '../../../../utils/BackButton';
const ViewTutorRequest = () => {
  // const { user } = useAuthContext();
  const { user } = useAuthContext();
  // const [tutors, setTutors] = useState([]);
  const [post, setPost] = useState([]);
  const [tutorRequests, setTutorRequests] = useState([]);
  // const [userId, setUserId] = useState(""); // Set the actual user ID

  // const userId = user.user._id; // Assuming user.user._id is accessible
  // fetch(`/api/tutorRequest/viewTutorRequest/${userId}`)
  //   .then((response) => response.json())
  //   .then((data) => {
  //     const tutorRequests = data.tutorRequests;
  //     // Handle tutorRequests as needed in your frontend
  //     console.log(tutorRequests);
  //   })
  //   .catch((error) => {
  //     console.error("Error fetching tutor requests:", error);
  //   });

  useEffect(() => {
    const fetchTutorRequests = async () => {
      try {
        const userId = user ? user.user._id : null;
        // console.log("User ID:", userId);  // Assuming user.user._id is accessible
        const response = await fetch(
          `/api/tutorRequest/viewTutorRequests/${userId}`
        );
        const data = await response.json();

        setTutorRequests(data.tutorRequests || []); // Set tutor requests to an empty array if undefined
      } catch (error) {
        console.error("Error fetching tutor requests:", error);
      }
    };

    fetchTutorRequests();
  }, []); // Run effect only once on mount

  // const userId = user ? user.user._id : null;
  // useEffect(() => {
  //   // Fetch tutor requests when the component mounts
  //   const fetchPosts = async () => {
  //     try {
  //       const response = await axios.get("/api/tutorRequest/viewTutorRequests");
  //       setPost(response.data);
  //     } catch (error) {
  //       console.error("Error fetching posts for tutor requests:", error);
  //     }
  //   };

  //   fetchPosts();
  // }, []);

  // Filter posts based on the user ID
  // const userPosts = post.filter((userPost) => userPost.Creator === userId);
  // console.log(userPosts);

  // const [tutors, setTutors] = useState([]);

  // const fetchTutors = async () => {
  //     try {
  //         const response = await axios.get("/getTutors");
  //         setTutors(response.data);
  //     } catch (error) {
  //         console.error("Error fetching tutors:", error);
  //     }
  // };
  // useEffect(() => {
  //     fetchTutors();
  // }, []);
  return (
    <>
      <div className="flex">
        <div className="basis-[12%] h-[100vh]">
          <Sidebar />
        </div>
        <div className="basis-[88%]  border h-[100vh] overflow-scroll">
          <div className="flex items-center justify-between h-[70px] shadow-lg px-6">
            <div className="flex items-center rounded-sm ">
              <input
                type="text"
                className="bg-white h-10 border border-[#745B83] outline-none pl-3 w-[350px] rounded-md placeholder:text-sm leading-5 font-normal"
                placeholder="Search for ..."
              />
              <div className="bg-[#A98DB8] h-10 px-3 flex items-center justify-center cursor-pointer rounded-tr-[5px] rounded-br-[5px]">
                <FaSearch color="white" />
              </div>
            </div>
            <div className="flex items-center gap-4 relative">
              <div className="flex items-center gap-6 border-r-2 border-cyan-900 pr-6">
                <FaRegBell />
                <FaEnvelope />
              </div>
              <div className="flex items-center gap-4 relative">
                {user && (
                  <>
                    <p>
                      {user.user.firstName} {user.user.lastName}
                    </p>
                    <div className="h-[50px] w-[50px] rounded-full bg-cyan-800 cursor-pointer flex items-center justify-center relative ">
                      <Link to="/profilePage">
                        <img
                          // src={`http://localhost:9999/api/files/images/${user.selectedImages}`}
                          // alt=""
                          className="h-[50px] w-[50px] rounded-full bg-cyan-800 cursor-pointer flex items-center justify-center relative "
                        />
                      </Link>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className=" pt-6 px-6 min-h-screen bg-slate-200 ">
            <div className="flex justify-between">
              <Breadcrumb pageName="Tutors /" subPageName="View Tutor Request" />
              {/* <button className="flex justify-between border border-[#745B83] text-white text-lg font-light bg-[#745B83] p-2 rounded-full ">
                                <IoIosAddCircleOutline className="text-2xl mr-2" />
                                <Link to={`/`}>Add Tutor</Link>
                            </button> */}
              <BackButton />
            </div>
            <div className="w-30 mt-6 p-4 bg-slate-100 rounded-md border border-[#745B83]">
              <div className="flex flex-col mt-8">
                {tutorRequests.length > 0 ? (
                  tutorRequests.map((tutorRequest) => (
                    <div
                      key={tutorRequest._id}
                      className="p-4 mb-4 border border-[#745B83] rounded-md"
                    >
                      <h3 className="text-lg font-semibold">{`Gender: ${tutorRequest.gender}`}</h3>
                      <p className="text-lg font-semibold">{`Grade: ${tutorRequest.grade}`}</p>
                      <p className="text-lg font-semibold">{`Courses: ${tutorRequest.courses.join(
                        ", "
                      )}`}</p>
                      <p className="text-lg font-semibold">{`Profession: ${tutorRequest.profession}`}</p>
                    </div>
                  ))
                ) : (
                  <p>No tutor requests available.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


export default ViewTutorRequest;