import React, { useState } from 'react';
import InboxList from './InboxList';
import Conversation from './Conversation';
import Details from './Details';
import fakeData from '../DB/InboxData'; 

const MessageApp = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  
  return (
    
      <div className="flex  h-screen w-screen bg-white rounded overflow-hidden">
        {/* Div 1: List of items */}
        <InboxList people={fakeData} selectedItem={selectedItem} setSelectedItem={setSelectedItem} />


        {/* Div 2: Conversation */}
        <Conversation selectedItem={selectedItem} />

        {/* Div 3: Details */}
        <Details selectedItem={selectedItem} />
    
    </div>
  );
};

export default MessageApp;
