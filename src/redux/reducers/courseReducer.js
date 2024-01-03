// courseReducer.js

const initialState = {
  courseCode: "",
  courseTitle: "",
  // Other course-related state properties...
};

export const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_COURSE_CODE":
      return { ...state, courseCode: action.payload };

    case "SET_COURSE_TITLE":
      return { ...state, courseTitle: action.payload };

    // Handle other course-related actions...

    default:
      return state;
  }
};

// export default courseReducer;
