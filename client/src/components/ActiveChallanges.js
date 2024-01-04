import React from 'react';

const ActiveChallenges = () => {
  return (
    <div className="container" style={{borderColor:"2px solid"}}>
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-300 text-white">
      <h1 className="text-4xl font-bold mb-6" style={{color:"black"}}>Active Challenges</h1>
      
      <div className="w-96 p-3 bg-blue-500 border border-blue-200 rounded-lg mb-4">
        <h2 className="text-2xl font-bold mb-2">365 Days of Code</h2>
      </div>

      <div className="w-96 p-3 bg-blue-500 border border-blue-200 rounded-lg mb-4">
        <h2 className="text-2xl font-bold mb-2">Live Code</h2>
      </div>

      <div className="w-96 p-3 bg-blue-500 border border-blue-200 rounded-lg mb-4">
        <h2 className="text-2xl font-bold mb-2">21 Days of Python Coding</h2>
      </div>

      <div className="w-96 p-3 bg-blue-500 border border-blue-200 rounded-lg mb-4">
        <h2 className="text-2xl font-bold mb-2">45 Days of java Coding</h2>
      </div>  

      <div className="w-96 p-3 bg-blue-500 border border-blue-200 rounded-lg mb-4">
        <h2 className="text-2xl font-bold mb-2">24 hour Coding Challenge</h2>
      </div>
    </div>
    </div>
  );
};

export default ActiveChallenges;