import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaEdit, FaTrash } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
// import QA from "../../assets/QandA.png";
import {
  editCorrectAnswer,
  editngChoice,
  editngQuestion,
  enableEditing,
  removeAssignment,
  saveEditing,
} from "../../redux/actions/assignmentAction";
// import { FaTicket } from "react-icons/fa6";
// import { CorrectIcon, EditIcon, TrashIcon } from "../../assets/Icons/Icons";

const AssignmentContainer = () => {
  const assignments = useSelector((state) => state.assignment.assignments);
  const isEditing = useSelector((state) => state.assignment.isEditing);
  const selectedIndex = useSelector(
    (state) => state.assignment.selectedQuestionIndex
  );
  const dispatch = useDispatch();

  const getChoiceLetter = (choiceIndex) => {
    return String.fromCharCode(65 + choiceIndex); // 65 is the ASCII code for 'A'
  };
  const handleDeleteAssignment = (index) => {
    dispatch(removeAssignment(index));
  };
  const handleEnableEditQuestion = (index) => {
    dispatch(enableEditing(index));
  };
  const handleSaveQuestion = (index) => {
    dispatch(saveEditing());
  };
  const handleEditQuestion = (indexQ, newQuestion) => {
    dispatch(editngQuestion(indexQ, newQuestion));
  };
  const handleEditChoice = (indexQ, indexC, newChoice) => {
    dispatch(editngChoice(indexQ, indexC, newChoice));
  };

  const handleEditCorrectAnswer = (questionIndex, newCorrectAnswer) => {
    dispatch(editCorrectAnswer(questionIndex, newCorrectAnswer));
  };

  return (
    <div
      className={`h-[40rem] overflow-y-scroll scrollbar-thin ${
        assignments.length === 5 ? "w-full" : "w-3/4"
      } flex gap-4 ${
        assignments.length === 0 && "items-center justify-center"
      } flex-col`}
    >
      {assignments.length === 0 ? (
        <div className="flex flex-col items-center gap-3 -mt-12">
          {/* <img className="w-28 opacity-50" src={QA} alt="" />{" "} */}
          <h1 className="capitalize font-semibold text-primary tracking-wide">
            No questions were added !
          </h1>
        </div>
      ) : (
        assignments.map((assignment, index) => (
          <>
            <div className="flex gap-4 items-center">
              <p className="text-xs">{index + 1}</p>|
              <div className="flex items-center w-full gap-8 justify-between">
                <h1 className="text-sm font-bold w-96 tracking-wider capitalize">
                  {isEditing && selectedIndex === index ? (
                    <>
                      {assignment.image != null && (
                        <img
                          className="w-56 h-32 object-contain my-2"
                          src={assignment.image}
                          alt=""
                        />
                      )}
                      <input
                        type="text"
                        className="outline-none tracking-wider w-96 capitalize border-b border-primaryMedium"
                        value={assignment.question}
                        onChange={(e) =>
                          handleEditQuestion(index, e.target.value)
                        }
                      />
                    </>
                  ) : (
                    <>
                      {assignment.image != null && (
                        <img
                          className="w-56 h-32 object-contain my-1"
                          src={assignment.image}
                          alt=""
                        />
                      )}
                      <h1 className="w-96"> {assignment.question}</h1>
                    </>
                  )}
                </h1>
                <div className="space-x-4 pr-4">
                  {/* <p className="text-xs">Time: {quiz.time}</p>
                  <p className="text-xs">Date: {quiz.date}</p>
                  <p className="text-xs">Quiz Weight: {quiz.quizWeight}</p>
                  <p className="text-xs">Pass Grade: {quiz.passGrade}</p> */}
                  <button
                    onClick={() => handleDeleteAssignment(index)}
                    className="text-sm cursor-pointer text-red-500 hover:text-red-700 duration-200"
                  >
                    <FaTrash />
                  </button>
                  <button
                    onClick={() => {
                      isEditing
                        ? handleSaveQuestion(index)
                        : handleEnableEditQuestion(index);
                    }}
                    className="text-sm cursor-pointer text-blue-500 hover:text-blue-700 duration-200"
                  >
                    {isEditing ? <TiTick /> : <FaEdit />}
                  </button>
                </div>
              </div>
            </div>
            {assignment.choices.map((choice, choiceIndex) => (
              <>
                {isEditing && selectedIndex === index ? (
                  <div className="text-sm ml-12 track capitalize flex items-center gap-2">
                    <input
                      type="radio"
                      style={{ accentColor: "#004579" }}
                      name="choice"
                      checked={assignment.correctAnswer === choice}
                      onClick={() => {
                        handleEditCorrectAnswer(index, choice);
                      }}
                    />
                    <span className="text-xs">
                      {getChoiceLetter(choiceIndex)}.
                    </span>
                    <input
                      type="text"
                      className="outline-none tracking-wider capitalize border-b w-fit border-primaryMedium"
                      value={assignment.choices[choiceIndex]}
                      name="choice"
                      onChange={(e) =>
                        handleEditChoice(index, choiceIndex, e.target.value)
                      }
                    />
                  </div>
                ) : (
                  <div className="text-sm ml-12 track capitalize flex items-center gap-2">
                    <span className="text-xs">
                      {getChoiceLetter(choiceIndex)}.
                    </span>
                    {choice}
                    <span className="text-primary text-xs font-bold">
                      {assignment.correctAnswer === choice &&
                        "(Correct answer)"}
                    </span>
                  </div>
                )}
              </>
            ))}
          </>
        ))
      )}
    </div>
  );
};

export default AssignmentContainer;
