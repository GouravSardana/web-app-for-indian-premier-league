import React from 'react'
import SeasonCard from "./SeasonCard";
import Navbar from "../Navbar/Navbar";


// data
import seasons from '../../data/seasons.json';


class AllSeasonsList extends React.Component {
  state = {

  }

  componentDidMount() {
    this.setState({seasons})
  }


  render() {
    const seasons = this.state.seasons;
    const renderSesonsCard = (seasons) ? (seasons.reverse().map((season) => {
      return(
        <SeasonCard Season_Id={season.Season_Id} Season_Year={season.Season_Year} Season_Winner={season.Season_Winner} Season_Runner_Up={season.Season_Runner_Up} />
      )
    }) ) : ( <p>Loading seasons tab ... </p> )



    return(
      <div>
        <Navbar />
        <div className="container">
          <h3 className="indigo-text text-darken-4 darken">All Seasons</h3>
          <div className="divider"></div>
          <div className="row">
            <div className="col m12 s12">
              <div className="allSeasonsList">
                {renderSesonsCard}
              </div>
            </div>
          </div>

        </div>
      </div>
    )
  }
}
export default AllSeasonsList;