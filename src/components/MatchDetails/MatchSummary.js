import React from "react";
import Preloader from "../Preloader/Preloader";
import axios from 'axios';

class MatchSummary extends React.Component{
  state ={

  }

  componentDidMount() {
    axios.get("https://iplserver.herokuapp.com/all-teams")
      .then((res) => {
        this.setState({teams: res.data})
      })
      .catch((err) => console.log(err))
  }


  render() {
    const matchDetails = this.props.matchDetails;
    const teams = this.state.teams;

    const renderMatchDetails = (matchDetails && teams) ? (
      <div className="card fixtureCard z-depth-0">
        <div className="card-content">
          <p className="grey-text"><b><i>Match played on {matchDetails.Match_Date}</i></b></p>
          <div className="matchDetailShort">
            <div>
              <h6 className="teamName indigo-text text-darken-4"><img className="textMiddle" src={teams[matchDetails.Team_Name_Id - 1].Img_Src} height="60px" alt="" /> {teams[matchDetails.Team_Name_Id - 1].Team_Name}</h6>
            </div>
            <div>
              <h4 className="blue-text text-darken-4">VS</h4>
            </div>
            <div>
              <h6 className="teamName indigo-text text-darken-4"><img className="textMiddle" src={teams[matchDetails.Opponent_Team_Id - 1].Img_Src} height="80px" alt="" /> {teams[matchDetails.Opponent_Team_Id - 1].Team_Name}</h6>
            </div>
          </div>

          { (matchDetails.Win_Type === "by runs") && <p className="center-align"><b><i>{teams[parseInt(matchDetails.Match_Winner_Id)-1].Team_Name} won by {matchDetails.Won_By} runs</i></b></p>}
          { (matchDetails.Win_Type === "by wickets") && <p className="center-align"><b><i>{teams[parseInt(matchDetails.Match_Winner_Id)-1].Team_Name} won by {matchDetails.Won_By} wickets</i></b></p>}

        </div>
        <div className="card-action">
          <h6 className="grey-text"><b><i className="fas fa-map-marker-alt"></i> <i>{matchDetails.Venue_Name}, {matchDetails.City_Name}</i></b></h6>
        </div>
      </div>
    ) : (<Preloader />)
    return(
      <div>
        {renderMatchDetails}
      </div>
    )
  }
}

export default MatchSummary;

