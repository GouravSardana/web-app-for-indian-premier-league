import React from "react";
import {Link} from 'react-router-dom';

class SeasonCard extends React.Component{
  render() {
    return(
      <Link to={`/all-seasons/season${this.props.Season_Id}`}>
        <div className='card seasonCard z-depth-0'>
          <div className="card-content">
            <h5 className="card-title indigo-text">IPL Season {this.props.Season_Id}</h5>
            <div className="card-action">
              <span><i className="fas fa-trophy"></i> Winner : {this.props.Season_Winner}</span>
              <br />
              <span><i className="fas fa-medal"></i> Runner-up : {this.props.Season_Runner_Up}</span>
            </div>
          </div>
        </div>
      </Link>
    )
  }
}

export default SeasonCard;