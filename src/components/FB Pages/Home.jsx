import React from "react";
import { useAuth } from "../../contexts/authContext/index";
import { doSignOut } from "../../firebase/auth";
const Home = () => {
  const { currentUser } = useAuth();
  return (
    <div className="bg-blue-800 flex justify-center items-center h-screen">
      <div className="flex flex-col justify-center items-center p-25 bg-white p-6 rounded-md shadow-md w-1/2">
        <p className="text-lg font-bold mb-6">Facebook Page Integration</p>
        <button className="w-80 h-16 bg-blue-600 text-white text-lg font-semibold rounded-md">
          Connect Page
        </button>
      </div>
    </div>
  );
};

export default Home;
