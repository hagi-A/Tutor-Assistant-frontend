import React from "react";

import { ChatEngine } from "react-chat-engine";

const projectID = "4c56144b-fd62-47d4-9ea4-95026ef5b201";
// const privateKey = "e769123a-3d2e-4dcb-a8c8-9012d625bcb8";

const SupportAdmin = () => {
  return (
    <ChatEngine
      projectID={projectID}
      userName="admin"
      userSecret="123123"
      height="calc(100vh - 12px)"
    />
  );
};

export default SupportAdmin;
