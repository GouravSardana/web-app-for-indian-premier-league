import React from 'react'
import axios from 'axios';

import SeasonCard from "./SeasonCard";
import Navbar from "../Navbar/Navbar";
import Preloader from "../Preloader/Preloader";


class AllSeasonsList extends React.Component {
  state = {

  }

  componentDidMount() {
    axios.get("https://iplserver.herokuapp.com/all-seasons")
      .then((res) => {
        this.setState({seasons: res.data})
      })
      .catch((err) =>{
        console.log(err)
      })

  }



  render() {
    const seasons = this.state.seasons;
    const renderSesonsCard = (seasons) ? (seasons.reverse().map((season, index) => {
      return(
        <SeasonCard key={index} Season_Id={season.Season_Id} Season_Year={season.Season_Year} Season_Winner={season.Season_Winner} Season_Runner_Up={season.Season_Runner_Up} />
      )
    }) ) : ( <Preloader /> )



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