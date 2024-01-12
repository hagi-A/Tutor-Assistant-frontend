import React, { useState, useEffect } from "react";
import { useTutorLogin } from "../../hooks/useTutorLogin";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useTutorContext } from "../../hooks/useTutorContext";
import { FaGoogle } from "react-icons/fa6";
import loginImage from "../../images/loginImage.jpg";
// import PasswordResetModal from "./ForgotPasswordModal";
import "react-toastify/dist/ReactToastify.css";
import { showToast } from "../../utils/toastUtils";
import axios from "axios";

const TutorLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  //   const [username, setUserName] = useState("");
  //   const [email, setEmail] = useState("");
  const [emailOrUsername, setEmailOrUsername] = useState("");
  const [password, setPassword] = useState("");
  const { tutorlogin, error, isLoading } = useTutorLogin();
  const { tutor } = useTutorContext();
  const [err, setErr] = useState("");
  // const selectedRole = "ggggggg";
  const [selectedRole, setSelectedRole] = useState(""); // Default role is empty
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const projectID = "d3cdd6b5-ceeb-4609-b4d2-3442228d8ae6";
  // const openModal = () => {
  //   setIsModalOpen(true);
  // };

  // const closeModal = () => {
  //   setIsModalOpen(false);
  // };

  //   useEffect(() => {
  //     const searchParams = new URLSearchParams(location.search);
  //     const role = searchParams.get("role");

  //     if (role === "Tutor") {
  //       setSelectedRole("Tutor");
  //     } else {
  //       setSelectedRole(""); // Set the role to empty for all other cases
  //     }
  //   }, [location.search]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await tutorlogin(emailOrUsername, password);

      navigate("/tutor");
      showToast("Login successful", "success");
    } catch (error) {
      console.error(error);
      showToast(error, "error");
    }

    // console.log("EEEEEEEEE");
    // console.log(localStorage.getItem("tutor"));
    // console.log("EEEEEEEEE");
    // await login(username, email, password);
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl  rounded-2xl md:flex-row md:space-y-0">
          {/* <!-- left side --> */}
          <div className="flex flex-col justify-center p-2 md:p-14">
            <span className=" text-4xl font-light">Welcome back Tutor</span>
            <span className="font-light text-violet-300 mb-4">
              Welcom back! Please enter your details
            </span>

            <form onSubmit={handleSubmit}>
              <div className="py-2 mt-2">
                <label>
                  <span className="mb-2 text-md  font-light">
                    User Name/Email:{" "}
                  </span>
                </label>
                <input
                  type="text"
                  onChange={(e) => setEmailOrUsername(e.target.value)}
                  value={emailOrUsername}
                  className="w-full p-2 border border-violet-400 rounded-md placeholder:font-light placeholder:text-gray-500"
                />
              </div>
              <div className="py-4">
                <label>
                  <span className="mb-2 text-md font-light">Password:</span>
                </label>
                <input
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  className="w-full p-2 border  border-violet-400 rounded-md placeholder:font-light placeholder:text-gray-500"
                />
              </div>

              <Link
                to={"/tutorForgotPassword"}
                className="text-cyan-700 font-light float-right hover:text-cyan-400"
              >
                Forgot Password
              </Link>

              <button
                disabled={isLoading}
                className="w-full bg-cyan-600 text-white p-2 rounded-lg mb-2 mt-2 hover:text-white hover:border hover:bg-cyan-400"
              >
                Login
              </button>
              {error && <div className="error">{error}</div>}
              {err && <div className="error">{err}</div>}
              <div class="text-center text-gray-400 mb-0">
                Dont'have an account?
                <Link to="/signup" className="font-bold text-black">
                  Sign up
                </Link>
                {/* <span class="font-bold text-black">Sign up for free</span> */}
              </div>
            </form>
            {/* right side */}
          </div>
          <div className="relative">
            <img
              src={loginImage}
              alt="img"
              class="w-[400px] h-full hidden rounded-r-2xl md:block object-cover"
            />
            {/* <!-- text on image  --> */}
            {/* <div
            class="absolute hidden bottom-10 right-6 p-6 bg-white bg-opacity-30 backdrop-blur-sm rounded drop-shadow-lg md:block"
          >
            <span class="text-white text-xl"
              >We've been uesing Untitle to kick"<br />start every new project
              and can't <br />imagine working without it."
            </span>
          </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default TutorLogin;
