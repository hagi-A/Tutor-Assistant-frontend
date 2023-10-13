import React from 'react';

const UpcomingClasses = () => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-md">
      <h2 className="text-xl font-semibold mb-4">Upcoming Classes</h2>
      {/* You can map over your upcoming classes data here */}
      <ul>
        <li className="mb-2">
          <span className="text-gray-600">Class Name:</span> Math 101
        </li>
        <li className="mb-2">
          <span className="text-gray-600">Date:</span> September 15, 2023
        </li>
        {/* Add more class details here */}
      </ul>
    </div>
  );
}

export default UpcomingClasses;
