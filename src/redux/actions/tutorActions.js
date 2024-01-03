// tutorActions.js
import { setTutorData } from "./path-to-tutor-slice";

export const updateTutorData = (tutor) => (dispatch) => {
  dispatch(setTutorData(tutor));
};
