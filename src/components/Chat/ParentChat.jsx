import React from "react";
import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./ChatFeed";
import UserLoginForm from "./UserLoginForm";
import "./userChat.css";
import Dashboard from "../pages/parent/dashboard/Dashboard";
import Sidebar from "../pages/parent/dashboard/Sidebar";
import { useAuthContext } from "../../hooks/useAuthContext";
// import { useTutorContext } from "../../hooks/useTutorContext";

const projectID = "4c56144b-fd62-47d4-9ea4-95026ef5b201";

const UserChat = () => {
  const { user } = useAuthContext();
  const userName = user ? user.user.username : null;
  if (
    !localStorage.getItem("studentUsername") ||
    userName !== localStorage.getItem("studentUsername")
  ) {
    return <UserLoginForm />;
  }

  //  if (!localStorage.getItem("studentUsername")) return <UserLoginForm />;
  return (
    <div className="flex">
      <div className="basis-[12%] h-[100vh]">
        <Sidebar />
      </div>
      <div className="basis-[88%]  border h-[100vh] overflow-scroll">
        <Dashboard />
        <ChatEngine
          height="100vh"
          projectID={projectID}
          //   userName="liana"
          //   userSecret="123123"
          //   userName={userName}
          //   userSecret={userSecret}
          userName={localStorage.getItem("studentUsername")}
          userSecret={localStorage.getItem("studentPassword")}
          //   renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
          //   onNewMessage={() =>
          //     new Audio(
          //       "https://chat-engine-assets.s3.amazonaws.com/click.mp3"
          //     ).play()
          //   }
        />
      </div>
    </div>
  );
};

export default UserChat;
