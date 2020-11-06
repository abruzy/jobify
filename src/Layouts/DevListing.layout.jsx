import React from 'react';

import CardListing from '../components/CardListing';
import SideNav from '../components/SideNav';

function DevListing() {
  return (
    <div className="flex">
      <SideNav />
      <CardListing />
    </div>
  );
}

export default DevListing;
