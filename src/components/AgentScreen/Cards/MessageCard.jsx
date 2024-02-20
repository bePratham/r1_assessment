import React from "react";

const MessageCard = ({ firstName, lastName, type, content, title, time }) => {
  
  return (
    <div className="overflow-hidden">
      <div className="flex justify-between">
        <div className="flex items-center">
          <img
            className="h-8 w-8 object-cover rounded-full"
            src="https://cdn.iconscout.com/icon/free/png-256/free-checkbox-2652909-2202826.png"
            alt="Profile"
          />
          <div className="flex flex-col ml-2">
            <h1 className="text-lg font-bold">
              {firstName} {lastName}
            </h1>
            <div className="text-sm text-black">{type}</div>
          </div>
        </div>
        <div className="text-xs text-gray-500 text-right align-text-top">
          {time}
        </div>
      </div>

      <div className=" text-sm font-semibold truncate">{title}</div>
      <div className="mb-2 text-sm leading-tight">{content}</div>
    </div>
  );
};

export default MessageCard;
