import React from 'react';
import ChatPage from './Cards/ChatPage';

const Conversation = ({ selectedItem }) => {
  return (
    selectedItem ? (
      <div className="h-screen w-1/2 flex-row bg-gray-100"> 
         <h1 className='font-bold text-2xl p-2.5 border-y-2 border-slate-300'>
          {selectedItem.senders.data[0].name}
         </h1>
         <div className='h-max'>
            <ChatPage data={selectedItem}/>
         </div>
      </div>
    ) : (
      <div className="w-1/4 h-screen p-4 bg-slate-200">
        <div className=" flex items-center justify-center text-gray-100">
          
        </div>
      </div>
    )
  );
};

export default Conversation;
