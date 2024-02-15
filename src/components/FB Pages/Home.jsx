import React, { useState, useEffect } from "react";
import { doSignOut } from "../../firebase/auth";

import { useFBAuth } from "../../contexts/facebookContext";
import { useNavigate } from "react-router";

const Home = () => {
  
  const [err, setError] = useState("");
  const { FBuserLoggedIn,handleLogin } = useFBAuth();
  const navigate = useNavigate(); 

  return (
    <div className="bg-blue-800 flex justify-center items-center h-screen">
      <div className="flex flex-col justify-center items-center p-25 bg-white p-6 rounded-md shadow-md w-1/2">
        <p className="text-lg font-bold mb-6">Facebook Page Integration</p>
        <button onClick={doSignOut}>SignOut</button>
        <button
          onClick={handleLogin}
          className="w-1/2 h-16 bg-blue-600 text-white text-lg font-semibold rounded-md"
        >
          Connect Page
        </button>
        <div className="text-red-500"></div>
      </div>
    </div>
  );
};

export default Home;
