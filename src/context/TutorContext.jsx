import { createContext, useReducer, useEffect, useState } from "react";

export const TutorContext = createContext();

export const tutorReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { tutor: action.payload };
    case "LOGOUT":
      return { tutor: null };
    default:
      return state;
  }
};

export const TutorContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(tutorReducer, {
    tutor: null,
  });

  const [tutor, setTutor] = useState(null);
  const setTutorData = (data) => {
    setTutor(data);
    dispatch({ type: "LOGIN", payload: data });
  }
  useEffect(() => {
    const storedTutor = JSON.parse(localStorage.getItem("tutor"));
    console.log(setTutorData);

    if (storedTutor) {
      setTutor(storedTutor);
      dispatch({ type: "LOGIN", payload: storedTutor });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tutor", JSON.stringify(tutor));
  }, [tutor]);
  console.log("TutorContext state: ", state);

  return (
    // <TutorContext.Provider value={{ ...state, dispatch }}>
    //   {children}
    // </TutorContext.Provider>
    <TutorContext.Provider value={{ tutor, setTutor }}>
      {children}
    </TutorContext.Provider>
  );
};
