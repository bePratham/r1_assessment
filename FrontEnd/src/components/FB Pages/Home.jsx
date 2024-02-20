import React, { useState, useEffect } from "react";

import { useFBAuth } from "../../contexts/facebookContext";

const Home = () => {
  
  const { error,handleLogin } = useFBAuth();
  const [err, setError] = useState(error);
  useEffect(()=>{
    setError(error)
  },)
  
  return (
    <div className="bg-blue-800 flex justify-center items-center h-screen">
      <div className="flex flex-col justify-center items-center p-25 bg-white p-6 rounded-md shadow-md w-1/2">
        <p className="text-lg font-bold mb-6">Facebook Page Integration</p>
        <button
          onClick={()=>{
           setError("");
            handleLogin();}}
          className="w-1/2 h-16 bg-blue-600 text-white text-lg font-semibold rounded-md"
        >
          Connect Page
        </button>
        <div className="text-red-500">{err?err:""}</div>
      </div>
    </div>
  );
};

export default Home;
