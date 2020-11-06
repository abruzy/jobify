import React from 'react';
import { Link } from 'react-router-dom';

function SideNav() {
  return (
    <aside className="w-64 h-screen flex flex-col bg-white">
      <span className="flex justify-end pt-2 text-xs text-gray-600 px-2">Powered by Torre.co</span>
      <Link to="/" className="h-16 px-4 text-xl font-bold flex items-center mb-4">
        {' '}
        <img src="/vectors/Logo.svg" alt="brand logo" className="mr-2" />
        {' '}
        Jobify
      </Link>

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

        <p className="text-gray-700 mt-8 mb-2">Job Type</p>
        <div className="flex items-center">
          <input type="checkbox" className="mr-3" />
          Fulltime Employment(44k)
        </div>
        <div className="flex items-center">
          <input type="checkbox" className="mr-3" />
          Freelance Gigs(3.6k)
        </div>
        <div className="flex items-center">
          <input type="checkbox" className="mr-3" />
          Partime Employment(2.8k)
        </div>
        <div className="flex items-center">
          <input type="checkbox" className="mr-3" />
          Internships(1.3k)
        </div>

        <p className="text-gray-700 mt-8 mb-2">Skills</p>
        <div className="flex items-center">
          <input type="checkbox" className="mr-3" />
          Communication(4.7k)
        </div>
        <div className="flex items-center">
          <input type="checkbox" className="mr-3" />
          Software Development(4.7k)
        </div>
        <div className="flex items-center">
          <input type="checkbox" className="mr-3" />
          Sales(2.8k)
        </div>
        <div className="flex items-center">
          <input type="checkbox" className="mr-3" />
          Marketing(2.3k)
        </div>
        <div className="flex items-center">
          <input type="checkbox" className="mr-3" />
          Management(2.2k)
        </div>
        <div className="flex items-center">
          <input type="checkbox" className="mr-3" />
          Customer Service(1.2k)
        </div>
        <div className="flex items-center">
          <input type="checkbox" className="mr-3" />
          Design(1.1k)
        </div>
      </div>
    </aside>
  );
}

export default SideNav;
