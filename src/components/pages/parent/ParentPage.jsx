import React from 'react'
import Dashboard from './dashboard/Dashboard';
import Sidebar from './dashboard/Sidebar';
import TodoWrapper from './TodoList/TodoWrapper'

const ParentPage = () => {
  return (
    <div className="flex">
      <div className="basis-[12%] h-[100vh]">
        <Sidebar />
      </div>
      <div className="basis-[88%]  border h-[100vh] overflow-scroll">
        <Dashboard />
        <div className=" pt-6 px-6 min-h-screen bg-slate-200 ">
          <div className="flex float-right">
            <TodoWrapper />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ParentPage