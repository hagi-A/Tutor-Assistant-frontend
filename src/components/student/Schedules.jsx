import React from 'react';

const Schedules = () => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-md">
      <h2 className="text-xl font-semibold mb-4">Schedules</h2>
      {/* You can display the student's schedule here */}
      <ul>
        <li className="mb-2">
          <span className="text-gray-600">Monday:</span> Math Class, 9:00 AM - 10:30 AM
        </li>
        <li className="mb-2">
          <span className="text-gray-600">Wednesday:</span> Science Class, 11:00 AM - 12:30 PM
        </li>
        {/* Add more schedule details here */}
      </ul>
    </div>
  );
}

export default Schedules;
