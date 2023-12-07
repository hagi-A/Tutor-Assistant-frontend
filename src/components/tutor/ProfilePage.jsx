import React, { useState, useEffect } from "react";
import Sidebar from "./tutorDashboard/Sidebar";
import "./profile.css";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  FaEnvelope,
  FaRegBell,
  FaSearch,
  FaChevronRight,
} from "react-icons/fa";
import { FaRegAddressCard } from "react-icons/fa6";
// import { useTutor } from "../../context/TutorContext";
import { useParams } from "react-router-dom";
import Breadcrumb from "../../utils/Breadcrumb";
import { useTutorContext } from "../../hooks/useTutorContext";

const ProfilePage = () => {
  const { tutor, setTutor } = useTutorContext();

  // console.log(tutor);
  // const [isEditing, setIsEditing] = useState(false);
  // const [profileData, setProfileData] = useState({ ...initialProfileData });
  // const [tutors, setTutors] = useState(null);
  // const { id } = useParams();
  // const { tutor } = useTutorContext();
  useEffect(() => {
    const fetchTutorDetails = async () => {
      try {
        const response = await fetch(`/api/tutor/${tutor._id}`);

        if (!response.ok) {
          throw new Error("Failed to fetch tutor details");
        }

        const tutorDetails = await response.json();
        setTutor(tutorDetails);
      } catch (error) {
        console.error("Error fetching tutor details:", error);
      }
    };

    if (tutor && tutor._id) {
      fetchTutorDetails();
    }
  }, [tutor, setTutor]);

  // useEffect(() => {
  //   axios
  //     .get("/getTutors")
  //     .then((tutor) => setTutors(tutor.data))
  //     .catch((err) => console.log(err));
  // }, []);

  return (
    <>
      <div className="flex">
        <div className="basis-[12%] h-[100vh]">
          <Sidebar />
        </div>
        <div className="basis-[88%] border h-[100vh] overflow-scroll">
          <div className="flex items-center justify-between h-[70px] shadow-lg px-6">
            <div className="flex items-center rounded-sm ">
              <input
                type="text"
                className="bg-white h-10 border border-cyan-500 outline-none pl-3 w-[350px] rounded-md placeholder:text-sm leading-5 font-normal"
                placeholder="Search for ..."
              />
              <div className="bg-cyan-500 h-10 px-3 flex items-center justify-center cursor-pointer rounded-tr-[5px] rounded-br-[5px]">
                <FaSearch color="white" />
              </div>
            </div>
            <div className="flex items-center gap-4 relative">
              <div className="flex items-center gap-6 border-r-2 pr-6">
                <FaRegBell />
                <FaEnvelope />
              </div>
              <div className="flex items-center gap-4 relative">
                {tutor && (
                  <>
                    <p>
                      {tutor.tutor.firstName} {tutor.tutor.lastName}
                    </p>
                    <div>
                        <img
                          src={`http://localhost:9999/api/files/images/${tutor.tutor.selectedImages}`}
                          alt=""
                          className="h-[50px] w-[50px] rounded-full bg-cyan-800 cursor-pointer flex items-center justify-center relative "
                        />
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          {tutor && (
            <>
              {/* {console.log(tutor)} */}
              <div className="group flex justify-between mr-16 mt-5">
                <Breadcrumb pageName="Profile Setting" />
                <button className="border border-cyan-800 text-white font-light bg-cyan-600 p-4 rounded-full ">
                  Enable Edit
                </button>
              </div>
              <div className="flex flex-col md:flex-row gap-3 p-3 h-screen mt-4">
                <div className="basis-[30%] flex-row gap-3">
                  <div className=" w-full bg-slate-100 border border-cyan-900 h-[50%] rounded-lg">
                    <>
                      <div className="font-light text-2xl text-center mt-3  text-cyan-900">
                        {tutor.tutor.firstName} {tutor.tutor.lastName}
                      </div>
                      <div className="flex justify-center">
                        <img
                          src={`http://localhost:9999/api/files/images/${tutor.tutor.selectedImages}`} // Replace with the actual image URL
                          alt={tutor.firstName}
                          className="w-72 h-72 mt-10   object-cover rounded-xl bg-slate-200 p-2 "
                        />
                      </div>
                    </>
                  </div>

                  <div className=" w-full bg-slate-300 h-[29%] border border-cyan-900 mt-3 rounded-lg">
                    <div className="flex gap-[10px] py-[15px] cursor-pointer">
                      <div className="flex ml-5 mt-5 justify-center gap-[10px]">
                        <FaRegAddressCard className="text-cyan-900 text-2xl" />

                        <Link className="text-2xl  leading-[20px] font-light text-cyan-900">
                          Add More Info
                        </Link>
                        <FaChevronRight className="text-cyan-900" />
                      </div>
                    </div>
                    <div className="flex items-center justify-between gap-[10px] py-[15px] cursor-pointer">
                      <div className="flex ml-5 mt-5 items-center gap-[10px]">
                        <FaRegAddressCard className="text-cyan-900 text-2xl" />

                        <Link className="text-2xl  leading-[20px] font-light text-cyan-900">
                          Add More Info
                        </Link>
                        <FaChevronRight className="text-cyan-900" />
                      </div>
                    </div>
                    <div className="flex items-center justify-between gap-[10px] py-[15px] cursor-pointer">
                      <div className="flex ml-5 mt-5 items-center gap-[10px]">
                        <FaRegAddressCard className="text-cyan-900 text-2xl" />

                        <Link className="text-2xl  leading-[20px] font-light text-cyan-900">
                          Add More Info
                        </Link>
                        <FaChevronRight className="text-cyan-900" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="basis-[70%] ">
                  <div className=" w-full bg-slate-100 border border-cyan-900 h-[80%] rounded-lg">
                    <div className="flex justify-center mt-3">
                      <p className="text-2xl font-light text-cyan-950">
                        Personal
                      </p>
                      <span className="text-2xl ml-2 font-bold text-teal-600">
                        Information
                      </span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-7 p-7">
                      <div className="">
                        <label className="text-xl font-light ">
                          First Name:
                        </label>
                        <input
                          id="firstName"
                          value={tutor.tutor.firstName}
                          className="w-full h-[40px] mt-3 text-md font-light rounded-xl border border-cyan-900 "
                        />
                      </div>
                      <div>
                        <label className="text-xl font-light ">
                          Last Name:
                        </label>
                        <input
                          id="lastName"
                          value={tutor.tutor.lastName}
                          className="w-full h-[40px] mt-3 text-md font-light rounded-xl border border-cyan-900 "
                        />
                      </div>
                      <div>
                        <label className="text-xl font-light ">Email:</label>
                        <input
                          id="email"
                          value={tutor.tutor.email}
                          className="w-full h-[40px] mt-3 text-md font-light rounded-xl border border-cyan-900 "
                        />
                      </div>
                      <div>
                        <label className="text-xl font-light">
                          Profession:
                        </label>
                        <input
                          id="profession"
                          value={tutor.tutor.profession}
                          className="w-full h-[40px] mt-3 text-md font-light rounded-xl border border-cyan-900 "
                        />
                      </div>
                      <div>
                        <label className="text-xl mt-5 font-light">
                          Location:
                        </label>
                        <input
                          id="location"
                          value={tutor.tutor.location}
                          className="w-full h-[40px] mt-3 text-md font-light rounded-xl border border-cyan-900 "
                        />
                      </div>
                      <div className="mt-6">
                        <label className="text-xl mt-5 font-light">
                          Phone Number:
                        </label>
                        <input
                          id="phoneNumber"
                          value={tutor.tutor.phoneNumber}
                          className="w-full h-[40px] mt-3 text-md font-light rounded-xl border border-cyan-900 "
                        />
                      </div>
                      <div className="mt-6">
                        <label className="text-xl mt-5 font-light">
                          Major Taken :
                        </label>
                        <input
                          id="majorTaken"
                          value={tutor.tutor.majorTaken}
                          className="w-full h-[40px] mt-3 text-md font-light rounded-xl border border-cyan-900 "
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
