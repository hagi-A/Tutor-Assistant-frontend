import React from "react";

const ProfileCard = () => {
    return (
      <div className="bg-slate-100 rounded-lg p-4 flex flex-col items-center">
        <div>
          <img src="" alt="" className="h-16 rounded-full" />
        </div>
        <div id="username" className="font-semibold text-xl mt-4 text-cyan-800">
          User Name
        </div>
        <div id="name" className="text-sm text-gray-500 ">
          {" "}
          Full Name
        </div>
        {/* <div id="stats">
               <div></div>
            </div> */}
        <div id="actions" className="flex ">
          <div>Message</div>
        </div>
      </div>
    );
};

export default ProfileCard;
