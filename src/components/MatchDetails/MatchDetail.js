import React from "react";
import BallByBall from "./BallByBall";


// data
import ball_by_ball from '../../data/ball_by_ball.json';
import Navbar from "../Navbar/Navbar";


class MatchDetail extends React.Component{
  state = {

  }
  componentDidMount() {
    const matchId = this.props.match.params.match_id;
    const ballByBall = ball_by_ball.filter((balls) => balls.Match_Id === matchId)
    this.setState({ballByBall})
  }

  render() {
    const ballByBall = this.state.ballByBall;
    const renderBallByBall = (ballByBall) ? (<BallByBall ballByBall={ballByBall} />) : (<p>Loading Ball by ball data...</p>)
    return(
      <div>
        <Navbar />
        <div className="container">
          <h3 className="indigo-text text-darken-4">Ball by Ball</h3>
          <div className="divider"></div>
          {renderBallByBall}
        </div>
      </div>

    )
  }
}

export default MatchDetail;