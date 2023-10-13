import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSearch = () => {
    onSearch(searchText);
  };

  return (
    <div className="flex items-left">
    <input
      type="text"
      placeholder="Search..."
      className="rounded-l-lg w-64 bg-white bg-opacity-20 text-black border border-r-0 border-violet-500 focus:outline-none focus:border-blue-500 flex-grow"
      value={searchText}
      onChange={handleInputChange}
    />
    <button
      className="flex w-60 bg-violet-400 font-light text-white rounded-lg ml-2 px-6 py-4 hover:bg-slate-300 hover:text-violet-400 focus:outline-none"
      onClick={handleSearch}
    >
      Search
    </button>
  </div>
  );
};

export default SearchBar;
