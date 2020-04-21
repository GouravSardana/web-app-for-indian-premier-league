import React from "react";
import {Link} from 'react-router-dom';

class SeasonCard extends React.Component{
  render() {
    return(
      <Link to={`/all-seasons/season${this.props.Season_Id}`}>
        <div className='card seasonCard z-depth-0'>
          <div className="card-content">
            <h5 className="card-title indigo-text">IPL {this.props.Season_Year}</h5>
            <div className="card-action">
              <h6 className="teamName"><i className="fas fa-trophy"></i> {this.props.Season_Winner}</h6>
              <br />
              <h6 className="teamName"><i className="fas fa-medal"></i> {this.props.Season_Runner_Up}</h6>
            </div>
          </div>
        </div>
      </Link>
    )
  }
}

export default SeasonCard;