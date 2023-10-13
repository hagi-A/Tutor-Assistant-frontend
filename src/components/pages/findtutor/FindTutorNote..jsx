import React from 'react';
import findNote from  '../../../images/findNote.jpg'
import hireNote from '../../../images/hireNote.jpg'

const FindTutorNote = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <div className="container mx-auto p-9 bg-white rounded-lg shadow-md">
        <div className="flex flex-col mb-2 md:flex-row">
          {/* First Row: Image on Right, Text on Left */}
          <div className="md:w-1/2 md:pr-4 mb-2 mt-40 text-center font-light md:mb-0">
            <h1 className="text-3xl font-light mb-4">Find and Hire Tutors</h1>
            <p className="text-gray-600 mb-4">
              Looking for experienced and dedicated tutors to help you excel in your studies? Our platform connects students with qualified tutors in various subjects.
            </p>
            <button className="mt-5 text-xl border border-violet-500 text-center text-violet-500   px-4 py-2 rounded hover:bg-violet-300 hover:text-white">Get Started</button>
          </div>
          <div className="md:w-1/2 md:pl-4">
            <img src={findNote} alt="Tutor" className="w-full h-auto rounded-lg max-w-xl object-contain" />
          </div>
        </div>
        <div className="flex flex-col  text-center md:flex-row mt-8">
          {/* Second Row: Image on Left, Text on Right */}
          <div className="md:w-1/2 md:pr-4">
            <img src={hireNote} alt="Tutor" className="w-full h-auto rounded-lg max-w-xl object-contain" />
          </div>
          <div className="md:w-1/2 md:pl-4 mb-6 md:mb-0 font-light mt-40">
            <h2 className="text-3xl font-light mb-4">Hire a Tutor Today</h2>
            <p className="text-gray-600 mb-4">
              Our tutors are experienced professionals dedicated to helping you succeed. Whether you need help with a specific subject or want to improve your study skills, we've got you covered.
            </p>
            <button className="mt-5 text-xl border border-violet-500 text-center text-violet-500   px-4 py-2 rounded hover:bg-violet-300 hover:text-white">Find a Tutor</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindTutorNote;
