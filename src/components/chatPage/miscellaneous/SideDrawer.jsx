// import React, { useState } from "react";
// // import { BrowserRouter } from 'react-router-dom';
// import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { ChatState } from "../../../context/ChatProvider";
// // import { useNavigate } from "react-router-dom";
// import NotificationBadge from "./NotificationBadge";
// import { FaBell, FaChevronDown, FaSearch } from "react-icons/fa";
// import UserListItem from "../chatAvatar/UserListItem";
// import ChatLoading from "../chatAvatar/ChatLoading";

// const SideDrawer = () => {
//   const [search, setSearch] = useState("");
//   const [searchResult, setSearchResult] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [loadingChat, setLoadingChat] = useState(false);
//   const {
//     setSelectedChat,
//     user,
//     notification,
//     setNotification,
//     chats,
//     setChats,
//   } = ChatState();

//   const [isOpen, setIsOpen] = useState(false);

//   const openModal = () => {
//     setIsOpen(true);
//   };

//   const closeModal = () => {
//     setIsOpen(false);
//   };

// //   const navigate = useNavigate();

// //   const logoutHandler = () => {
// //     localStorage.removeItem("userInfo");
// //     navigate("/");
// //   };

//   const handleSearch = async () => {
//     if (!search) {
//       toast.warning("Please Enter something in search", {
//         position: "top-right",
//         autoClose: 5000,
//         closeOnClick: true,
//       });
//       return;
//     }

//     try {
//       setLoading(true);

//       const config = {
//         headers: {
//           Authorization: `Bearer ${user.token}`,
//         },
//       };

//       const { data } = await axios.get(`/api/user?search=${search}`, config);

//       setLoading(false);
//       setSearchResult(data);
//     } catch (error) {
//       toast.error("Failed to Load the Search Results", {
//         position: "top-right",
//         autoClose: 5000,
//         closeOnClick: true,
//       });
//     }
//   };

//   const accessChat = async (userId) => {
//     console.log(userId);

//     try {
//       setLoadingChat(true);
//       const config = {
//         headers: {
//           "Content-type": "application/json",
//           Authorization: `Bearer ${user.token}`,
//         },
//       };
//       const { data } = await axios.post(`/api/chat`, { userId }, config);

//       if (!chats.find((c) => c._id === data._id)) setChats([data, ...chats]);
//       setSelectedChat(data);
//       setLoadingChat(false);
//     } catch (error) {
//       toast.error("Error fetching the chat", {
//         position: "top-right",
//         autoClose: 5000,
//         closeOnClick: true,
//       });
//     }
//   };

//   return (
//     <>
//       <div className="flex justify-between items-center bg-white w-full p-1 sm:p-2 md:p-4 border-2">
//         <div className="relative">
//           <button className="text-cyan-900" onClick={openModal}>
//             <FaSearch />
//             <span className="hidden md:flex px-4">Search User</span>
//           </button>
//         </div>
//         <span className="text-2xl font-serif">Tutor Assistance</span>
//         <div className="flex items-center">
//           <div className="relative mr-2">
//             <NotificationBadge count={notification.length} />
//             <ToastContainer />
//             <FaBell className="text-2xl m-1" />
//           </div>
//           <div className="relative">
//             <button className="bg-white" title="User Menu">
//               <img
//                 src={user.pic}
//                 alt={user.name}
//                 className="w-8 h-8 rounded-full cursor-pointer"
//               />
//               <FaChevronDown className=" mx-2" />
//             </button>
//           </div>
//         </div>
//       </div>

//       <div className="fixed left-0 top-0 h-screen w-64 bg-white border-r-2">
//         <div className="border-b-2">
//           <div className="p-1 border-b-2">Search Users</div>
//           <div className="p-4">
//             <div className="flex pb-2">
//               <input
//                 type="text"
//                 placeholder="Search by name or email"
//                 className="mr-2 p-2 border border-gray-300"
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//               />
//               <button
//                 className="px-4 py-2 bg-cyan-900 text-white hover:bg-cyan-800"
//                 onClick={handleSearch}
//               >
//                 Search
//               </button>
//             </div>
//               {loading ? (
//                 <ChatLoading />
//               ) : (
//                 searchResult?.map((user) => (
//                   <UserListItem
//                     key={user._id}
//                     user={user}
//                     handleFunction={() => accessChat(user._id)}
//                   />
//                 ))
//               )}
//               {/* {loadingChat && (
//                 <div className="ml-auto">
//                   <div className="animate-spin w-8 h-8 border-t-4 border-cyan-900 border-solid rounded-full"></div>
//                 </div>
//               )} */}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default SideDrawer;
