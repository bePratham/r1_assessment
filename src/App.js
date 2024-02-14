import React from "react";
import {
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "./components/Login/Login";
import Signup from "./components/SignUp/SignUp";
import { useAuth } from "./contexts/authContext";
import Home from "./components/FB Pages/Home";
function App() {
  const {userLoggedIn}=useAuth();
  // const navigate=Navigate();
  return (
      <Routes>
        <Route
          path="/"
          element={userLoggedIn ? <Home /> : <Navigate to="/login" />}
        />
        <Route path="/login" element={userLoggedIn ? <Navigate to="/" /> : <Login />} />
        <Route path="/signup" element={userLoggedIn ? <Navigate to="/" /> : <Signup />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
   
  );
}

export default App;
