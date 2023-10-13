import React, { useContext } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext"; // Update the import path as needed
import AdminPage from "../components/admin/AdminPage";
import ParentPage from "../components/parent/ParentPage";
import StudentPage from "../components/student/StudentPage";
import SupervisorPage from "../components/supervisor/SupervisorPage";
import TutorPage from "../components/tutor/TutorPage";

const ProtectedRoute = ({ element: Element, requiredRole, ...rest }) => {
  const { user } = useContext(AuthContext);

  // Check if the user has the required role to access the route
  const isAuthorized = user.role === requiredRole;

  // Define role-based components here
  //   const roleComponents = {
  //     Admin: <AdminPage />,
  //     Parent: <ParentPage />,
  //     Student: <StudentPage />,
  //     Tutor: <TutorPage />,
  //     Supervisor: <SupervisorPage />,
  //     // Add more role components here
  //   };

  //   const componentToRender = isAuthorized ? (
  //     roleComponents[requiredRole]
  //   ) : (
  //     <Navigate to="/unauthorized" />
  //   );

  return <AdminPage />;
};

export default ProtectedRoute;
