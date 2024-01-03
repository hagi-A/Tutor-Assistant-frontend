import React from "react";
import { EditButton } from "../common/Button";
// import { ChoiceIcon, DeleteIcon, QuestionIcon } from "../../assets/Icons/Icons";
import { useDispatch, useSelector } from "react-redux";
import {
  addChoices,
  addQuestion,
  addQuiz,
  removeChoice,
  resetInputs,
  selectChoice,
  updateChoice,
} from "../../redux/actions/quizActions";
import { FaHatCowboySide, FaQuestion, FaTrash } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
// import QuizImage from "./QuizImage";
// import { resetImage } from "../../redux/actions/imageActions";

const QuestionAdder = () => {
  const choice = useSelector((state) => state.quiz.choices);
  const question = useSelector((state) => state.quiz.question);
  const answer = useSelector((state) => state.quiz.correctAnswer);
//   const selectedImage = useSelector((state) => state.image.selectedQuizImage);
  const dispatch = useDispatch();

  const additionalQuizs = [
    {
      question: question,
      choices: choice,
      correctAnswer: answer,
    //   image: selectedImage,
    },
  ];

  const handleChoiceChange = (index, choice) => {
    dispatch(updateChoice(index, choice));
  };

  const addChoice = () => {
    if (choice.length < 5) {
      dispatch(addChoices());
    }
  };

  const handleQuestion = (e) => {
    dispatch(addQuestion(e.target.value));
  };

  const removeOrder = (index) => {
    dispatch(removeChoice(index));
  };

  const handleChoiceSelection = (choice) => {
    dispatch(selectChoice(choice));
  };

  const addAllQuiz = () => {
    if (!question.trim()) {
      alert("Please enter a valid question");
      return;
    }

    if (choice.length < 4) {
      alert("Please enter at least 4 choices");
      return;
    }

    if (choice.some((c) => !c.trim())) {
      alert("Please enter valid choices for all options");
      return;
    }

    if (answer !== "") {
      dispatch(addQuiz(additionalQuizs));
      dispatch(resetInputs());
    //   dispatch(resetImage());
    } else {
      alert("Select a choice");
    }
  };

  return (
    <div className="bg-background w-1/2 p-6 rounded-md">
      <div className="mb-6">
        {/* <QuizImage /> */}
        <h2 className="text-base tracking-wide font-semibold mb-2">
          Add a Question
        </h2>
        <textarea
          rows={7}
          className="w-full p-2 text-sm rounded-md outline-none border border-backgroundDim"
          placeholder="Enter your question here..."
          value={question}
          onChange={(e) => handleQuestion(e)}
        />
      </div>
      <div>
        {answer}
        <h2 className="text-base tracking-wide font-semibold">Add Choices</h2>
        <p className="text-sm mb-2 text-primary">Tick the correct answer</p>
        {choice.map((choice, index) => (
          <div className="w-full bg-white flex items-center gap-3 text-sm p-3 rounded-md mb-2 outline-none border border-backgroundDim">
            <input
              type="radio"
              style={{ accentColor: "#004579" }}
              name="choices"
              onClick={() => handleChoiceSelection(choice)}
            />
            <input
              key={index}
              type="text"
              className="outline-none w-full"
              placeholder={`Choice ${index + 1}`}
              value={choice}
              onChange={(e) => handleChoiceChange(index, e.target.value)}
            />
            <button onClick={() => removeOrder(index)} className="flex justify-between">
                    <FaTrash className="text-base text-primary hover:text-primaryMedium duration-200" />
                    Delete
            </button>
          </div>
        ))}
      </div>
      <div className="flex w-full justify-between gap-3 mt-4">
        <EditButton
          icon={<FaHatCowboySide />}
          onClick={addChoice}
          placeholder={"Add a choice"}
        />
        <EditButton
          icon={<FaQuestion />}
          onClick={() => addAllQuiz()}
          placeholder={"Add question"}
        />
      </div>
    </div>
  );
};

export default QuestionAdder;
