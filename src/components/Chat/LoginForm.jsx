import { useState } from "react";
import axios from "axios";

const projectID = "4c56144b-fd62-47d4-9ea4-95026ef5b201";
const privateKey = "e769123a-3d2e-4dcb-a8c8-9012d625bcb8";

const Modal = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  function getOrCreateUser(callback) {
    axios
      .put(
        "https://api.chatengine.io/users/",
        { username: username, secret: password },
        // { username: email, email: email, secret: email },
        { headers: { "Private-Key": privateKey } }
      )
      .then((r) => callback(r.data))
      .catch((e) => console.log("Get or create user error", e));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = {
      "Project-ID": projectID,
      "User-Name": username,
      "User-Secret": password,
    };

    try {
      //   await axios.get("https://api.chatengine.io/chats", {
      //     headers: authObject,
      //   });
      //   getOrCreateUser(username, password, privateKey, (userData) => {
      //     localStorage.setItem("username", username);
      //     localStorage.setItem("password", password);
      //     window.location.reload();
      //     console.log("User data:", userData);
      //     setError("");
      //   });
      // Call getOrCreateUser and handle the response
       getOrCreateUser(username, password, privateKey, (error, userData) => {
         if (error) {
           console.log("Error creating/getting user:", error);
           setError("Oops, an error occurred.");
         } else {
           //     // User creation was successful, continue with the rest of the logic
           axios.get("https://api.chatengine.io/chats", {
             headers: authObject,
           });
         }
      // getOrCreateUser((user) => {
        // props.setUser && props.setUser(user);
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);

        window.location.reload();
        alert("Successful! Happy Chatting");
        console.log("in try");
        setError("");
      // });

      //
      });
    } catch (err) {
      console.log("in catcheee");
      setError("Oops, incorrect credentials.");
    }
  };

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Login to Chat</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            placeholder="Your Email"
            onChange={(e) => setUsername(e.target.value)}
            className="input"
            // placeholder="Username"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
            placeholder="Password"
            required
          />
          <div align="center">
            <button type="submit" className="button">
              <span>Start chatting</span>
            </button>
          </div>
        </form>
        <h1>{error}</h1>
      </div>
    </div>
  );
};

export default Modal;
