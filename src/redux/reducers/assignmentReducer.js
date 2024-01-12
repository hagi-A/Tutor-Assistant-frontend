const assignmentsInitialState = {
  assignments: [], // Initialize with an empty array or your quiz data
  question: "", // Initialize with a default value
  choices: [],
  correctAnswer: "",
  courseTitle: "",
  isEditing: false,
  selectedQuestionIndex: null,
  // timer: null, // Add timer
  assignmentWeight: null, // Add quiz weight
  passGrade: null, // Add pass grade
  dueDate: null, // Add due date
  time: null, // Add time
};

export const assignmentReducer = (state = assignmentsInitialState, action) => {
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
    case "ADD_ASSIGNMENT":
      return {
        ...state,
        assignments: [...state.assignments, ...action.payload],
      };
    case "REMOVE_ASSIGNMENT":
      const updatedAssignment = [...state.assignments];
      updatedAssignment.splice(action.payload, 1); // Remove the quiz at the specified index
      return {
        ...state,
        assignments: updatedAssignment,
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
    case "EDIT_ASSIGNMENT":
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
      const updatedAssignments = [...state.assignments];
      updatedAssignments[questionIndex] = {
        ...updatedAssignments[questionIndex], // Copy the existing question object
        correctAnswer: newCorrectAnswer,
      };

      return {
        ...state,
        assignments: updatedAssignments,
      };
    case "SET_DUE_DATE":
      return {
        ...state,
        dueDate: action.payload,
      };

    case "SET_TIME":
      return {
        ...state,
        time: action.payload,
      };

    case "SET_ASSIGNMENT_WEIGHT":
      return {
        ...state,
        assignmentWeight: action.payload,
      };

    case "SET_PASS_GRADE":
      return {
        ...state,
        passGrade: action.payload,
      };
    default:
      return state;
  }
};
