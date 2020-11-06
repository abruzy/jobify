/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

function DevProfile({ searchResult }) {
  return (
    <div className="overflow-y-auto">
      {
        searchResult.map(result => (
          <div key={result.id} className="shadow-xs hover:shadow-xl bg-white p-4 mb-6">
            <div className="flex justify-between">
              <div className="flex">
                {
                  result.organizations.map(pic => (
                    <div key={pic.id} className="mr-3 h-40">
                      <img src={pic.picture} alt="logo" className="max-w-full object-cover h-32" />
                    </div>
                  ))
                }
                <div className="info">
                  <h2 className="font-bold text-xl pb-1">{result.objective}</h2>
                  <p className="text-gray-600 text-base pb-1">{result.type}</p>
                  <div className="flex">
                    <img src="/vectors/location.svg" alt="Location" />
                    {/* {
                      result.locations === [] ? 'No Location Provided' : result.locations[0]
                    } */}
                    <p className="text-base ml-1 text-gray-600">{result.locations[0]}</p>
                  </div>
                </div>
              </div>
              <div className="right">
                <div className="flex pb-3">
                  <img src="/vectors/home.svg" alt="Home" className="mr-2" />
                  {
                    result.remote === true ? 'Remote' : 'Onsite'
                  }
                  <p className="text-base text-gray-600">{result.remote}</p>
                </div>
                <div className="flex">
                  <img src="/vectors/money.svg" alt="Money" />
                  <p className="text-gray-600 text-base ml-2">USD $80k - $110k/year</p>
                </div>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  );
}

DevProfile.propTypes = {
  searchResult: PropTypes.array.isRequired,
};

export default DevProfile;
