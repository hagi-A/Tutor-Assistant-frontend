import { combineReducers } from "@reduxjs/toolkit";
import { quizReducer } from "./reducers/quizReducer";
import { courseReducer } from "./reducers/courseReducer";
// import { seminarsReducer } from "./reducers/seminarReducer";
import  tutorSlice  from "./slice/tutorSlice";

const initialState = {
  isExpanded: true,
  isEditing: false,
  initialText: "Your Initial Text",
};
const highlightInitial = [];

const highlightedWordsReducer = (state = highlightInitial, action) => {
  switch (action.type) {
    case "ADD_HIGHLIGHTED_WORD":
      return [...state, action.payload];
    case "REMOVE_HIGHLIGHTED_WORD":
      return state.filter((word) => word !== action.payload);
    case "CLEAR_HIGHLIGHTED":
      return (state = []);
    default:
      return state;
  }
};

const sidePanelReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_SIDE_PANEL":
      return { ...state, isExpanded: !state.isExpanded };
    default:
      return state;
  }
};

const inputReducer = (state = initialState, action) => {
  switch (action.type) {
    case "EDIT_INPUT":
      return {
        ...state,
        initialText: action.payload,
      };
    case "TOGGLE_EDITING":
      return {
        ...state,
        isEditing: !state.isEditing,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  // panel: sidePanelReducer,
  //   seminars: seminarsReducer,
  quiz: quizReducer,
  course: courseReducer,
  tutor: tutorSlice.reducer,
  //   image: Imagereducer,
  // highlightedwords: highlightedWordsReducer,
  // input: inputReducer,
});
export default rootReducer;
