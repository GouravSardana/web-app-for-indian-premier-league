import React from "react";
import {Link} from 'react-router-dom';

// components
import Navbar from "../Navbar/Navbar";

// data
import matches from '../../data/matches.json';
import teams from '../../data/teams.json'
import players from '../../data/players.json'
import seasons from '../../data/seasons.json';


class SeasonDetails extends  React.Component{
    state = { }

  componentDidMount() {
    const seasonFixtures = matches.filter((match) => match.Season_Id.toLocaleString() === this.props.match.params.id);
    const seasonStats = seasons.filter((seasons) => seasons.Season_Id.toLocaleString() === this.props.match.params.id);
    console.log(seasonFixtures)
    this.setState({seasonFixtures, seasonStats, players});
  }


  render() {
    const seasonFixtures = this.state.seasonFixtures;
    const seasonStats = this.state.seasonStats;

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

    const renderSeasonStats = (seasonStats) ? (seasonStats.map((stat, index) => {
      return(
        <div>
          <div className="col m4 s12">
            <div className="card z-depth-0 playerCard">
              <div className="card-content">
                <p><b>Best Batsman <img src="https://img.icons8.com/pastel-glyph/64/000000/cap--v2.png" height="40px" alt=""/></b></p>
                <img src="https://img.icons8.com/office/80/000000/webcam-man.png" alt="" />
                <h5 className="playerName indigo-text text-darken-4">{players[parseInt(stat.Orange_Cap_Id) - 1].Player_Name}</h5>
                <div className="card-action">
                  {players[parseInt(stat.Orange_Cap_Id) - 1].Batting_Hand} Batsman, {players[parseInt(stat.Orange_Cap_Id) - 1].Country}
                </div>
              </div>
            </div>
          </div>
          <div className="col m4 s12">
            <div className="card z-depth-0 playerCard">
              <div className="card-content">
                <p><b>Best Bowler <img src="https://img.icons8.com/pastel-glyph/64/000000/cap--v2.png" height="40px" alt=""/></b></p>
                <img src="https://img.icons8.com/office/80/000000/webcam-man.png" alt="" />
                <h5 className="playerName indigo-text text-darken-4">{players[parseInt(stat.Purple_Cap_Id) - 1].Player_Name}</h5>
                <div className="card-action">
                  {players[parseInt(stat.Purple_Cap_Id) - 1].Bowling_Skill} Bowler, {players[parseInt(stat.Purple_Cap_Id) - 1].Country}
                </div>
              </div>
            </div>
          </div>

          <div className="col m4 s12">
            <div className="card z-depth-0 playerCard">
              <div className="card-content">
                <p><b>Man of the series <img src="https://img.icons8.com/wired/64/000000/prize.png" alt="" height="40px"/></b></p>
                <img src="https://img.icons8.com/office/80/000000/webcam-man.png" alt="" />
                <h5 className="playerName indigo-text text-darken-4">{players[parseInt(stat.Man_of_the_Series_Id) - 1].Player_Name}</h5>
                <div className="card-action">
                  {players[parseInt(stat.Man_of_the_Series_Id) - 1].Batting_Hand} Batsman,  {players[parseInt(stat.Man_of_the_Series_Id) - 1].Bowling_Skill}  Bowler, {players[parseInt(stat.Man_of_the_Series_Id) - 1].Country}
                </div>
              </div>
            </div>
        </div>
        </div>
      )
    })) : (<p>Loading stats...</p>)

    return(
      <div>
        <Navbar />
        <div className="container">
          <h3 className="indigo-text text-darken-4">Season Stats</h3>
          <div className="divider"></div>
          <div className="row">
            {renderSeasonStats}
          </div>

          <h3 className="indigo-text text-darken-4">Season Fixtures {this.props.Season_Id}</h3>
          <div className="divider"></div>
          {renderSeasonFixtures}
        </div>
      </div>

    )
  }
}
export default SeasonDetails;






