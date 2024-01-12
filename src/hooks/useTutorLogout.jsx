import { useTutorContext } from "./useTutorContext";

export const useTutorLogout = () => {
  const { dispatch } = useTutorContext();

  const tutorLogout = () => {
    // remove user from storage
    localStorage.removeItem("user");

    // dispatch logout action
    dispatch({ type: "LOGOUT" });
  };

  return { tutorLogout };
};
