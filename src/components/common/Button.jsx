import React from "react";

function Button({ placeholder, icon, activeRoute, isExpanded, onClick }) {
  return (
    <button
      onClick={onClick}
      className={` p-3 text-end hover:bg-primaryLight ${
        activeRoute ? "bg-primaryMedium" : "bg-primaryDark"
      } duration-150 rounded-lg p-3 text-white font-extralight capitalize tracking-[0.3rem] text-[11px] w-full`}
    >
      <div
        className={`flex items-center w-full ${
          isExpanded ? "justify-between" : "justify-center"
        }`}
      >
        <div className={`${activeRoute ? "opacity-100" : "opacity-40"}`}>
          {" "}
          {icon}
        </div>
        <div>{placeholder}</div>
      </div>
    </button>
  );
}
export const EditButton = ({ icon, placeholder, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`text-end hover:bg-primaryLight bg-primary duration-150 rounded-lg p-3 text-white font-light capitalize tracking-[0.1rem] text-xs w-fit`}
    >
      <div
        className={`flex items-center justify-center w-full gap-6
            }`}
      >
        {icon}
        {placeholder.toUpperCase()}
      </div>
    </button>
  );
};
export const CopyButton = ({ icon, placeholder }) => {
  return (
    <div>
      <button
        className={`z-50 text-end hover:bg-primaryLight hover:text-white bg-transparent border border-primary  duration-150 rounded-lg p-1 text-primary font-light capitalize tracking-[0.1rem] text-xs w-full`}
      >
        <div
          className={`flex items-center h-full w-full gap-2
            }`}
        >
          {icon}
          {placeholder}
        </div>
      </button>
    </div>
  );
};

export default Button;
