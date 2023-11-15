import React, { useState, useEffect } from "react";
import { useLogin } from "../../hooks/useLogin";
import { Link, useNavigate, useLocation } from "react-router-dom";
// import { useAuthContext } from "../../hooks/useAuthContext";
import forgotpassword from "../../images/forgotpassword.jpg";
import axios from "axios";

import "react-toastify/dist/ReactToastify.css";
import { showToast } from "../../utils/toastUtils";

const TutorForgotPassword = () => {
  const navigate = useNavigate();
  //   const location = useLocation();
  //   const [username, setUserName] = useState("");
  //   const [password, setPassword] = useState("");
  //   const { login, error, isLoading } = useLogin();
  //   const { user } = useAuthContext();
  // const selectedRole = "ggggggg";
  //   const [selectedRole, setSelectedRole] = useState(""); // Default role is empty
  //   const [isModalOpen, setIsModalOpen] = useState(false);

  //   useEffect(() => {
  //     const searchParams = new URLSearchParams(location.search);
  //     const role = searchParams.get("role");

  //     if (role === "Tutor") {
  //       setSelectedRole("Tutor");
  //     } else {
  //       setSelectedRole(""); // Set the role to empty for all other cases
  //     }
  //   }, [location.search]);

  const [email, setEmail] = useState("");
  //   const [message, setMessage] = useState("");

  //   const [resetRequested, setResetRequested] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://127.0.0.1:9999/tutorForgotPassword", { email })
      .then((res) => {
        if (res.data.Status === "Success") {
        //   navigate("/tutorlogin");
          showToast("Reset Password Link sent Via Email Successfully", "info");
        }
      })
      .catch((err) => {
        console.log(err);
        showToast("Error Occured sending Link", "error");
      });
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
            <span className=" text-4xl font-light">Tutor Forgot Password</span>
            <span className="font-light text-cyan-700 mb-4">
              Please enter Your Email to Reset Password
            </span>

            <form onSubmit={handleSubmit}>
              <div className="py-4">
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2 border border-cyan-700 rounded-md placeholder:font-light placeholder:text-gray-500"
                />{" "}
              </div>

              <button className="w-full bg-cyan-600 text-white p-2 rounded-lg mb-2 mt-2 hover:text-white hover:border hover:bg-cyan-400">
                Send
              </button>
              {/* {error && <div className="error text-black">{error}</div>} */}
            </form>
            {/* right side */}
          </div>
          <div className="relative">
            <img
              src={forgotpassword}
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

export default TutorForgotPassword;
