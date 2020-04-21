import React from 'react';
import axios from 'axios';

// components
import Navbar from "../Navbar/Navbar";
import Preloader from "../Preloader/Preloader";


class AllStatsList extends React.Component {
  state = {

  }

  componentDidMount() {
    axios.get("https://iplserver.herokuapp.com/all-players")
      .then((res) => {
        this.setState({players: res.data})
      })
      .catch((err) =>{
        console.log(err)
      })

    axios.get("https://iplserver.herokuapp.com/all-seasons")
      .then((res) => {
        this.setState({...this.state, seasons: res.data})
      })
      .catch((err) =>{
        console.log(err)
      })
  }


  render() {
    const seasons = this.state.seasons;
    const players = this.state.players;
    const renderSeasonStats = (seasons && players) ? (seasons.reverse().map((season, index) => {
      return(
        <div key={index} className="row">
          <h5 className="grey-text"><b><i>Stats from season {season.Season_Id}, {season.Season_Year}</i></b></h5>
          <div className="col m4 s12">
            <div className="card z-depth-0 playerCard">
              <div className="card-content">
                <p><b>Best Batsman <img src="https://img.icons8.com/pastel-glyph/64/000000/cap--v2.png" height="40px" alt=""/></b></p>
                <img src="https://img.icons8.com/office/80/000000/webcam-man.png" alt="" />
                <h5 className="playerName indigo-text text-darken-4">{players[parseInt(season.Orange_Cap_Id) - 1].Player_Name}</h5>
                <div className="card-action">
                  {players[parseInt(season.Orange_Cap_Id) - 1].Batting_Hand} Batsman, {players[parseInt(season.Orange_Cap_Id) - 1].Country}
                </div>
              </div>
            </div>
          </div>
          <div className="col m4 s12">
            <div className="card z-depth-0 playerCard">
              <div className="card-content">
                <p><b>Best Bowler <img src="https://img.icons8.com/pastel-glyph/64/000000/cap--v2.png" height="40px" alt=""/></b></p>
                <img src="https://img.icons8.com/office/80/000000/webcam-man.png" alt="" />
                <h5 className="playerName indigo-text text-darken-4">{players[parseInt(season.Purple_Cap_Id) - 1].Player_Name}</h5>
                <div className="card-action">
                  {players[parseInt(season.Purple_Cap_Id) - 1].Bowling_Skill} Bowler, {players[parseInt(season.Purple_Cap_Id) - 1].Country}
                </div>
              </div>
            </div>
          </div>

          <div className="col m4 s12">
            <div className="card z-depth-0 playerCard">
              <div className="card-content">
                <p><b>Man of the series <img src="https://img.icons8.com/wired/64/000000/prize.png" alt="" height="40px"/></b></p>
                <img src="https://img.icons8.com/office/80/000000/webcam-man.png" alt="" />
                <h5 className="playerName indigo-text text-darken-4">{players[parseInt(season.Man_of_the_Series_Id) - 1].Player_Name}</h5>
                <div className="card-action">
                  {players[parseInt(season.Man_of_the_Series_Id) - 1].Batting_Hand} Batsman,  {players[parseInt(season.Man_of_the_Series_Id) - 1].Bowling_Skill}  Bowler, {players[parseInt(season.Man_of_the_Series_Id) - 1].Country}
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    })) : (<Preloader />)

    return(
      <div>
        <Navbar />
        <div className="container">
          <h3 className="indigo-text text-darken-4">All-time stats</h3>
          <div className="divider"></div>
          {renderSeasonStats}
        </div>
      </div>

    )
  }
}
export default AllStatsList;