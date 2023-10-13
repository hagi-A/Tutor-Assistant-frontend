// LanguageSelector.js
import React from "react";
import { useTranslation } from "react-i18next";
import { FaGlobe } from "react-icons/fa";

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (e) => {
    const selectedLanguage = e.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <div className="relative">
      {/* <label htmlFor="language" className="relative inset-y-0 left-0 flex items-start pl-2">
        <FaGlobe className="text-violet-400 text-lg ml-4" />
      </label> */}
      <select
        id="language"
        onChange={changeLanguage}
        className="text-light ml-5  border border-white bg-white bg-opacity-10 text-white px-4 py-2 rounded hover:border-indigo-500 hover:text-violet-500 transition duration-300 ease-in-out "
      >
        {/* <FaGlobe className="text-white text-lg ml-4 absolute inset-y-0 left-0 flex items-center pl-2" /> */}
        <option value="en" className="text-light text-black">English</option>
        <option value="amh" className="text-light text-black">አማርኛ</option>
      </select>
    </div>
    
  );
};

export default LanguageSelector;
