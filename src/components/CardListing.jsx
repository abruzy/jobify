import React from 'react';

function CardListing() {
  return (
    <div className="flex-grow bg-gray-100 h-screen flex flex-col p-3">
      <form className="mb-5 bg-white h-16 shadow-xs flex items-center px-4">
        <img src="/vectors/search.svg" alt="search" />
        <input className="flex-grow ml-3 font-semibold text-lg text-gray-700 focus:outline-none" placeholder="Search job" />
        <select className="bg-transparent focus:outline-none w-20">
          <option>Jobs</option>
          <option>People</option>
        </select>
        <button type="submit" className="bg-purple-600 text-white py-2 px-8 ml-6 rounded">Search</button>
      </form>
    </div>
  );
}

export default CardListing;
