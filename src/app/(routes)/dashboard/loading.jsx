import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="relative flex space-x-2">
        <div className="w-5 h-5 bg-lime-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
        <div className="w-5 h-5 bg-lime-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
        <div className="w-5 h-5 bg-lime-500 rounded-full animate-bounce"></div>
      </div>
    </div>
  );
};

export default Loading;
