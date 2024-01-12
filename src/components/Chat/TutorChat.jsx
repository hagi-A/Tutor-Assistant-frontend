import React from "react";
import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./ChatFeed";
import LoginForm from "./LoginForm";
import "./chat.css";
import Sidebar from "../tutor/tutorDashboard/Sidebar";
import TutorDashboard from "../tutor/tutorDashboard/TutorDasboard";
import { useTutorContext } from "../../hooks/useTutorContext";

const projectID = "d3cdd6b5-ceeb-4609-b4d2-3442228d8ae6";

const TutorChat = () => {
 
   const { tutor } = useTutorContext();
   const userName = tutor ? tutor.tutor.username : null;
   if (
     !localStorage.getItem("username") ||
     userName !== localStorage.getItem("username")
   ) {
     return <LoginForm />;
   }

  return (
    <div className="flex">
      <div className="basis-[12%] h-[100vh]">
        <Sidebar />
      </div>
      <div className="basis-[88%] border h-[100vh] overflow-scroll">
        <TutorDashboard />
        <ChatEngine
          height="100vh"
          projectID={projectID}
          // userName="bin_ale"
          // userSecret="123123"
          //   userName={userName}
          //   userSecret={userSecret}
            userName={localStorage.getItem("username")}
            userSecret={localStorage.getItem("password")}
            // renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
            onNewMessage={() =>
              new Audio(
                "https://chat-engine-assets.s3.amazonaws.com/click.mp3"
              ).play()
            }
        />
      </div>
    </div>
  );
};

export default TutorChat;
