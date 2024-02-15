import React,{ useContext, useEffect, useState } from 'react';
import {
    getFacebookLoginStatus,
    initFacebookSdk,
    fbLogin
  } from "../../utils/FacebookSDK";
import { useNavigate } from 'react-router';
  
const FBAuthContext = React.createContext();

export function useFBAuth(){
    return useContext(FBAuthContext);
}

export function FBAuthProvider({children}){
  
  const [currentFBUser,setCurrentFBUser]=useState({});
  const [FBuserLoggedIn,setFBUserLoggedIn] = useState(false);
  const [error,setError] = useState("");
  const navigate=useNavigate();

    useEffect(() => {
        // Check Facebook login status on mount
        initFacebookSdk().then(() => {
          getFacebookLoginStatus(navigate).then((response) => {
           setCurrentFBUser(response.authResponse);
            if (response.status === 'connected') {
              setFBUserLoggedIn(true);
              console.log("User is logged in");
            } else {
              console.log("User is not logged in");
            }
          });
        });
      }, []);

      const handleLogin = async() => {
        if(FBuserLoggedIn){
          console.log(FBuserLoggedIn);
          navigate("/integrationsuccess")
        }
        else{
          try {
            const response = await fbLogin();
            setFBUserLoggedIn(true);
            console.log(response);
            navigate("/integrationSuccess")
          } catch (error) {
            console.log(error.message);
            setError(error.message);
            // Handle error if needed
          }
        }
      };

    const value={
        handleLogin,
        currentFBUser,
        FBuserLoggedIn,
        error
    }
    return <FBAuthContext.Provider value={value}>
        {children}
    </FBAuthContext.Provider>
}