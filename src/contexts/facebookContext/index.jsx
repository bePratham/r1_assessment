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
            console.log(response)
            if (response.status === 'connected') {
              setFBUserLoggedIn(true);
              console.log("User is logged in");
              navigate("/integrationsuccess");
              // Access other properties if needed: response.authResponse.userID, response.authResponse.accessToken
            } else {
              console.log("User is not logged in");
              // Handle other states if needed
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
            navigate("/integrationSuccess")
            console.log(response);
          } catch (error) {
            console.error(error);
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