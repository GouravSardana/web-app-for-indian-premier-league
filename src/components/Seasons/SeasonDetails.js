import React from "react";
import {Link} from 'react-router-dom';
import axios from 'axios';

// components
import Navbar from "../Navbar/Navbar";
import Preloader from "../Preloader/Preloader";

class SeasonDetails extends  React.Component{
    state = { }

  componentDidMount() {
      const season_id = this.props.match.params.id;
      axios.get(`https://iplserver.herokuapp.com/all-seasons/matches/${season_id}`)
        .then((res) => {
          this.setState({seasonFixtures : res.data})
        })
        .catch((err) => {
          console.log(err);
        })

      axios.get(`https://iplserver.herokuapp.com/all-seasons/${season_id}`)
        .then((res) => {
          this.setState({...this.state, seasonStats : res.data})
        })
        .catch((err) => {
          console.log(err);
        })

    axios.get(`https://iplserver.herokuapp.com/all-players/`)
      .then((res) => {
        this.setState({...this.state, players : res.data})
      })
      .catch((err) => {
        console.log(err);
      })

    axios.get("https://iplserver.herokuapp.com/all-teams/")
      .then((res) => {
        this.setState({...this.state, teams : res.data});
      })
      .catch((err) => {
        console.log(err);
      })
  }


  render() {
    const seasonFixtures = this.state.seasonFixtures;
    const seasonStats = this.state.seasonStats;
    const players = this.state.players;
    const teams = this.state.teams;

    const renderSeasonFixtures = (seasonFixtures && teams) ? (seasonFixtures.reverse().map((fixture, index) => {
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
            { (fixture.Win_Type === "by runs") && <p className="center-align"><b><i>{teams[parseInt(fixture.Match_Winner_Id)-1].Team_Name} won by {fixture.Won_By} runs</i></b></p>}
            { (fixture.Win_Type === "by wickets") && <p className="center-align"><b><i>{teams[parseInt(fixture.Match_Winner_Id)-1].Team_Name} won by {fixture.Won_By} wickets</i></b></p>}
          </div>
          <div className="card-action">
            <h6 className="grey-text"><b><i className="fas fa-map-marker-alt"></i> <i>{fixture.Venue_Name}, {fixture.City_Name}</i></b></h6>
          </div>
        </div>
        </Link>
      )
    })) : (<p><Preloader /></p>)

    const renderSeasonStats = (seasonStats && players) ? (seasonStats.map((stat, index) => {
      return(
        <div key={index}>
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
    })) : (<p><Preloader /></p>)

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






