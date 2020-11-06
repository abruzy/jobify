/* eslint-disable react/prop-types */
import React from 'react';

import SearchBar from '../components/SearchBar';
import SideNav from '../components/SideNav';

function DevListing({ match }) {
  const { id, type } = match.params;
  return (
    <div className="flex">
      <SideNav />
      <SearchBar id={id} type={type} />
    </div>
  );
}

export default DevListing;
