import React, { useState } from 'react';
import {useEffect} from 'react';
import InboxList from './InboxList';
import Conversation from './Conversation';
import Details from './Details';


const MessageApp = () => {
  
  const [selectedItem, setSelectedItem] = useState();
  const [inbox,setInbox]=useState();
  useEffect(()=>{
    const fetchDataFromFacebook = async () => {
      const accessToken = process.env.REACT_APP_PAGE_ACCESS_TOKEN;
    
      try {
        const response = await fetch(`https://graph.facebook.com/me?fields=conversations{id,senders,messages{message,from}}&access_token=${accessToken}`);
        const data = await response.json();
    
        setInbox(data.conversations.data);
        return data;
      } catch (error) {
        console.error("Error fetching data from Facebook:", error);
        throw error;
      }
    }; 
    fetchDataFromFacebook();   
  },[])
 
  return (
    
      <div className="flex  h-screen w-screen bg-white rounded overflow-hidden">
        {/* Div 1: List of items */}
        <InboxList data={inbox} selectedItem={selectedItem} setSelectedItem={setSelectedItem} />

        {/* Div 2: Conversation */}
        <Conversation selectedItem={selectedItem} />

        {/* Div 3: Details */}
        <Details selectedItem={selectedItem} />
    
    </div>
  );
};

export default MessageApp;
