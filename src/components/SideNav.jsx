import React from 'react';
import { Link } from 'react-router-dom';

function SideNav() {
  return (
    <aside className="w-64 h-screen flex flex-col bg-white">
      <Link to="/" className="h-16 px-4 text-xl font-bold flex items-center mb-4">Jobify</Link>

      <div className="text-sm px-2">
        <div className="flex items-center justify-between">
          <span className="text-gray-700">Compensation</span>
          <span className="font-semibold">USD $10k/month</span>
        </div>
        <div className="range-rod my-4 bg-purple-300 relative">
          <span className="knob" style={{ left: '0%' }} />
        </div>

        <p className="text-gray-700 mt-8 mb-2">Remote</p>
        <div className="flex items-center">
          <input type="checkbox" className="mr-3" />
          Yes
        </div>
        <div className="flex items-center">
          <input type="checkbox" className="mr-3" />
          No
        </div>
      </div>
    </aside>
  );
}

export default SideNav;
