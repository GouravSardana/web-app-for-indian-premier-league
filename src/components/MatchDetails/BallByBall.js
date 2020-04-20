import React from 'react';
import M from 'materialize-css'

// data
import players from '../../data/players.json'

class BallByBall extends React.Component{

  state ={

  }

  componentDidMount() {
    M.Tabs.init(document.querySelectorAll('.tabs'))

    const ballByBall = this.props.ballByBall;
    const firstInnings = ballByBall.filter((balls) => balls.Innings_Id === "1");
    const secondInnings = ballByBall.filter((balls) => balls.Innings_Id === "2");
    this.setState({firstInnings, secondInnings, players})
  }


  render() {
    const players = this.state.players;
    const firstInnings = this.state.firstInnings;
    const secondInnings = this.state.secondInnings;
    console.log(firstInnings);

    const renderFirstInnings = (firstInnings) ? (firstInnings.reverse().map((ball, index) => {
      if(ball.Batsman_Scored === "6"){
        return(
          <li className="collection-item">
            <div className="blue lighten-3 ballData">
              <div>
                <span className="btn z-depth-0 grey">
                  {parseInt(ball.Over_Id) - 1}.{parseInt(ball.Ball_Id)}
                </span>
                </div>
              <div><span className="playerName">{players[parseInt(ball.Bowler_Id) - 1].Player_Name}</span> to <span className="playerName">{players[parseInt(ball.Striker_Id) - 1].Player_Name}</span>
                <h4 className="grey-text text-darken-1 runs">It's a SIX</h4>
              </div>
            </div>
          </li>
        )
      }
      if(ball.Batsman_Scored === "4"){
        return(
          <li className="collection-item">
            <div className="blue lighten-3 ballData">
              <div>
                <span className="btn z-depth-0 grey">
                  {parseInt(ball.Over_Id) - 1}.{parseInt(ball.Ball_Id)}
                </span>
              </div>
              <div><span className="playerName">{players[parseInt(ball.Bowler_Id) - 1].Player_Name}</span> to <span className="playerName">{players[parseInt(ball.Striker_Id) - 1].Player_Name}</span>
                <h4 className="grey-text text-darken-1 runs">It's a FOUR</h4>
              </div>
            </div>
          </li>
        )
      }
      if(ball.Dissimal_Type !== ""){
        return(
          <li className="collection-item">
            <div className="red lighten-3 ballData">
              <div>
                <span className="btn z-depth-0 grey">
                  {parseInt(ball.Over_Id) - 1}.{parseInt(ball.Ball_Id)}
                </span>
              </div>
              <div><span className="playerName">{players[parseInt(ball.Bowler_Id) - 1].Player_Name}</span> to <span className="playerName">{players[parseInt(ball.Striker_Id) - 1].Player_Name}</span>
                <h4 className="grey-text text-darken-1 runs">OUT</h4>
              </div>
            </div>
          </li>
        )
      }

      if(ball.Extra_Type !== ""){
        return(
          <li className="collection-item">
            <div className="grey lighten-3 ballData">
              <div>
                <span className="btn z-depth-0 grey">
                  {parseInt(ball.Over_Id) - 1}.{parseInt(ball.Ball_Id)}
                </span>
              </div>
              <div><span className="playerName">{players[parseInt(ball.Bowler_Id) - 1].Player_Name}</span> to <span className="playerName">{players[parseInt(ball.Striker_Id) - 1].Player_Name}</span>
                <h4 className="grey-text text-darken-1 runs">{ball.Extra_Type}</h4>
              </div>
            </div>
          </li>
        )
      }
        return(
          <li className="collection-item ">
            <div className='ballData'>
              <div>
                <span className="btn z-depth-0 grey">
                  {parseInt(ball.Over_Id) - 1}.{parseInt(ball.Ball_Id)}
                </span>
              </div>
              <div><span className="playerName">{players[parseInt(ball.Bowler_Id) - 1].Player_Name}</span> to <span className="playerName">{players[parseInt(ball.Striker_Id) - 1].Player_Name}</span>
                <h4 className="grey-text text-darken-1 runs">{parseInt(ball.Batsman_Scored)} runs</h4>
              </div>
            </div>
          </li>
        )

  })) : (<p>Loading first innings...</p>)


    const renderSecondInnings = (secondInnings) ? (secondInnings.reverse().map((ball, index) => {
      if(ball.Batsman_Scored === "6"){
        return(
          <li className="collection-item">
            <div className="blue lighten-3 ballData">
              <div>
                <span className="btn z-depth-0 grey">
                  {parseInt(ball.Over_Id) - 1}.{parseInt(ball.Ball_Id)}
                </span>
              </div>
              <div><span className="playerName">{players[parseInt(ball.Bowler_Id) - 1].Player_Name}</span> to <span className="playerName">{players[parseInt(ball.Striker_Id) - 1].Player_Name}</span>
                <h4 className="grey-text text-darken-1 runs">It's a SIX</h4>
              </div>
            </div>
          </li>
        )
      }
      if(ball.Batsman_Scored === "4"){
        return(
          <li className="collection-item">
            <div className="blue lighten-3 ballData">
              <div>
                <span className="btn z-depth-0 grey">
                  {parseInt(ball.Over_Id) - 1}.{parseInt(ball.Ball_Id)}
                </span>
              </div>
              <div><span className="playerName">{players[parseInt(ball.Bowler_Id) - 1].Player_Name}</span> to <span className="playerName">{players[parseInt(ball.Striker_Id) - 1].Player_Name}</span>
                <h4 className="grey-text text-darken-1 runs">It's a FOUR</h4>
              </div>
            </div>
          </li>
        )
      }
      if(ball.Dissimal_Type !== ""){
        return(
          <li className="collection-item">
            <div className="red lighten-3 ballData">
              <div>
                <span className="btn z-depth-0 grey">
                  {parseInt(ball.Over_Id) - 1}.{parseInt(ball.Ball_Id)}
                </span>
              </div>
              <div><span className="playerName">{players[parseInt(ball.Bowler_Id) - 1].Player_Name}</span> to <span className="playerName">{players[parseInt(ball.Striker_Id) - 1].Player_Name}</span>
                <h4 className="grey-text text-darken-1 runs">OUT</h4>
              </div>
            </div>
          </li>
        )
      }

      if(ball.Extra_Type !== ""){
        return(
          <li className="collection-item">
            <div className="grey lighten-3 ballData">
              <div>
                <span className="btn z-depth-0 grey">
                  {parseInt(ball.Over_Id) - 1}.{parseInt(ball.Ball_Id)}
                </span>
              </div>
              <div><span className="playerName">{players[parseInt(ball.Bowler_Id) - 1].Player_Name}</span> to <span className="playerName">{players[parseInt(ball.Striker_Id) - 1].Player_Name}</span>
                <h4 className="grey-text text-darken-1 runs">{ball.Extra_Type}</h4>
              </div>
            </div>
          </li>
        )
      }
      return(
        <li className="collection-item ">
          <div className='ballData'>
            <div>
                <span className="btn z-depth-0 grey">
                  {parseInt(ball.Over_Id) - 1}.{parseInt(ball.Ball_Id)}
                </span>
            </div>
            <div><span className="playerName">{players[parseInt(ball.Bowler_Id) - 1].Player_Name}</span> to <span className="playerName">{players[parseInt(ball.Striker_Id) - 1].Player_Name}</span>
              <h4 className="grey-text text-darken-1 runs">{parseInt(ball.Batsman_Scored)} runs</h4>
            </div>
          </div>
        </li>
      )

    })) : (<p>Loading second innings...</p>)




    return(
      <div>
        <div className="row">
          <div className="col s12 center">
            <ul className="tabs">
              <li className="tab col s3"><a className="active" href="#innings1">FIRST INNINGS</a></li>
              <li className="tab col s3"><a href="#innings2">SECOND INNINGS</a></li>
            </ul>
          </div>
          <div id="innings1" className="col m12">
            <h5 className="grey-text"><b><i>First Innings</i></b></h5>
            <ul className="collection">
              {renderFirstInnings}
            </ul>
          </div>
          <div id="innings2" className="col m12">
            <h5 className="grey-text"><b><i>Second Innings</i></b></h5>
            <ul className="collection">
              {renderSecondInnings}
            </ul>
          </div>
        </div>


      </div>
    )
  }
}
export default BallByBall;