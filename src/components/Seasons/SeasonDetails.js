import React from "react";
import {Link} from 'react-router-dom';

// data
import matches from '../../data/matches.json';
import teams from '../../data/teams.json'
import Navbar from "../Navbar/Navbar";

class SeasonDetails extends  React.Component{
    state = { }

  componentDidMount() {
    const seasonFixtures = matches.filter((match) => match.Season_Id.toLocaleString() === this.props.match.params.id)
    console.log(seasonFixtures)
    this.setState({seasonFixtures});
  }


  render() {
    const seasonFixtures = this.state.seasonFixtures;

    const renderSeasonFixtures = (seasonFixtures) ? (seasonFixtures.reverse().map((fixture, index) => {
      const matchesCount = seasonFixtures.length;
      return(
        <Link key={index} to={`/all-seasons/season${fixture.Season_Id}/match${fixture.Match_Id}`}>
        <div className="card fixtureCard z-depth-0">
          <div className="card-content">
            { (index === 0) && <h6 className="grey-text"><b><i className="fas fa-star"></i> <i>FINAL</i></b></h6> }
            { (index === 1) && <h6 className="grey-text"><b><i className="fas fa-star"></i> <i>QUALIFIER 2</i></b></h6> }
            { (index === 2) && <h6 className="grey-text"><b><i className="fas fa-star"></i> <i>ELIMINATOR</i></b></h6> }
            { (index === 3) && <h6 className="grey-text"><b><i className="fas fa-star"></i> <i>QUALIFIER 1</i></b></h6> }

            <p className="grey-text"><b><i>Match {matchesCount - index} played on {fixture.Match_Date}</i></b></p>
            <div className="matchDetailShort">
              <div>
                <h6 className="teamName indigo-text text-darken-4"><img className="textMiddle" src={teams[fixture.Team_Name_Id - 1].Img_Src} height="60px" alt="" /> {teams[fixture.Team_Name_Id - 1].Team_Name}</h6>
              </div>
              <div>
                <h4 className="blue-text text-darken-4">VS</h4>
              </div>
              <div>
                <h6 className="teamName indigo-text text-darken-4"><img className="textMiddle" src={teams[fixture.Opponent_Team_Id - 1].Img_Src} height="80px" alt="" /> {teams[fixture.Opponent_Team_Id - 1].Team_Name}</h6>
              </div>
            </div>
          </div>
          <div className="card-action">
            <h6 className="grey-text"><b><i className="fas fa-map-marker-alt"></i> <i>{fixture.Venue_Name}, {fixture.City_Name}</i></b></h6>
          </div>
        </div>
        </Link>
      )
    })) : (<p>Loading fixtures ...</p>)

    return(
      <div>
        <Navbar />
        <div className="container">
          <h3 className="indigo-text text-darken-4">Fixtures for season {this.props.Season_Id}</h3>
          <div className="divider"></div>
          {renderSeasonFixtures}
        </div>
      </div>

    )
  }
}
export default SeasonDetails;



