import React from 'react';

const Quizzes = () => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-md">
      <h2 className="text-xl font-semibold mb-4">Quizzes</h2>
      {/* You can map over your quiz data here */}
      <ul>
        <li className="mb-2">
          <span className="text-gray-600">Quiz Name:</span> Quiz 1
        </li>
        <li className="mb-2">
          <span className="text-gray-600">Due Date:</span> September 20, 2023
        </li>
        {/* Add more quiz details here */}
      </ul>
    </div>
  );
}

export default Quizzes;
