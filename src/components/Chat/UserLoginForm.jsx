import { useState } from "react";
import axios from "axios";

const projectID = "d3cdd6b5-ceeb-4609-b4d2-3442228d8ae6";

const Modal = () => {
  const [studentUsername, setStudentUsername] = useState("");
  const [studentPassword, setStudentPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = {
      "Project-ID": projectID,
      "User-Name": studentUsername,
      "User-Secret": studentPassword,
    };

    try {
      await axios.get("https://api.chatengine.io/chats", {
        headers: authObject,
      });

      localStorage.setItem("studentUsername", studentUsername);
      localStorage.setItem("studentPassword", studentPassword);

      window.location.reload();
      console.log("in trrryy");
      setError("");
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
            value={studentUsername}
            onChange={(e) => setStudentUsername(e.target.value)}
            className="input"
            placeholder="Username"
            required
          />
          <input
            type="password"
            value={studentPassword}
            onChange={(e) => setStudentPassword(e.target.value)}
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
