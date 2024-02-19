import React from "react";
import Quiz from "../../../quiz/Quiz";
import Sidebar from "../Sidebar";
import { FaEnvelope, FaRegBell, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTutorContext } from "../../../../hooks/useTutorContext";
import TutorDasboard from "../TutorDasboard";

const Quizzes = () => {
  const { tutor } = useTutorContext();
  return (
    <div className="flex">
      <div className="basis-[12%] h-[100vh]">
        <Sidebar />
      </div>
      <div className="basis-[88%]  border h-[100vh] overflow-scroll">
        <TutorDasboard />
        <div className=" pt-6 px-6 min-h-screen bg-slate-200 ">
          {/* <div className="flex float-right"> */}
          <Quiz />
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Quizzes;
