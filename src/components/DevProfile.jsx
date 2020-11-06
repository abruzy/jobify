/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

function DevProfile({ searchResult }) {
  return (
    <div className="overflow-y-auto">
      {
        searchResult.map(result => (
          <div key={result.subjectId} className="shadow-xs hover:shadow-xl bg-white p-4 mb-6">
            <div className="flex justify-between">
              <div className="flex">
                <div className="h-32 mr-3">
                  <img src="/images/companyLogo.png" alt="logo" className="max-w-full object-cover" />
                </div>
                <div className="info">
                  <h2 className="font-bold text-xl pb-1">{result.name}</h2>
                  <p className="text-gray-600 text-base pb-1">Full time employment</p>
                  <div className="flex">
                    <img src="/vectors/location.svg" alt="Location" />
                    <p className="text-base ml-1 text-gray-600">Doha, Qatar</p>
                  </div>
                </div>
              </div>
              <div className="right">
                <div className="flex pb-3">
                  <img src="/vectors/home.svg" alt="Home" />
                  <p className="text-base text-gray-600 ml-2">Remote</p>
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

export default DevProfile;
