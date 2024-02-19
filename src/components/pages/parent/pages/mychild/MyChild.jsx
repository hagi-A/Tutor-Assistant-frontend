import React, { useState } from "react";
import Sidebar from "../../dashboard/Sidebar";
import Dashboard from "../../dashboard/Dashboard";
import { Link } from "react-router-dom";
import AddChild from "./AddChild";
import noKidYet from "../../../../../images/noKidYet.jpg"

const MyChild = () => {
 const [showKidForm, setShowKidForm] = useState(false);
  return (
    <div className="flex">
      <div className="basis-[12%] h-[100vh]">
        <Sidebar />
      </div>
      <div className="basis-[88%]  border h-[100vh] overflow-scroll">
        <Dashboard />
        <div className=" pt-6 px-6 min-h-screen bg-slate-200 ">
          {/* <div className="flex items-center justify-end"> */}
          {showKidForm ? (
            <AddChild />
          ) : (
            <>
              <button
                type="button"
                onClick={() => setShowKidForm(true)}
                className="flex items-center justify-end border-4 border-white m-7 bg-green-900 rounded-full p-4 text-white"
              >
                Add Kid
              </button>
              <div className="flex justify-center items-center bg-slate-100">
                <img
                  src={noKidYet}
                  alt="Placeholder"
                  className="w-[400px] h-[400px] rounded-full"
                />
              </div>
            </>
          )}
          {/* <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="border-4 border-white m-7 bg-green-900 rounded-full p-4 text-white"
            >
              Add Child
            </button> */}
          {/* </div> */}
          {/* <AddChild
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            // onAddKid={handleAddKid}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default MyChild;
