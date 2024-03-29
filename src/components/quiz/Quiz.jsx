import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { EditButton } from "../common/Button";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
// import { SaveIcon } from "../assets/Icons/Icons";
import QuizContainer from "./QuizContainer";
import QuestionAdder from "./QuestionAdder";
import noQuizImg from "../../images/noQuizImg.jpg";
// import { useSelector } from "react-redux";
import { FaSave } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  createQuiz,
  setDueDate,
  setTime,
  setQuizWeight,
  setPassGrade,
} from "../../redux/actions/quizActions";
import { setTutorData } from "../../redux/slice/tutorSlice";
import { setCourseTitle } from "../../redux/actions/courseActions";
import { useTutorContext } from "../../hooks/useTutorContext";

const Quiz = () => {
  const location = useLocation();
  const { tutor } = useTutorContext();
  //   const seminar = location.state?.selectedSeminar || {};
  const quiz = useSelector((state) => state.quiz.quizs);
  const courseTitle = useSelector((state) => state.course.courseTitle);
  const dueDate = useSelector((state) => state.quiz.dueDate);
  const time = useSelector((state) => state.quiz.time);
  const quizWeight = useSelector((state) => state.quiz.quizWeight);
  const passGrade = useSelector((state) => state.quiz.passGrade);
  // const tutorData = useSelector((state) => state.tutor); // Assuming you have a tutor slice
  const dispatch = useDispatch();
  const [localCourseTitle, setLocalCourseTitle] = useState("");
  const [savedQuizzes, setSavedQuizzes] = useState([]);
  const [showQuizAdder, setShowQuizAdder] = useState(false);

  const tutorId = tutor ? tutor.tutor._id : null;
  // const additionalQuizs = [
  //   {
  //     courseTitle: localCourseTitle.trim(),
  //     questions: quiz,
  //   },
  // ];
  const [quizzes, setQuizzes] = useState([]);
  const handleDueDateChange = (date) => {
    dispatch(setDueDate(date));
  };

  const handleTimeChange = (time) => {
    dispatch(setTime(time));
  };

  const handleQuizWeightChange = (e) => {
    dispatch(setQuizWeight(e.target.value));
  };

  const handlePassGradeChange = (e) => {
    dispatch(setPassGrade(e.target.value));
  };

  useEffect(() => {
    //  const tutorId = tutor ? tutor.tutor._id : null;
    const fetchQuizzes = async (tutorId) => {
      try {
        const response = await axios.get("/api/quizzes/fetchById"); // Replace with your actual backend API endpoint
        // console.log("Quizzes fetched successfully:", response.data.quizzes);
        // setQuizzes(response.data.quizzes);
        // Check the backend response structure
        console.log("Backend Response:", response.data);

        // Assuming quizzes is nested under 'data' property in the response
        const fetchedQuizzes = response.data.data?.quizzes || [];
        setQuizzes(fetchedQuizzes);
      } catch (error) {
        console.error("Error fetching quizzes:", error);
      }
    };

    // Call the function to fetch quizzes when the component mounts
    fetchQuizzes();
  }, []);

  useEffect(() => {
    if (tutorId) {
      // Dispatch the updateTutorData action
      dispatch(setTutorData(tutorId));
    }
  }, [tutorId, dispatch]);

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
    //
    const additionalQuizs = {
      courseTitle: localCourseTitle.trim(),
      questions: JSON.stringify(quiz),
      tutorId: tutorId,
      dueDate: dueDate, // Add dueDate to the object
      time: time, // Add time to the object
      quizWeight: quizWeight, // Add quizWeight to the object
      passGrade: passGrade, // Add passGrade to the object
    };

    // Add the saved quiz to the list of saved quizzes// Add the saved quiz to the beginning of the list of saved quizzes
    setSavedQuizzes((prevQuizzes) => [additionalQuizs, ...prevQuizzes]);

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

  const toggleQuizAdder = () => {
    setShowQuizAdder((prev) => !prev);
  };

  return (
    <>
      {/* <div className="mt-4"> */}
      <div className="flex justify-between">
        <h2 className="text-lg font-semibold mb-2">Saved Quizzes</h2>
        <button
          onClick={toggleQuizAdder}
          className="p-4 bg-transparent border border-cyan-700 text-2xl font-light text-cyan-700 rounded-full"
        >
          {showQuizAdder ? "Hide Quiz Adder" : "Show Quiz Adder"}
        </button>
      </div>
      {!showQuizAdder && (
        <div className="flex justify-center">
          {savedQuizzes.length === 0 ? (
            <div>
              <img
                src={noQuizImg}
                alt="Placeholder"
                className="w-[400px] h-[400px] rounded-full"
              />
              <p>No quizzes yet. Click the button above to add a quiz.</p>
            </div>
          ) : (
            <div className="flex flex-wrap gap-2 justify-start">
              {quizzes &&
                quizzes.map((quiz, index) => (
                  <div
                    key={index}
                    className=" w-48 h-48 bg-slate-50 p-2 border border-cyan-800 rounded-md text-sm"
                  >
                    <div className=" p-4 rounded-md shadow-md">
                      <h3 className="text-lg font-semibold mb-2">
                        {quiz.courseTitle}
                      </h3>
                      {/* Include other details or actions related to the saved quiz */}
                      {/* For example, you can add a button to view/edit the quiz details */}
                      <button className="bg-transparent border border-cyan-800 text-cyan-800 px-3 py-1 rounded-md">
                        View Quiz
                      </button>
                    </div>
                  </div>
                ))}
            </div>
            // <div className="flex flex-wrap gap-2">
            //   {savedQuizzes.map((savedQuiz, index) => (
            //     <div key={index} className="bg-cyan-700 p-2 rounded-md text-sm">
            //       <div className="bg-white p-4 rounded-md shadow-md">
            //         <h3 className="text-lg font-semibold mb-2">
            //           {savedQuiz.courseTitle}
            //         </h3>
            //         {/* Include other details or actions related to the saved quiz */}
            //         {/* For example, you can add a button to view/edit the quiz details */}
            //         <button className="bg-primaryMedium text-white px-3 py-1 rounded-md">
            //           View Quiz
            //         </button>
            //       </div>
            //     </div>
            //   ))}
            // </div>
          )}
        </div>
      )}

      {showQuizAdder && (
        <div className="bg-white flex flex-col gap-4 mb-8 rounded-md w-full mt-3 p-3 h-full">
          <div className="flex w-full justify-between items-center">
            <div className="flex justify-start items-center">
              <div className="grid grid-cols-2 gap-4 ml-4">
                <div className="mb-4 flex">
                  <div className="mr-4">
                    <h2 className="text-base tracking-wide font-semibold mb-2">
                      Add a quiz to{" "}
                    </h2>
                    <input
                      type="text"
                      className="w-full p-2 text-sm rounded-md outline-none border border-backgroundDim"
                      placeholder="Course Title"
                      value={localCourseTitle || courseTitle}
                      onChange={handleCourseTitleChange}
                    />
                  </div>
                  <div className="mr-4">
                    <h2 className="text-base tracking-wide font-semibold mb-2">
                      Due Date
                    </h2>
                    <DatePicker
                      selected={dueDate}
                      onChange={handleDueDateChange}
                      dateFormat="yyyy-MM-dd"
                      className="w-full p-2 text-sm rounded-md outline-none border border-backgroundDim"
                    />
                  </div>
                  <div>
                    <h2 className="text-base tracking-wide font-semibold mb-2">
                      Time
                    </h2>
                    <DatePicker
                      selected={time}
                      onChange={handleTimeChange}
                      showTimeSelect
                      showTimeSelectOnly
                      timeIntervals={15}
                      dateFormat="h:mm aa"
                      className="w-full p-2 text-sm rounded-md outline-none border border-backgroundDim"
                    />
                  </div>
                </div>
                <div className="mb-4 flex">
                  <div className="mr-4">
                    <h2 className="text-base tracking-wide font-semibold mb-2">
                      Quiz Weight
                    </h2>
                    <input
                      type="number"
                      className="w-full p-2 text-sm rounded-md outline-none border border-backgroundDim"
                      value={quizWeight}
                      onChange={handleQuizWeightChange}
                    />
                  </div>
                  <div>
                    <h2 className="text-base tracking-wide font-semibold mb-2">
                      Pass Grade
                    </h2>
                    <input
                      type="number"
                      className="w-full p-2 text-sm rounded-md outline-none border border-backgroundDim"
                      value={passGrade}
                      onChange={handlePassGradeChange}
                    />
                  </div>
                </div>
              </div>
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
            <QuestionAdder />
          </div>
        </div>
      )}
    </>
  );
};

export default Quiz;
