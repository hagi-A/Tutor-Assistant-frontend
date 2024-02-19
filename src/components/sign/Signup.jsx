import { useState, useEffect } from "react";
import { useSignup } from "../../hooks/useSignup";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import { FaGoogle } from "react-icons/fa6";
import loginImage from "../../images/loginImage.jpg";
import "react-toastify/dist/ReactToastify.css";
import { showToast } from "../../utils/toastUtils";

const Signup = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialRole = queryParams.get("role");
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [password, setPassword] = useState("");
  const { signup, error, isLoading } = useSignup();
  const { user } = useAuthContext();
  const [selectedRole, setSelectedRole] = useState(initialRole || ""); // Initialize with the provided role

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(
        firstName,
        lastName,
        email,
        birthdate,
        password,
        selectedRole
    );
          if (error != null) {
            if (selectedRole === "Parent") {
              navigate("/parent");
            } else if (selectedRole === "Student") {
              console.log("tt is in");
              navigate("/student");
            }
            showToast("Signup successful", "success");
            // console.log(response.json());
          }
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="relative flex flex-col m-6 mt-2 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
          {/* <!-- left side --> */}
          <div className="flex flex-col justify-center p-2 md:p-14">
            <span class=" text-4xl font-light">Hello!</span>
            <span class="font-light text-violet-300 mb-4">
              Please enter your details
            </span>

            <form onSubmit={handleSubmit}>
              <div className="py-2  mb-2">
                <label>
                  <span className="mb-2 text-md font-light">First Name: </span>
                </label>
                <input
                  type="text"
                  onChange={(e) => setFirstName(e.target.value)}
                  value={firstName}
                  className="w-full p-2 border border-violet-400 rounded-md placeholder:font-light placeholder:text-gray-500"
                />
              </div>
              <div className="py-2  mb-2">
                <label>
                  <span className="mb-2 text-md font-light">Last Name: </span>
                </label>
                <input
                  type="text"
                  onChange={(e) => setLastName(e.target.value)}
                  value={lastName}
                  className="w-full p-2 border border-violet-400 rounded-md placeholder:font-light placeholder:text-gray-500"
                />
              </div>
              <div className="py-4 mb-2">
                <label>
                  <span className="mb-2 text-md font-light">Email: </span>
                </label>
                <input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className="w-full p-2 border  border-violet-400 rounded-md placeholder:font-light placeholder:text-gray-500"
                />
              </div>
              <div className="py-4 mb-2">
                <label>
                  <span className="mb-2 text-md font-light">Birth Date: </span>
                </label>
                <input
                  type="date"
                  onChange={(e) => setBirthdate(e.target.value)}
                  value={birthdate}
                  className="w-full p-2 border  border-violet-400 rounded-md placeholder:font-light placeholder:text-gray-500"
                />
              </div>
              <div className="py-4 mb-2">
                <label>
                  <span className="mb-2 text-md font-light">Password:</span>
                </label>
                <input
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  className="w-full p-2 border border-violet-400 rounded-md placeholder:font-light placeholder:text-gray-500"
                />
              </div>
              <div className="py-4 mb-2">
                <label>
                  <span className="mb-2 text-md font-light">Role:</span>
                </label>
                <select
                  value={selectedRole}
                  onChange={(e) => setSelectedRole(e.target.value)}
                  className="w-full p-2 border border-violet-400 rounded-md focus:ring focus:ring-blue-400"
                >
                  <option value="">Select Role</option>
                  <option value="Student">Student</option>
                  <option value="Parent">Parent</option>
                </select>
              </div>
              <button
                disabled={isLoading}
                className="w-full bg-cyan-600 text-white p-2 rounded-lg mb-2 mt-2 hover:text-white hover:border hover:bg-cyan-400"
              >
                Sign Up
              </button>

              {error && <div className="error">{error}</div>}

              <div class="text-center text-gray-400 mb-2">
                Already Have An Account?
                <Link to="/login" className="font-bold text-black">
                  Log In
                </Link>
              </div>
            </form>
            {/* right side */}
          </div>
          <div class="relative">
            <img
              src={loginImage}
              alt="img"
              class="w-[400px] h-full hidden rounded-r-2xl md:block object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
{
  /* <select
                  value={selectedRole}
                  onChange={(e) => setSelectedRole(e.target.value)}
                  className="w-full p-2 border border-violet-400 rounded-md focus:ring focus:ring-blue-400"
                >
                  {selectedRole === "Tutor" ? (
                    <option value="Tutor">Tutor</option>
                  ) : (
                    <>
                      <option value="Student">Student</option>
                      <option value="Parent">Parent</option>
                    </>
                  )}
                </select> */
}
 {
   /* <!-- text on image  --> */
 }
 {
   /* <div
            class="absolute hidden bottom-10 right-6 p-6 bg-white bg-opacity-30 backdrop-blur-sm rounded drop-shadow-lg md:block"
          >
            <span class="text-white text-xl"
              >We've been uesing Untitle to kick"<br />start every new project
              and can't <br />imagine working without it."
            </span>
          </div> */
 }