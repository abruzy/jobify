import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Layouts/Home.layout';
import DevListing from './Layouts/DevListing.layout';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/result" component={Home} />
        <Route exact path="/" component={DevListing} />
      </Switch>
    </div>
  );
}

export default App;
