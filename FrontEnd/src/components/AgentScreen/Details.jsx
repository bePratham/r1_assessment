import React from 'react';
import InfoCard from './Cards/InfoCard';
import CustomerDetails from './Cards/CustomerDetails';
const Details = ({ selectedItem }) => {
  return (
    selectedItem ? (
        <div className="w-1/4 h-screen flex-row bg-slate-200"> 
            <InfoCard person={selectedItem}/>
            <CustomerDetails person={selectedItem}/>
        </div>
      ) : (
        <div className="w-1/4 h-screen p-4 bg-slate-200">
          <div className=" flex items-center justify-center text-gray-500">
            Select an item to view details
          </div>
        </div>
      )
  );
};

export default Details;
