import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';


// components
import Home from "./components/Homepage/Home";
import AllSeasonsList from "./components/Seasons/AllSeasonsList";
import SeasonDetails from "./components/Seasons/SeasonDetails";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/all-seasons" component={AllSeasonsList} />
          <Route path="/all-seasons/season:id" component={SeasonDetails} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
