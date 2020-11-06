import React from 'react';

function Loader() {
  return (
    <div className="flex-grow overflow-y-auto">
      <div className="grid gap-y-5 p-4 animate-pulse">
        <p className="text-center my-2 text-gray-900 font-semibold">Searching...</p>
        <div className="h-32 bg-gray-400 rounded" />
        <div className="h-32 bg-gray-400 rounded" />
        <div className="h-32 bg-gray-400 rounded" />
        <div className="h-32 bg-gray-400 rounded" />
      </div>
    </div>
  );
}

export default Loader;
