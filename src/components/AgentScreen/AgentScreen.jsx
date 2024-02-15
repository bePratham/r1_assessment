import React, { useState, useEffect }  from 'react'
import Navbar from './Navbar'
import { useFBAuth } from '../../contexts/facebookContext';

const AgentScreen = () => {
  const { FBuserLoggedIn,currentFBUser } = useFBAuth();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (FBuserLoggedIn) {
      window.FB.api(
        '/me',
        'GET',
        { 'fields': 'id,name' },
        function (response) {
          console.log(response);
          console.log(currentFBUser.accessToken);
        }
      );
    }
  }, [FBuserLoggedIn]);

  if (isLoading && !FBuserLoggedIn) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{display:'flex'}}>
      <Navbar />
      hellodiv
  
    </div>
  );
}

export default AgentScreen