import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { UserContext } from "../App";

const Protected = (props) => {
  const token = useContext(UserContext);
  let location = useLocation();
  const { children } = props;
  console.log("token in protected", token);
  if (!token) {
    return <Navigate to="/" state={{ from: location }} replace />;
  } else {
    return children;
  }
};
export default Protected;
