// tutorSlice.js
import { createSlice } from "@reduxjs/toolkit";

const tutorSlice = createSlice({
  name: "tutor",
  initialState: null,
  reducers: {
    setTutorData: (state, action) => {
      return action.payload;
    },
  },
});

export const { setTutorData } = tutorSlice.actions;
export default tutorSlice.reducer;
// export default tutorReducer
