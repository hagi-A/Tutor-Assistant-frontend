import React, {useState, useEffect} from "react";
import { useLocation } from "react-router-dom";
import { EditButton } from "../common/Button";
// import { SaveIcon } from "../assets/Icons/Icons";
import QuizContainer from "./QuizContainer";
import QuestionAdder from "./QuestionAdder";
// import { useSelector } from "react-redux";
import { FaSave } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { createQuiz } from "../../redux/actions/quizActions";
import { setTutorData } from "../../redux/slice/tutorSlice"; 
import {
  setCourseTitle,
} from "../../redux/actions/courseActions";
import { useTutorContext } from "../../hooks/useTutorContext";

const Quiz = () => {
  const location = useLocation();
  const {tutor} = useTutorContext();
  //   const seminar = location.state?.selectedSeminar || {};
  const quiz = useSelector((state) => state.quiz.quizs);
  const courseTitle = useSelector((state) => state.course.courseTitle);
  // const tutorData = useSelector((state) => state.tutor); // Assuming you have a tutor slice
  const dispatch = useDispatch();
  const [localCourseTitle, setLocalCourseTitle] = useState("");
  const [savedQuizzes, setSavedQuizzes] = useState([]);

  const tutorId = tutor ? tutor.tutor._id : null;
  // const additionalQuizs = [
  //   {
  //     courseTitle: localCourseTitle.trim(),
  //     questions: quiz,
  //   },
  // ];

  useEffect(() => {
    if (tutorId) {
      // Dispatch the updateTutorData action
      dispatch(setTutorData(tutorId));
    }
  }, [tutorId, dispatch]);

  // const saveQuiz = () => {
  //   if (!localCourseTitle.trim()) {
  //     alert("Please enter a course title");
  //     return;
  //   }
  //   alert("it is saved");
  //   dispatch(createQuiz(additionalQuizs, tutorData));
  //   // Optionally reset the input after saving
  //   setLocalCourseTitle("");
  //   dispatch(setCourseTitle("")); // Resetting global state
  // };
  

  const saveQuiz = () => {
    if (!localCourseTitle.trim()) {
      alert("Please enter a course title");
      return;
    }

    // Assuming you have a function in your context to get the tutor ID
    // const tutorId = tutor.tutor._id; // Replace with your actual function

    if (!tutorId) {
      alert("Tutor ID not found");
      return;
    }

    alert("Quiz saved!");
    console.log(quiz);
    // Modify additionalQuizs to include the tutorId
    // const additionalQuizs = [
    //   {
    //     courseTitle: localCourseTitle.trim(),
    //     questions: quiz,
    //     tutorId: tutorId,
    //   },
    // ];

    const additionalQuizs = {
      courseTitle: localCourseTitle.trim(),
      questions: JSON.stringify(quiz),
      tutorId: tutorId,
    };

    // Add the saved quiz to the list of saved quizzes
    setSavedQuizzes((prevQuizzes) => [...prevQuizzes, additionalQuizs]);

    // JSON.stringify([additionalQuizs]);

    // Dispatch your action with the updated data
    dispatch(createQuiz(additionalQuizs));
    console.log(additionalQuizs);
    // Optionally reset the input after saving
    // setLocalCourseTitle("");
    // dispatch(setCourseTitle("")); // Resetting global state
  };

  const handleCourseTitleChange = (e) => {
    setLocalCourseTitle(e.target.value);
    dispatch(setCourseTitle(e.target.value));
  };

  return (
    <>
      <div className="bg-white flex flex-col gap-4 mb-8 rounded-md w-full mt-3 p-3 h-full">
        <div className="flex w-full justify-between items-center">
          {" "}
          <div className="flex justify-start">
            <h1 className="text-sm ">Add a quiz to </h1>
            <span className="font-semibold text-primaryMedium">
              {/* {seminar.title} */}{" "}
              <input
                type="text"
                className="w-full p-2 mt-2 text-sm rounded-md outline-none border border-backgroundDim"
                placeholder="Course Title"
                value={localCourseTitle || courseTitle} // Use local state or global state
                onChange={handleCourseTitleChange}
                // onChange={(e) => dispatch(setCourseTitle(e.target.value))}
              />
            </span>
          </div>
          <EditButton
            icon={<FaSave className="text-lg" />}
            placeholder={"Save"}
            onClick={saveQuiz}
          />
        </div>
        <div className="w-full h-[2px] bg-backgroundDim" />
        <div className="flex w-full justify-between">
          <QuizContainer />
          {quiz.length === 5 ? null : <QuestionAdder />}
        </div>
      </div>
      {/* Display the saved quizzes at the bottom */}
      <div className="mt-4">
        <h2 className="text-lg font-semibold mb-2">Saved Quizzes</h2>
        <div className="flex flex-wrap gap-2">
          {savedQuizzes.map((savedQuiz, index) => (
            <div key={index} className="bg-cyan-700 p-2 rounded-md text-sm">
              {/* {savedQuiz.additionalQuizs.courseTitle} */}
              {savedQuiz.localCourseTitle}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Quiz;
