import React from 'react';
import { Switch } from 'react-router-dom';

import NavBar from './components/NavBar';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Switch>
        <NavBar />
      </Switch>
    </div>
  );
}

export default App;
