import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";

import axios from "axios";

const SearchBar = () => {
//third attempt
const [data, setData] = useState([])
const [records, setRecords] = useState([])
  useEffect(() => {
      axios.get("/api/users/search")
      .then(res=> {
        setData(res.data)
        setRecords(res.data);
      })
      .catch(err => console.log(err));
  }, [])

  const Filter = (event) => {
    setRecords(data.filter(f => f.username.toLowerCase().includes(event.target.value)))
  }
  //second attempt
  // const [searchQuery, setSearchQuery] = useState('');
  // const [searchResults, setSearchResults] = useState([]);

  // const handleSearch = async () => {
  //   try {
  //     const response = await axios.get(`/api/users/search?q=${searchQuery}`);
  //     setSearchResults(response.data);
  //   } catch (error) {
  //     console.error('Error searching for usernames:', error);
  //   }
  // };

//first attempt
//   const [search, setSearch] = useState("");
//   const [filters, setFilters] = useState({
//     username: false,
//     // location: false,
//     // gradeLevel: false,
//     // courses: false,
//     // priceRate: false,
//   });
//   const [data, setData] = useState([]);
//   const [filteredData, setFilteredData] = useState([]); // State to hold filtered data

  
//   useEffect(() => {
//     // Define the API endpoint where your MongoDB data is hosted
//     const apiUrl = "http://127.0.0.1:4002/api/search?q=Item";

//     // Define the query parameters based on the search and filters
//     const queryParams = {
//       q: search,
//       username: filters.username,
//       // location: filters.location,
//       // gradeLevel: filters.gradeLevel,
//       // courses: filters.courses,
//       // priceRate: filters.priceRate,
//     };

//     // Use axios to make a GET request to the API
//     axios.get(apiUrl, { params: queryParams })
//       .then((response) => {
//         // Handle the response data and set it in the 'data' state
//         setData(response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching data: ", error);
//       });
//   }, [search, filters]);

//   const handleSearch = () => {
//     // Filter the data based on the user's search input and filter selections
//     const searchData = data.filter((item) => {
//       // Implement the search logic here based on the 'search' input
//       const isSearchMatch = item.name.toLowerCase().includes(search.toLowerCase());
  
//       // Implement filter logic based on the 'filters' state
//       const isUsernameMatch = !filters.username || item.username === "desiredUsername";
//       const isLocationMatch = !filters.location || item.location === "desiredLocation";
//       const isSubjectMatch = !filters.subject || item.subject === "desiredSubject";
//       const isGradeMatch = !filters.grade || item.grade === "desiredGrade";
  
//       // Combine search and filter results
//       return isSearchMatch && isUsernameMatch && isLocationMatch && isSubjectMatch && isGradeMatch;
//     });
  
//     // Update the 'filteredData' state with the filtered results
//     setFilteredData(searchData);
//   };
  

  return (
    <div className="w-11/12 h-auto md:w-8/12 xl:w-1/2 rounded-3xl border border-cyan-900  bg-white bg-opacity-20 p-5 flex justify-center">
      <section className="w-full h-10 flex items-center text-black">
        <span className="w-10 h-full flex items-center ">
          <FaSearch className="text-cyan-900" />
        </span>
        {/* <input
          type="text"
          className="w-full h-full font-light md:pl-2 border border-cyan-900 rounded-l-2xl focus:outline-none bg-white bg-opacity-20"
          placeholder="Find Tutor . . ."
        /> */}
        <input
          type="text"
          className="w-full h-full font-light md:pl-2 border border-cyan-900 ml-2 focus:outline-none bg-white bg-opacity-20"
          placeholder="User Name . . ."
          onChange={Filter}
        //   value={searchQuery}
        // onChange={(e) => setSearchQuery(e.target.value)}
        />
        {/* <input
          type="text"
          className="w-32 h-full font-light md:pl-2 border border-cyan-900 rounded-l-2xl focus:outline-none bg-white bg-opacity-20"
          placeholder="Location . . ."
          checked={filters.location}
          onChange={() =>
            setFilters({ ...filters, location: !filters.location })
          }
        />
         <input
          type="text"
          className="w-32 h-full font-light md:pl-2 border border-cyan-900 ml-2 focus:outline-none bg-white bg-opacity-20"
          placeholder="Course . . ."
          checked={filters.courses}
          onChange={() =>
            setFilters({ ...filters, courses: !filters.courses })
          }
        />
        <select
          type="text"
          className="w-32 h-full font-light md:pl-2 border border-cyan-900 ml-2 focus:outline-none bg-white bg-opacity-20"
          
          checked={filters.gradeLevel}
          onChange={() =>
            setFilters({ ...filters, gradeLevel: !filters.gradeLevel })
          }
        >
        <option value="">Select Grade</option>
        <option value="Kindergarten">Kindergarten</option>
        <option value="Elementary">Elementary</option>
        <option value="Middle School">Middle School</option>
        <option value="Kindergarten">High School</option>
        <option value="Kindergarten">College</option>
        </select>
        <input
          type="text"
          className="w-32 h-full font-light md:pl-2 border border-cyan-900 ml-2 focus:outline-none bg-white bg-opacity-20"
          placeholder="Price Rate . . ."
          checked={filters.priceRate}
          onChange={() =>
            setFilters({ ...filters, priceRate: !filters.priceRate })
          }
        /> */}
        <button className="w-28 h-full bg-cyan-900 ml-2 flex justify-center items-center rounded-r-2xl rounded-l-md text-white font-light text-md ">
          {" "}
          Search
        </button>
      </section>
      {/* Render data based on search and filter criteria */}
      <ul>
        {records.map((user) => (
          <li key={user._id}>{user.username}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;
{
  /* <div className="flex items-left">
  //   <input */
}
//     type="text"
//     placeholder="Search..."
//     className="rounded-l-lg w-64 bg-white bg-opacity-20 text-black border border-r-0 border-violet-500 focus:outline-none focus:border-blue-500 flex-grow"
//     value={searchText}
//     onChange={handleInputChange}
//   />
//   <button
//     className="flex w-60 bg-violet-400 font-light text-white rounded-lg ml-2 px-6 py-4 hover:bg-slate-300 hover:text-violet-400 focus:outline-none"
//     onClick={handleSearch}
//   >
//     Search
//   </button>
// </div>

// const [searchText, setSearchText] = useState("");

  // const handleInputChange = (event) => {
  //   setSearchText(event.target.value);
  // };

  // const handleSearch = () => {
  //   onSearch(searchText);
  // };