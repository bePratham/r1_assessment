import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useAuth } from '../contexts/authContext';

const PrivateRoute = ({ isLoggedIn, element }) => {
  // const  userLoggedIn  = useAuth().userLoggedIn;
  console.log(useAuth)
  return isLoggedIn ? (element) : <Navigate to="/login" />
};

export default PrivateRoute;
