import React from 'react';

function HeroPage() {
  return (
    <div
      className="hero h-screen"
      style={{
        backgroundImage: "url('/images/ab.png')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="wrap flex-grow">
        <form className="mb-5 bg-white h-16 shadow-xs flex items-center px-4 rounded-xl">
          <img src="/vectors/search.svg" alt="search" />
          <input type="text" className="flex-grow ml-3 font-semibold text-lg text-gray-700 focus:outline-none" placeholder="Search something" />
          <select className="bg-transparent focus:outline-none w-20">
            <option>Jobs</option>
            <option>People</option>
          </select>
          <button type="submit" className="bg-purple-600 text-white py-2 px-8 ml-6 rounded">Search</button>
        </form>
      </div>
    </div>
  );
}

export default HeroPage;
