import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation, useParams } from "react-router-dom";
// import { useAuthContext } from "../../hooks/useAuthContext";
import forgotpassword from "../../images/forgotpassword.jpg";
import axios from "axios";

const ResetPassword = () => {
    const navigate = useNavigate();
    const [password, setPassword] = useState("");
    const { id, token } = useParams()
    
    // axios.defaults.withCredentials = true;
     const handleSubmit = (e) => {
       e.preventDefault();
       
       axios
         .post(`http://127.0.0.1:4002/resetPassword/${id}/${token}`, { password })
         .then((res) => {
           if (res.data.Status === "Success") {
             navigate("/login");
           }
         })
         .catch((err) => console.log(err));
     };
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl  rounded-2xl md:flex-row md:space-y-0">
          {/* <!-- left side --> */}
          <div className="flex flex-col justify-center p-2 md:p-14">
            <span className=" text-4xl font-light">Reset Password</span>
            <span className="font-light text-cyan-700 mb-4">
              Please enter New Password
            </span>

            <form onSubmit={handleSubmit}>
              <div className="py-4">
                <input
                  type="password"
                  placeholder="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-2 border border-cyan-700 rounded-md placeholder:font-light placeholder:text-gray-500"
                />{" "}
              </div>

              <button type="submit" className="w-full bg-cyan-600 text-white p-2 rounded-lg mb-2 mt-2 hover:text-white hover:border hover:bg-cyan-400">
                Reset
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
    );
};

export default ResetPassword;
