// import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import { TutorContext } from "../context/TutorContext";

export const useTutorContext = () => {
  const context = useContext(TutorContext);

  if (!context) {
    throw Error("useTutorContext must be used inside an TutorContextProvider");
  }

  return context;
};
