import React, { useState, useEffect } from "react";

const fakeDatabase = [
  {
    id: 1,
    sender: "user",
    message: "Welcome to the chat!",
    imageUrl: "https://source.unsplash.com/vpOeXr5wmR4/600x600",
  },
  {
    id: 2,
    sender: "receiver",
    message: "Does it look good?",
    imageUrl: "https://source.unsplash.com/5VXH4RG88gc/600x600",
  },
];

const ChatComponent = () => {
  const [messages, setMessages] = useState(() => {
    return fakeDatabase;
  });
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    const newMessageObj = {
      id: messages.length + 1,
      sender: "user",
      message: newMessage,
      imageUrl: "https://source.unsplash.com/vpOeXr5wmR4/600x600",
    };

    setMessages((prevMessages) => [...prevMessages, newMessageObj]);
    setNewMessage("");
  };

  useEffect(() => {
    localStorage.setItem("chatMessages", JSON.stringify(messages));
  }, [messages]);

  return (
    <div className="w-full px-5 flex flex-col h-screen">
      <div className="flex flex-col mt-5 flex-grow overflow-y-auto">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.sender === "user" ? "justify-end" : "justify-start"
            } mb-2`}
          >
            {message.sender === "user" ? (
              <>
                <div className="bg-blue-400 text-white py-2 px-3 rounded-lg max-w-xs">
                  {message.message}
                </div>
                <img
                  src={message.imageUrl}
                  className="object-cover h-8 w-8 rounded-full ml-2"
                  alt=""
                />
              </>
            ) : (
              <>
                <img
                  src={message.imageUrl}
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

const ChatPage = () => {
  return (
    <div className="flex">
      <ChatComponent />
    </div>
  );
};

export default ChatPage;
