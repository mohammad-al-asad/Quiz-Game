/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import { useAuth } from "../Contexts/AuthContext";

function PublicRoute({ Component }) {
  const { currentUser } = useAuth();
  return (
    <>
      {!currentUser ? (
        Component
      ) : (
        <Navigate to={"/"} />
      )}
    </>
  );
}

export default PublicRoute;
