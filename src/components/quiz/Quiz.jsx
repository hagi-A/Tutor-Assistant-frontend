import React from "react";
import { useLocation } from "react-router-dom";
import { EditButton } from "../common/Button";
// import { SaveIcon } from "../assets/Icons/Icons";
import QuizContainer from "./QuizContainer";
import QuestionAdder from "./QuestionAdder";
// import { useSelector } from "react-redux";
import { FaSave } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { createQuiz } from "../../redux/actions/quizActions";
// import {
//   // setCourseCode,
//   setCourseTitle,
// } from "../../redux/actions/courseActions";



const Quiz = () => {
  const location = useLocation();
//   const seminar = location.state?.selectedSeminar || {};
  const quiz = useSelector((state) => state.quiz.quizs);
  // const courseTitle = useSelector((state) => state.course.courseTitle);
  // const quiz = useSelector((state) => state.quiz.quizs);
  const tutorData = useSelector((state) => state.tutor); // Assuming you have a tutor slice
  const dispatch = useDispatch();

  const additionalQuizs = [
    {
      // courseCode: courseCode,
      // courseTitle: courseTitle,
      questions: quiz,
    },
  ];

  const saveQuiz = () => {
    // Add logic to save the quiz using createQuiz action
    dispatch(createQuiz(additionalQuizs, tutorData));
  };


  return (
    <div className="bg-white flex flex-col gap-4 mb-8 rounded-md w-full mt-3 p-3 h-full">
      <div className="flex w-full justify-between items-center">
        {" "}
        <h1 className="text-sm">
          Add a quiz to{" "}
          <span className="font-semibold text-primaryMedium">
            {/* {seminar.title} */}{" "}
            <input
              type="text"
              className="w-full p-2 mt-2 text-sm rounded-md outline-none border border-backgroundDim"
              placeholder="Course Title"
              // value={courseTitle}
              value={"Chemistry"}
              // onChange={(e) => dispatch(setCourseTitle(e.target.value))}
            />
          </span>
        </h1>
        <EditButton
          icon={<FaSave className="text-lg" />}
          placeholder={"Save"}
        />
      </div>
      <div className="w-full h-[2px] bg-backgroundDim" />
      <div className="flex w-full justify-between">
        <QuizContainer />
        {quiz.length === 5 ? null : <QuestionAdder />}
      </div>
    </div>
  );
};

export default Quiz;
