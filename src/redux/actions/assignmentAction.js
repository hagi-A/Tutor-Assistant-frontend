// Assuming you have an action to create a quiz
export const createAssignment = (questionsd) => {
  return async (dispatch) => {
    try {
      const response = await fetch("/api/assignment/createAssignment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(questionsd),
      });

      const data = await response.json();
      console.log("Data is sent to backend");
      // Dispatching an action to update the state based on a successful quiz creation
      dispatch({ type: "CREATE_ASSIGNMENT_SUCCESS", payload: data });
    } catch (error) {
      console.error("Error creating ASSIGNMENT:", error);

      // Dispatching an action to update the state based on an error
      dispatch({ type: "CREATE_ASSIGNMENT_ERROR", payload: error.message });
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

export const addAssignment = (assignment) => ({
  type: "ADD_ASSIGNMENT",
  payload: assignment,
});

export const removeAssignment = (index) => ({
  type: "REMOVE_ASSIGNMENT",
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
  type: "EDIT_ASSIGNMENT",
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

export const setDueDate = (dueDate) => ({
  type: "SET_DUE_DATE",
  payload: dueDate,
});

export const setTime = (time) => ({
  type: "SET_TIME",
  payload: time,
});

export const setAssignmentWeight = (assignmentWeight) => ({
  type: "SET_ASSIGNMENT_WEIGHT",
  payload: assignmentWeight,
});

export const setPassGrade = (passGrade) => ({
  type: "SET_PASS_GRADE",
  payload: passGrade,
});
