import React from 'react'
import SideDrawer from './miscellaneous/SideDrawer'
import {ChatState} from '../../context/ChatProvider'
import MyChats from './MyChats'
import ChatBox from './ChatBox'

const ChatPage = () => {
    const { user } = ChatState()
  return (
    <div className="w-full">
      {user && <SideDrawer />}
      <div className="flex justify-between w-full h-91.5vh p-2.5">
        {/* {user && <MyChats fetchAgain={fetchAgain} />}
        {user && (
          <ChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )} */}
      </div>
    </div>
  );
}

export default ChatPage