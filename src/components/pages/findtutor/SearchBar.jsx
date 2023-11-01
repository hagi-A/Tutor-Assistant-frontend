// import React, { useState, useEffect } from "react";
// import { FaSearch } from "react-icons/fa";
// import axios from "axios";

// const SearchBar = () => {
//   // State for storing data and filtered records
//   // const [data, setData] = useState([]);
//   // const [records, setRecords] = useState([]);

//   // // Fetch data on component mount
//   // useEffect(() => {
//   //   axios
//   //     .get("/api/users/search")
//   //     .then((res) => {
//   //       setData(res.data);
//   //       setRecords(res.data);
//   //     })
//   //     .catch((err) => console.log(err));
//   // }, []);

//   // // Filter function to update the records based on user input
//   // const Filter = (event) => {
//   //   const searchTerm = event.target.value.toLowerCase();
//   //   setRecords(
//   //     data.filter((user) => user.username.toLowerCase().includes(searchTerm))
//   //   );
//   // };
//   const [query, setQuery] = useState("");
//   const [searchResults, setSearchResults] = useState([]);

//   const handleSearch = () => {
//     axios
//       .get(`/api/users/search?query=${query}`)
//       .then((response) => {
//         setSearchResults(response.data);
//       })
//       .catch((error) => {
//         console.error("Error searching for users:", error);
//       });
//   };

//   return (
//     <div className="w-11/12 h-auto md:w-8/12 xl:w-1/2 rounded-3xl border border-cyan-900 bg-white bg-opacity-20 p-5 flex justify-center">
//       <section className="w-full h-10 flex items-center text-black">
//         <span className="w-10 h-full flex items-center ">
//           <FaSearch className="text-cyan-900" />
//         </span>
//         <input
//           type="text"
//           className="w-full h-full font-light md:pl-2 border border-cyan-900 ml-2 focus:outline-none bg-white bg-opacity-20"
//           placeholder="User Name . . ."
//           onChange={(e) => setQuery(e.target.value)}
//         />
//         <button className="w-28 h-full bg-cyan-900 ml-2 flex justify-center items-center rounded-r-2xl rounded-l-md text-white font-light text-md">
//           Search
//         </button>
//       </section>
//       <ul>
//         {searchResults.map((user) => (
//           <li key={user._id}>
//             {user.name} ({user.username})
//             <button onClick={() => onSelectUser(user._id)}>Select</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default SearchBar;
