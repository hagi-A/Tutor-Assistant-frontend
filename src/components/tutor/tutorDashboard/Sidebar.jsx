import React from "react";
import { Link } from "react-router-dom";
import {
  FaUsers,
  FaChevronRight,
  FaTachometerAlt,
  FaUserCheck,
} from "react-icons/fa";
import { AiOutlineSchedule } from "react-icons/ai";
import { FcStatistics } from "react-icons/fc";
import { MdQuiz, MdSubject } from "react-icons/md";
import { useTutorContext } from "../../../hooks/useTutorContext";

const Sidebar = () => {
  const { tutor } = useTutorContext();
  return (
    <div className="bg-cyan-900 min-h-screen px-6">
      <div className="px-4 py-8 flex items-center justify-center border-b-[1px] border-slate-300">
        <h1 className="text-white text-[25px] leading-[24px] font-bold cursor-pointer">
          Tutor Dashboard
        </h1>
      </div>

      <>
        <div className="flex items-center gap-4 py-5 border-b-[1px] border-slate-300">
          <FaTachometerAlt className="text-white text-2xl" />
          <button>
            <Link
              to="/tutor"
              className="text-md leading-[20px] font-light text-white"
            >
              Dashboard
            </Link>
          </button>
        </div>
        <div className="pt-4 border-b-2 border-slate-300">
          {/* <p className="text-sm font-bold leading-[16px] text-slate-400">
          INTERFACE
        </p> */}
          <div className="flex items-center justify-between gap-[10px] py-[15px] cursor-pointer">
            <button>
              <div className="flex items-center gap-[10px]">
                <FaUsers className="text-white text-2xl" />
                <Link
                  to="/students"
                  className="text-md leading-[20px] font-light text-white"
                >
                  Students
                </Link>
              </div>
            </button>
            <FaChevronRight className="text-white" />
          </div>
          <div className="flex items-center justify-between gap-[10px] py-[15px] cursor-pointer">
            <button>
              <div className="flex items-center gap-[10px]">
                {tutor && (
                  <>
                    <MdSubject className="text-white text-2xl" />
                    <Link
                      to={`/courses/${tutor.tutor._id}`}
                      className="text-md leading-[20px] font-light text-white"
                    >
                      Courses
                    </Link>
                  </>
                )}
              </div>
            </button>
            <FaChevronRight className="text-white" />
          </div>
          <div className="flex items-center justify-between gap-[10px] py-[15px] cursor-pointer">
            <div className="flex items-center gap-[10px]">
              <AiOutlineSchedule className=" text-white text-2xl" />

              <Link className="text-md leading-[20px] font-light text-white">
                Schedule
              </Link>
            </div>
            <FaChevronRight className="text-white" />
          </div>
          {/* <div className="flex items-center gap-[10px]"> */}
          {/* <FaRegCalendarAlt className="text-white " />
                     
                    <Link className="text-md leading-[20px] font-light text-white">Charts</Link>
                </div> */}
        </div>

        <div className="pt-4 border-b-2 border-slate-300">
          {/* <p className="text-sm font-bold leading-[16px] text-slate-400">
          ADDONS
        </p> */}
          <div className="flex items-center justify-between gap-[10px] py-[15px] cursor-pointer">
            <div className="flex items-center gap-[10px]">
              <FcStatistics className="text-white text-2xl" />

              <Link className="text-md leading-[20px] font-light text-white">
                Progress
              </Link>
            </div>
            <FaChevronRight className="text-white" />
          </div>
          <div className="flex items-center justify-between gap-[10px] py-[15px] cursor-pointer">
            <div className="flex items-center gap-[10px]">
              <MdQuiz className="text-white text-2xl" />

              <Link className="text-md leading-[20px] font-light text-white">
                Quizzes
              </Link>
            </div>
            <FaChevronRight className="text-white" />
          </div>
          <div className="flex items-center justify-between gap-[10px] py-[15px] cursor-pointer">
            <div className="flex items-center gap-[10px]">
              <FaUserCheck className="text-white text-2xl" />

              <Link className="text-md leading-[20px] font-light text-white">
                Attendance
              </Link>
            </div>
            <FaChevronRight className="text-white" />
          </div>
        </div>
      </>
    </div>
  );
};

export default Sidebar;
