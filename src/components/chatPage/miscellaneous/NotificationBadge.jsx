import React from "react";

const NotificationBadge = ({ count }) => {
  return (
    <div className="relative">
      {count > 0 && (
        <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1 group-hover:scale-125 transition-transform duration-300">
          {count}
        </span>
      )}
    </div>
  );
};

export default NotificationBadge;
