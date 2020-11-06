import React from 'react';

import SearchBar from '../components/SearchBar';
import DevProfile from '../components/DevProfile';
import SideNav from '../components/SideNav';

function DevListing() {
  return (
    <div className="flex">
      <SideNav />
      <div className="flex-grow bg-gray-100 h-screen flex flex-col p-3">
        <SearchBar />
        <DevProfile />
      </div>
    </div>
  );
}

export default DevListing;
