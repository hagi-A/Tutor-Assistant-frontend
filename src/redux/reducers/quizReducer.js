const quizsInitialState = {
  quizs: [], // Initialize with an empty array or your quiz data
  question: "", // Initialize with a default value
  choices: [],
  correctAnswer: "",
  courseTitle: "",
  isEditing: false,
  selectedQuestionIndex: null,
};

export const quizReducer = (state = quizsInitialState, action) => {
  switch (action.type) {
    case "ADD_CHOICE":
      return {
        ...state,
        choices: [...state.choices, ""],
      };
    case "ADD_QUESTION":
      return {
        ...state,
        question: action.payload,
      };
    case "ADD_QUIZ":
      return {
        ...state,
        quizs: [...state.quizs, ...action.payload],
      };
    case "REMOVE_QUIZ":
      const updatedQuizzes = [...state.quizs];
      updatedQuizzes.splice(action.payload, 1); // Remove the quiz at the specified index
      return {
        ...state,
        quizs: updatedQuizzes,
      };
    case "UPDATE_CHOICE":
      const { index, choice } = action.payload;
      const updatedChoices = [...state.choices];
      updatedChoices[index] = choice;
      return {
        ...state,
        choices: updatedChoices,
      };
    case "REMOVE_CHOICE":
      const indexToRemove = action.payload;
      const restChoices = state.choices.filter(
        (_, index) => index !== indexToRemove
      );
      return {
        ...state,
        choices: restChoices,
      };
    case "RESET_INPUTS":
      return {
        ...state,
        question: "",
        choices: [],
        correctAnswer: "",
      };
    case "SELECT_ANSWER":
      return {
        ...state,
        correctAnswer: action.payload,
      };
    case "ENABLE_EDITING":
      return {
        ...state,
        isEditing: true,
        selectedQuestionIndex: action.payload,
      };
    case "SAVE_EDIT":
      return {
        ...state,
        isEditing: false,
      };
    case "EDIT_QUIZ":
      const { indexQ, newQuestion } = action.payload;
      const updatedQuestion = [...state.quizs];
      updatedQuestion[indexQ] = {
        ...updatedQuestion[indexQ],
        question: newQuestion,
      };
      return {
        ...state,
        quizs: updatedQuestion,
      };
    case "EDIT_CHOICE":
      const { indexQu, indexC, newChoice } = action.payload;
      const updatedChoice = [...state.quizs];
      updatedChoice[indexQu] = {
        ...updatedChoice[indexQu],
        choices: updatedChoice[indexQu].choices.map((choice, index) =>
          index === indexC ? newChoice : choice
        ),
      };
      return {
        ...state,
        quizs: updatedChoice,
      };

    case "EDIT_CORRECT_ANSWER":
      const { questionIndex, newCorrectAnswer } = action.payload;
      const updatedQuizs = [...state.quizs];
      updatedQuizs[questionIndex] = {
        ...updatedQuizs[questionIndex], // Copy the existing question object
        correctAnswer: newCorrectAnswer,
      };

      return {
        ...state,
        quizs: updatedQuizs,
      };

    default:
      return state;
  }
};
