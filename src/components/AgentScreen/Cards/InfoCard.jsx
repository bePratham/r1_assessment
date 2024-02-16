import React from "react";

const InfoCard = ({ person }) => {
  console.log(person);
  return (
    <div>
      <div className="bg-white py-7 flex flex-col items-center justify-center">
        <img
          className="border rounded-full w-1/4"
          src={person.profileImageLink}
          alt=""
        />
        <h2 className="font-bold text-lg">
          {person.firstName} {person.lastName}
        </h2>
        <p className="text-sm font-semibold text-gray-500"> &#x2022; Offline</p>
        <div className="flex space-x-3 mt-2">
          <button className="border border-slate-400 px-2 rounded">
            📞 Call
          </button>
          <button className="border border-slate-400 px-2 rounded flex items-center">
            <img
              src="https://w7.pngwing.com/pngs/858/581/png-transparent-profile-icon-user-computer-icons-system-chinese-wind-title-column-miscellaneous-service-logo.png"
              alt=""
              className="h-auto w-6 mr-2"
            />
            Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
