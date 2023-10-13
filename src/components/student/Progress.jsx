import React from 'react';

const Progress = () => {
  const progressValue = 65; // Change this value to represent the student's progress

  return (
    <div className="bg-white rounded-lg p-4 shadow-md">
      <h2 className="text-xl font-semibold mb-4">Progress</h2>
      {/* You can display the student's progress here */}
      <div className="flex items-center">
        <div className="w-20 h-2 bg-gray-200 rounded-full mr-4">
          <div
            className="h-2 bg-blue-500 rounded-full"
            style={{ width: `${progressValue}%` }}
          ></div>
        </div>
        <div>
          <p className="text-gray-600">Overall Progress</p>
          <p className="font-semibold">{`${progressValue}%`}</p>
        </div>
      </div>
    </div>
  );
}

export default Progress;
