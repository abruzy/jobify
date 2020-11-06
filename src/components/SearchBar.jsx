import React, { useState } from 'react';
import axios from 'axios';

import Loader from './Loader';
import DevProfile from './DevProfile';

const size = 20;
const aggregate = false;
const offset = 0;

const jobApiURL = `https://search.torre.co/opportunities/_search/?offset=${offset}&size=${size}&aggregate=${aggregate}`;

const peopleApiURL = `https://search.torre.co/people/_search/?[offset=${offset}&size=${size}&aggregate=${aggregate}`;

function SearchBar() {
  const [loading, setLoading] = useState(false);
  const [type, setType] = useState('Job');
  const [searchResult, setSearchResult] = useState([]);

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);

    const searchValue = e.target.search.value;

    try {
      if (type === 'People') {
        const data = await axios.post(peopleApiURL, {
          name: {
            term: searchValue,
          },
        });
        setSearchResult(data.data.results);
      } else {
        const data = await axios.post(jobApiURL, {
          'skill/role': {
            text: searchValue,
            experience: 'potential-to-develop',
          },
        });
        setSearchResult(data.data.results);
      }
    } catch (error) {
      throw new Error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex-grow bg-gray-100 h-screen flex flex-col p-3">
      <form onSubmit={e => handleSubmit(e)} className="mb-5 bg-white h-16 shadow-xs flex items-center px-4">
        <img src="/vectors/search.svg" alt="search" />
        <input type="text" name="search" className="flex-grow ml-3 font-semibold text-lg text-gray-700 focus:outline-none" placeholder="Search job or people" required />
        <select
          onChange={e => {
            const selectedType = e.target.value;
            setType(selectedType);
          }}
          className="bg-transparent focus:outline-none w-20"
        >
          <option value="Job">Jobs</option>
          <option value="People">People</option>
        </select>
        <button type="submit" className="bg-purple-600 text-white py-2 px-8 ml-6 rounded">Search</button>
      </form>
      { loading && <Loader /> }
      <DevProfile searchResult={searchResult} />
    </div>
  );
}

export default SearchBar;
