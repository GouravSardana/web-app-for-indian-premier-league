import React from "react";
import axios from 'axios';

import BallByBall from "./BallByBall";
import Navbar from "../Navbar/Navbar";
import Preloader from "../Preloader/Preloader";
import MatchSummary from "./MatchSummary";


class MatchDetail extends React.Component{
  state = {

  }
  componentDidMount() {
    const matchId = this.props.match.params.match_id;

    axios.get(`https://iplserver.herokuapp.com/ball-by-ball/${matchId}`)
      .then((res) => {
        this.setState({ballByBall: res.data})
      })
      .catch((err) => {
        console.log(err)
      })

    axios.get(`https://iplserver.herokuapp.com/all-seasons/matches/match/${matchId}`)
      .then(res => {
        this.setState({...this.state, matchDetails : res.data})
      })
      .catch((err) => {
        console.log(err);
      })
  }

  render() {
    const ballByBall = this.state.ballByBall;
    const matchDetails = this.state.matchDetails;

    const renderMatchDetails = (matchDetails) ? (<MatchSummary matchDetails={matchDetails} />) : (<Preloader />)
    const renderBallByBall = (ballByBall) ? (<BallByBall ballByBall={ballByBall} />) : (<Preloader />)

    return(
      <div>
        <Navbar />
        <div className="container">
          <h3 className="indigo-text text-darken-4">Match Summary</h3>
          {renderMatchDetails}
          <h3 className="indigo-text text-darken-4">Ball by Ball</h3>
          <div className="divider"></div>
          {renderBallByBall}
        </div>
      </div>

    )
  }
}

export default MatchDetail;