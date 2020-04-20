import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';


// components
import Home from "./components/Homepage/Home";
import AllSeasonsList from "./components/Seasons/AllSeasonsList";
import SeasonDetails from "./components/Seasons/SeasonDetails";
import AllStatsList from "./components/Stats/AllStatsList";
import MatchDetail from './components/MatchDetails/MatchDetail';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/all-seasons" component={AllSeasonsList} />
          <Route exact path="/all-seasons/season:id" component={SeasonDetails} />
          <Route exact path="/all-stats" component={AllStatsList} />
          <Route exact path="/all-seasons/season:id/match:match_id" component={MatchDetail} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
