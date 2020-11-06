import React from 'react';
import { Link } from 'react-router-dom';

const linkClassNames = 'px-2 mx-1 font-semibold';

function NavBar() {
  return (
    <nav className="flex bg-white justify-between items-center h-20 px-12">
      <Link to="/" className="flex items-center justify-center">
        <img src="/vectors/Logo.svg" alt="logo" className="h-12" />
        <span className="ml-4 font-bold text-xl">Jobify</span>
      </Link>

      <div className="links">
        <Link to="/" className={linkClassNames}>Software Jobs</Link>
        <Link to="/" className={linkClassNames}>Marketing Jobs</Link>
        <Link to="/" className={linkClassNames}>Skills</Link>
        <a href="https://torre.co" className={linkClassNames} target="_blank" rel="noreferrer">Visit Torre</a>
        <a href="https://torre.co/en/jobs/post" target="_blank" rel="noreferrer">
          <button type="submit" className="text-white bg-blue-600 py-2 px-8 ml-6 rounded">Post a job</button>
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
