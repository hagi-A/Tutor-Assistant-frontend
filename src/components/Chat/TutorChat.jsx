import React from "react";
import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./ChatFeed";
import axios from 'axios'
import LoginForm from "./LoginForm";
import "./chat.css";
import Sidebar from "../tutor/tutorDashboard/Sidebar";
import TutorDashboard from "../tutor/tutorDashboard/TutorDasboard";
import { useTutorContext } from "../../hooks/useTutorContext";

const projectID = "4c56144b-fd62-47d4-9ea4-95026ef5b201";

const TutorChat = () => {
 
   const { tutor } = useTutorContext();
  const userName = tutor ? tutor.tutor.username : null;
  const userEmail = tutor ? tutor.tutor.email : null;
  
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
