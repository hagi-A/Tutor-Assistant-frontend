import React, { useState, useEffect } from "react";
import { useLogin } from "../../hooks/useLogin";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import { FaGoogle } from "react-icons/fa6";
import loginImage from "../../images/loginImage.jpg";
// import PasswordResetModal from "./ForgotPasswordModal";
import "react-toastify/dist/ReactToastify.css";
import { showToast } from "../../utils/toastUtils";


const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();
  const { user } = useAuthContext();
  // const selectedRole = "ggggggg";
  const [selectedRole, setSelectedRole] = useState(""); // Default role is empty
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const role = searchParams.get("role");

    if (role === "Tutor") {
      setSelectedRole("Tutor");
    } else {
      setSelectedRole(""); // Set the role to empty for all other cases
    }
  }, [location.search]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await login(username, email, password);

      const response = await fetch("/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
        
      });
      const data = await response.json();

      const token = data.token;
      localStorage.setItem("token", token);
      const role = data.selectedRole;
      // console.log(data)

     
      
      if (role === "Parent") {
        navigate("/parent");
      }
      // else if (role === "Admin") {
      //   navigate("/admin");

      // }
      else if (role === "Tutor") {
        navigate("/tutorRegistration");
      } else if (role === "Student") {
        console.log("tt isin");
        navigate("/student");
      }
      // else if (role === "Supervisor") {

      //   navigate("/supervisor");

      // }
    } catch (error) {
      console.error(error);
      showToast(error, "error");
    }
 showToast("Login successful", "success");
    // await login(username, email, password);
  };

  return (
    <>
      {/* <nav className="flex justify-end  bg-opacity-20">
        {!user && (
          <div >
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign up</Link>
          </div>
        )}
      </nav> */}
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl  rounded-2xl md:flex-row md:space-y-0">
          {/* <!-- left side --> */}
          <div className="flex flex-col justify-center p-2 md:p-14">
            <span className=" text-4xl font-light">Welcome back</span>
            <span className="font-light text-violet-300 mb-4">
              Welcom back! Please enter your details
            </span>

            <form onSubmit={handleSubmit}>
              <div className="py-2 mt-2">
                <label>
                  <span className="mb-2 text-md  font-light">User Name: </span>
                </label>
                <input
                  type="text"
                  onChange={(e) => setUserName(e.target.value)}
                  value={username}
                  className="w-full p-2 border border-violet-400 rounded-md placeholder:font-light placeholder:text-gray-500"
                />
              </div>
              <div className="py-4">
                <label>
                  <span className="mb-2 text-md font-light">Email: </span>
                </label>
                <input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
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
              {/* <div class="flex justify-between w-full py-4">
                <span class="font-bold text-md">Forgot password</span>
              </div> */}

              {/* <button
                onClick={openModal}
                type="button"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full float-right"
              >
                Forgot Password
              </button>
              <PasswordResetModal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
              /> */}
              <Link
                to={"/forgotPassword"}
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
              <button className="w-full bg-gradient-to-r from-blue-500 to-green-400 text-white text-md p-2 rounded-lg mb-2 hover:bg-violet-400 hover:text-white">
                <FaGoogle className="w-6 h-6 inline mr-2" />
                Sign in with Google
              </button>
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

export default Login;
