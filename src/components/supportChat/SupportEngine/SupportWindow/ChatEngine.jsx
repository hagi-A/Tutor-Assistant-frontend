import React, { useEffect, useState } from "react";

import { ChatEngineWrapper, Socket, ChatFeed } from "react-chat-engine";
const projectID = "4c56144b-fd62-47d4-9ea4-95026ef5b201";
// const privateKey = "e769123a-3d2e-4dcb-a8c8-9012d625bcb8";
const ChatEngine = (props) => {
  const [showChat, setShowChat] = useState(false);

  useEffect(() => {
    if (props.visible) {
      setTimeout(() => {
        setShowChat(true);
      }, 500);
    }
  });

  return (
    <div
      className="transition-5"
      style={{
        ...styles.chatEngineWindow,
        ...{
          height: props.visible ? "100%" : "0px",
          zIndex: props.visible ? "100" : "0",
        },
      }}
    >
      {showChat && (
        <ChatEngineWrapper>
          <Socket
            projectID={projectID}
            userName={props.user.email}
            userSecret={props.user.email}
          />
          <ChatFeed activeChat={props.chat.id} />
        </ChatEngineWrapper>
      )}
    </div>
  );
};

export default ChatEngine;

const styles = {
  chatEngineWindow: {
    width: "100%",
    backgroundColor: "#fff",
  },
};
