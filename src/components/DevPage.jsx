/* eslint-disable react/no-array-index-key */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

function DevPage({ searchResult }) {
  // const [state, setstate] = useState(initialState);

  console.log(searchResult);
  return (
    <div className="overflow-y-auto">
      {
        searchResult.length > 0 && searchResult.map((result, resultIdx) => (
          <div key={resultIdx} className="shadow-xs hover:shadow-xl bg-white p-4 mb-6">
            <div className="flex justify-between">
              <div className="flex">
                <div className="mr-3 h-40">
                  <img src={result.picture} alt="logo" className="max-w-full object-cover h-32" />
                </div>
                <div className="info">
                  <h2 className="font-bold text-xl pb-1">{result.name ? result.name : 'No Name Provided'}</h2>
                  <p className="text-gray-600 text-base pb-1">{result.professionalHeadline}</p>
                  <div className="flex">
                    <img src="/vectors/location.svg" alt="Location" />
                    {/* {
                      result.locations === [] ? 'No Location Provided' : result.locations[0]
                    } */}
                    <p className="text-base ml-1 text-gray-600">{result.locationName}</p>
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

DevPage.propTypes = {
  searchResult: PropTypes.array.isRequired,
};

export default DevPage;
