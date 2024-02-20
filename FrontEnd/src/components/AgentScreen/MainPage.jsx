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
    const saveInboxToBackend = async () => {
      const filteredData = inbox.map((conversation) => ({
        id: conversation.id,
        senders: conversation.senders.data,
        messages: conversation.messages.data,
      }));
      // Save inbox data to your backend
      console.log(filteredData);
      try {
        const response = await fetch('http://localhost:8080/api/conversations', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(filteredData),
        });

        if (response.ok) {
          console.log('Inbox data successfully saved!');
          // Handle success as needed
        } else {
          console.error('Failed to save inbox data');
          // Handle failure as needed
        }
      } catch (error) {
        console.error('Error:', error);
        // Handle error as needed
      }
    };
    fetchDataFromFacebook(); 
    if(inbox){
      saveInboxToBackend();
    }
  },[selectedItem])
 
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
