import React from 'react';

const RetreatList = ({ retreats }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {retreats.map((retreat) => (
        <div key={retreat.id} className="bg-white rounded-lg shadow-md overflow-hidden">
          <img src={retreat.image} alt={retreat.title} className="w-full h-48 object-cover"/>
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">{retreat.title}</h2>
            <p className="text-gray-700 mb-2">{retreat.description}</p>
            <p className="text-gray-600 mb-1">Date: {new Date(retreat.date).toLocaleDateString()}</p>
            <p className="text-gray-600 mb-1">Location: {retreat.location}</p>
            <p className="text-gray-900 font-semibold">Price: ${retreat.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RetreatList;
