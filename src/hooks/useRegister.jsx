import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useRegister = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useAuthContext();

  const register = async (
    firstName,
    LastName,
    email,
    profession,
    location,
    phoneNumber,
    ueeeResult,
    majorTaken,
    cgpa,
    priceRate,
    gradeLevel,
    selectedCVs,
    selectedImages,
  ) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch("/api/user/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName,
        LastName,
        email,
        profession,
        location,
        phoneNumber,
        ueeeResult,
        majorTaken,
        cgpa,
        priceRate,
        gradeLevel,
        selectedCVs,
        selectedImages,
      }),
    });
    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
      return;
    }
    if (response.ok) {
      // save the user to local storage
      localStorage.setItem("user", JSON.stringify(json));

      // update the auth context
      dispatch({ type: "LOGIN", payload: json });

      // update loading state
      setIsLoading(false);
    }
  };

  return { register, isLoading, error };
};
