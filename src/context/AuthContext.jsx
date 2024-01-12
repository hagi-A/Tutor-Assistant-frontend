import { createContext, useReducer, useEffect, useState } from "react";

export const AuthContext = createContext();

export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { user: action.payload };
    case "LOGOUT":
      return { user: null };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
  });

  const [user, setUser] = useState(null);
  const setUserData = (data) => {
    setUser(data);
    dispatch({ type: "LOGIN", payload: data });
  };

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    console.log(setUserData);

    if (storedUser) {
      setUser(storedUser);
      dispatch({ type: "LOGIN", payload: storedUser });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);
  

  //   useEffect(() => {
  //     const user = JSON.parse(localStorage.getItem("user"));

  //     if (user) {
  //       dispatch({ type: "LOGIN", payload: user });
  //     }
  //   }, []);

  console.log("AuthContext state: ", state);

  return (
    // <AuthContext.Provider value={{ ...state, dispatch }}>
    //   {children}
    // </AuthContext.Provider>
    <AuthContext.Provider value={{ user, setUser, dispatch }}>
      {children}
      {/* //{" "} */}
    </AuthContext.Provider>
  );
};

// export const TutorContextProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(tutorReducer, {
//     tutor: null,
//   });

//   const [tutor, setTutor] = useState(null);
//   const setTutorData = (data) => {
//     setTutor(data);
//     dispatch({ type: "LOGIN", payload: data });
//   };
//   useEffect(() => {
//     const storedTutor = JSON.parse(localStorage.getItem("tutor"));
//     console.log(setTutorData);

//     if (storedTutor) {
//       setTutor(storedTutor);
//       dispatch({ type: "LOGIN", payload: storedTutor });
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("tutor", JSON.stringify(tutor));
//   }, [tutor]);
//   console.log("TutorContext state: ", state);

//   return (
//     // <TutorContext.Provider value={{ ...state, dispatch }}>
//     //   {children}
//     // </TutorContext.Provider>
//     <TutorContext.Provider value={{ tutor, setTutor }}>
//       {children}
//     </TutorContext.Provider>
//   );
// };
