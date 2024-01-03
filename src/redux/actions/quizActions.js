// Assuming you have an action to create a quiz
export const createQuiz = (quizData) => {
  return async (dispatch) => {
    try {
      const response = await fetch("/api/quizzes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(quizData),
      });

      const data = await response.json();

      // Dispatching an action to update the state based on a successful quiz creation
      dispatch({ type: "CREATE_QUIZ_SUCCESS", payload: data });
    } catch (error) {
      console.error("Error creating quiz:", error);

      // Dispatching an action to update the state based on an error
      dispatch({ type: "CREATE_QUIZ_ERROR", payload: error.message });
    }
  };
};

export const addQuestion = (question) => ({
  type: "ADD_QUESTION",
  payload: question,
});

export const addChoices = () => ({
  type: "ADD_CHOICE",
});

export const addQuiz = (quiz) => ({
  type: "ADD_QUIZ",
  payload: quiz,
});

export const removeQuiz = (index) => ({
  type: "REMOVE_QUIZ",
  payload: index,
});

export const resetInputs = () => ({
  type: "RESET_INPUTS",
});

export const updateChoice = (index, choice) => ({
  type: "UPDATE_CHOICE",
  payload: { index, choice },
});
export const removeChoice = (index) => ({
  type: "REMOVE_CHOICE",
  payload: index,
});

export const selectChoice = (choice) => ({
  type: "SELECT_ANSWER",
  payload: choice,
});

export const enableEditing = (index) => ({
  type: "ENABLE_EDITING",
  payload: index,
});
export const saveEditing = () => ({
  type: "SAVE_EDIT",
});

export const editngQuestion = (indexQ, newQuestion) => ({
  type: "EDIT_QUIZ",
  payload: { indexQ, newQuestion },
});

export const editngChoice = (indexQu, indexC, newChoice) => ({
  type: "EDIT_CHOICE",
  payload: { indexQu, indexC, newChoice },
});

export const editCorrectAnswer = (questionIndex, newCorrectAnswer) => ({
  type: "EDIT_CORRECT_ANSWER",
  payload: { questionIndex, newCorrectAnswer },
});
