import React, { useState, useEffect } from "react";

const ChatComponent = ({ DATA }) => {
  const [messages, setMessages] = useState(() => DATA.data.messages.data);
  const [newMessage, setNewMessage] = useState("");
  const [senderId, setSenderId] = useState();
  const [personId,setPersonId]=useState(DATA.data.senders.data[0].id);
  const accessToken = process.env.REACT_APP_PAGE_ACCESS_TOKEN;

  useEffect(() => {
    setPersonId(DATA.data.senders.data[0].id);
    setMessages(DATA.data.messages.data);

    const intervalId = setInterval(() => {
      fetchData(); // Fetch new messages
    }, 1000);
    return () => clearInterval(intervalId);
  }, [DATA]);
    const fetchData= async()=>{
      try{
        const response = await fetch(
          `https://graph.facebook.com/me?fields=conversations{id,senders,messages{message,from}}&access_token=${accessToken}`
        );
        const data = await response.json();
        const dataRequire=data.conversations.data;

       for(let i=0;i<dataRequire.length;i++){
        if(dataRequire[i].id===DATA.data.id){
          setMessages(dataRequire[i].messages.data);
          break;
        }
       }
      } catch (error) {
        console.error("Error fetching new messages:", error);
      }
    }
  
  
  const handleSendMessage = async() => {
    const recipientId = personId;
    const messageText = newMessage;
    const url = `https://graph.facebook.com/v19.0/185800634627301/messages?recipient={id:${recipientId}}&message={text:${messageText}}&messaging_type=RESPONSE&access_token=${accessToken}`;

    const data = {
      recipient: { id: recipientId },
      message: { text: messageText },
      messaging_type: 'RESPONSE',
    }
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      const result = await response.json();

      console.log('Message sent successfully:', result);
    } catch (error) {
      console.error('Error sending message:', error);
    }
    setNewMessage("");
  };

  return (
    <div className="w-full px-5 flex flex-col h-screen">
      <div className="flex flex-col mt-5 flex-grow overflow-y-auto">
        {messages
          .slice()
          .reverse()
          .map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.from.id === "185800634627301"
                  ? "justify-end"
                  : "justify-start"
              } mb-2`}
            >
              {message.from.id === "185800634627301" ? (
                <>
                  <div className="bg-blue-400 text-white py-2 px-3 rounded-lg max-w-xs">
                    {message.message}
                  </div>
                  <img
                    src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                    className="object-cover h-8 w-8 rounded-full ml-2"
                    alt=""
                  />
                </>
              ) : (
                <>
                  <img
                    src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                    className="object-cover h-8 w-8 rounded-full mr-2"
                    alt=""
                  />
                  <div className="bg-gray-300 py-2 px-3 rounded-lg max-w-xs">
                    {message.message}
                  </div>
                </>
              )}
            </div>
          ))}
      </div>
      <div className="py-5 mb-12">
        <div className="flex items-center">
          <input
            className="flex-grow bg-gray-300 py-3 px-3 rounded-xl mr-2"
            type="text"
            placeholder="Type your message here..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded"
            onClick={handleSendMessage}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};
const ChatPage = (data) => {
  return (
    <div className="flex">
      <ChatComponent DATA={data} />
    </div>
  );
};

export default ChatPage;
