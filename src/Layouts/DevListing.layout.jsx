import React from 'react';

import SearchBar from '../components/SearchBar';
import SideNav from '../components/SideNav';

function DevListing() {
  return (
    <div className="flex">
      <SideNav />
      <SearchBar />
    </div>
  );
}

export default DevListing;
