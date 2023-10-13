import React from 'react';
import Sidebar from './sidebar/Sidebar';
import UpcomingClasses from './UpcomingClasses';
import Quizzes from './Quizzes';
import Schedules from './Schedules';
import Progress from './Progress';

function StudentPage() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
          <div className="container mx-auto px-6 py-8">
            <h1 className="text-2xl font-semibold text-gray-800 mb-4">Dashboard</h1>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
              <UpcomingClasses />
              <Quizzes />
              <Schedules />
              <Progress />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default StudentPage;
