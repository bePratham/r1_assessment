import React,{useEffect} from "react";
import {
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import Login from "./components/Login/Login";
import Signup from "./components/SignUp/SignUp";
import { useAuth } from "./contexts/authContext";
import Home from "./components/FB Pages/Home";
import Integrated from "./components/FB Pages/Integrated";
import AgentScreen from "./components/AgentScreen/AgentScreen";

function App() {
  const {userLoggedIn,loading }=useAuth();
  const token=localStorage.getItem(process.env.REACT_APP_FB_TOKEN) || false;

  // useEffect(() => {
  
  // }, []);

  if (loading) {
   
    return <div>Loading...</div>;
  }
  return (
      <Routes>
        <Route
          path="/"
          element={userLoggedIn ? <Home /> : <Navigate to="/login" />}
          />
        <Route path="/login" element={userLoggedIn ? <Navigate to="/" /> : <Login />} />
        <Route path="/signup" element={userLoggedIn ? <Navigate to="/" /> : <Signup />} />
        <Route path="*" element={<Navigate to="/login" />} />

        <Route path="/integrationSuccess" element={token&&userLoggedIn?<Integrated/>:<Navigate to="/"/>}/>
        <Route path="/integrationSuccess/agentScreen" element={token&&userLoggedIn?<AgentScreen/>:<Navigate to="/"/>}/>
      </Routes>
    
  );
}

export default App;
