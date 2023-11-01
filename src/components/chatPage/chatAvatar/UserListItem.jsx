import React from "react";

const UserListItem = ({ handleFunction, user }) => {
  return (
    <div
      onClick={handleFunction}
      className="cursor-pointer bg-gray-200 hover:bg-teal-500 hover:text-white w-full flex items-center text-black px-3 py-2 mb-2 rounded-lg"
    >
      <img
        className="mr-2 w-8 h-8 rounded-full cursor-pointer"
        src={user.pic}
        alt={user.name}
      />
      <div>
        <p>{user.name}</p>
        <p className="text-xs">
          <strong>Email :</strong> {user.email}
        </p>
      </div>
    </div>
  );
};

export default UserListItem;
