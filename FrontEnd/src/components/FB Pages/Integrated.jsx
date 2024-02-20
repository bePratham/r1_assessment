import React from "react";
import { FBLogout } from "../../utils/FacebookSDK";
import { useNavigate } from "react-router";

const Integrated = () => {
  const navigate=useNavigate();
  return (
    <div className="bg-blue-800 flex justify-center items-center h-screen">
      <div className="flex flex-col justify-center items-center gap-6 p-25 bg-white p-6 rounded-md shadow-md w-1/3">
        <p className="text-sm font-bold mb-6">Facebook Page Integration</p>
        <p className="text-sm font-bold mb-6 ">Integrated Page: Richpanel</p>
        <button
        onClick={FBLogout}
          className="w-1/2 h-16 bg-red-600 
        text-white text-lg font-semibold rounded-md"
        >
          Delete Integration
        </button>
        <button
          onClick={()=>navigate("/integrationsuccess/agentscreen")}
          className="w-1/2 h-16 bg-blue-600 
        text-white text-lg font-semibold rounded-md"
        >
          Reply to Messages{" "}
        </button>
      </div>
    </div>
  );
};

export default Integrated;
