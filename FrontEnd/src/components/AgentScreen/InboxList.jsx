import React, { useEffect, useState } from "react";
import menu from "./icons/menu.png";
import MessageCard from "./Cards/MessageCard";

const InboxList = ({ data, selectedItem, setSelectedItem }) => {
  if (data == null) return <>Loading</>;

  return (
    <div className="w-1/4 bg-white">
      <div className="flex p-3  justify-between items-center border-2 border-slate-300">
        <img className="h-6 w-6" src={menu} alt="Menu" />
        <h1 className="text-xl font-semibold">Conversations</h1>
        <img
          className="h-6 w-6"
          src="https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_refresh_48px-512.png"
          alt="Refresh"
        />
      </div>
      <div className="h-screen pb-16 overflow-y-auto border-r-2 border-slate-300">
        <ul>
          {data.map((person) => (
            <li
              key={person.id}
              className={`cursor-pointer p-2 ${
                selectedItem === person
                  ? "bg-gray-200"
                  : "bg-white hover:bg-gray-100"
              }`}
              onClick={() => setSelectedItem(person)}
            >
              <MessageCard
                firstName={person.senders.data[0].name}
                lastName=""
                type="Facebook DM"
                content={person.messages.data[0]?.message || "No message"} // Display first message or a default text
                title="Awsome"
                time=""
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default InboxList;
