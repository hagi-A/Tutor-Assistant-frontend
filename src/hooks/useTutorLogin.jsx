import { useState } from "react";
import { useTutorContext } from "./useTutorContext";

export const useTutorLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useTutorContext();

  const tutorlogin = async (emailOrUsername, password) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch("/api/tutor/tutorlogin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ emailOrUsername, password }),
    });
    const json = await response.json();
    // console.log(json);
    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
      return;
    }
    if (response.ok) {
      // save the user to local storage
      localStorage.setItem("tutor", JSON.stringify(json));

      // update the auth context
      // dispatch({ type: "LOGIN", payload: json });

      // update loading state
      setIsLoading(false);
    }
  };

  return { tutorlogin, isLoading, error };
};
