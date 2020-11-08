/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Loader from './Loader';
import DevPage from './DevPage';
import JobPage from './JobPage';

const size = 20;
const aggregate = false;
const offset = 0;

const jobApiURL = `https://search.torre.co/opportunities/_search/?offset=${offset}&size=${size}&aggregate=${aggregate}`;

const peopleApiURL = `https://search.torre.co/people/_search/?[offset=${offset}&size=${size}&aggregate=${aggregate}`;

function SearchBar({ id, type }) {
  const [loading, setLoading] = useState(false);
  const [searchType, setSearchType] = useState('job');
  const [searchResult, setSearchResult] = useState([]);
  const [queryType, setQueryType] = useState('job');

  const fetchData = async (query, type) => {
    setSearchResult([]);
    setQueryType(type);
    try {
      if (type === 'people') {
        const data = await axios.post(peopleApiURL, {
          name: {
            term: query,
          },
        });
        setSearchResult(data.data.results);
      } else if (type === 'job') {
        const data = await axios.post(jobApiURL, {
          'skill/role': {
            text: query,
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

  useEffect(() => {
    if (id && type) {
      fetchData(id, type);
    }
  }, [id, type]);

  const handleSubmit = async e => {
    e.preventDefault();

    const searchValue = e.target.search.value;

    fetchData(searchValue, searchType);
  };

  return (
    <div className="flex-grow bg-gray-100 h-screen flex flex-col p-3">
      <form onSubmit={e => handleSubmit(e)} className="mb-5 bg-white h-16 shadow-xs flex items-center px-4">
        <img src="/vectors/search.svg" alt="search" />
        <input type="text" name="search" className="flex-grow ml-3 font-semibold text-lg text-gray-700 focus:outline-none" placeholder="Search job or people" required />
        <select
          onChange={e => {
            const selectedType = e.target.value;
            setSearchType(selectedType);
          }}
          className="bg-transparent focus:outline-none w-20"
        >
          <option value="job">Jobs</option>
          <option value="people">People</option>
        </select>
        <button type="submit" className="bg-purple-600 text-white py-2 px-8 ml-6 rounded">Search</button>
      </form>
      { (loading || searchResult.length === 0) && <Loader /> }
      {
        queryType === 'job' && searchResult.length > 0 && <JobPage searchResult={searchResult} />
      }

      {
        queryType === 'people' && searchResult.length > 0 && <DevPage searchResult={searchResult} />
      }
    </div>
  );
}

export default SearchBar;
