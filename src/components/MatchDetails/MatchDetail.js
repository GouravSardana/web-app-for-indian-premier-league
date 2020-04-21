import React from "react";
import axios from 'axios';

import BallByBall from "./BallByBall";
import Navbar from "../Navbar/Navbar";
import Preloader from "../Preloader/Preloader";


class MatchDetail extends React.Component{
  state = {

  }
  componentDidMount() {
    const matchId = this.props.match.params.match_id;
    // const ballByBall = ball_by_ball.filter((balls) => balls.Match_Id === matchId)

    axios.get(`https://iplserver.herokuapp.com/ball-by-ball/${matchId}`)
      .then((res) => {
        this.setState({ballByBall: res.data})
      })
      .catch((err) => {
        console.log(err)
      })
  }

  render() {
    const ballByBall = this.state.ballByBall;
    const renderBallByBall = (ballByBall) ? (<BallByBall ballByBall={ballByBall} />) : (<Preloader />)
    return(
      <div>
        <Navbar />
        <div className="container">
          <h3 className="indigo-text text-darken-4">Match Summary</h3>
          Match summary
          <h3 className="indigo-text text-darken-4">Ball by Ball</h3>
          <div className="divider"></div>
          {renderBallByBall}
        </div>
      </div>

    )
  }
}

export default MatchDetail;