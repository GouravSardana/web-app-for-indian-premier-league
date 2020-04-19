import React from "react";
import {Link} from 'react-router-dom';

// components
import Navbar from "../Navbar/Navbar";

class Home extends React.Component {
  render() {
    return(
      <div>
        <header>
          <Navbar />
          <div className="container center">
            <h2 className="homeHeroHeading blue darken-4 center">Indian Premier League</h2>
            <h4 className="homeHeroSubHeading indigo darken-4 center">Eight weeks of power-packed cricketing action. </h4>
            <Link to="/all-seasons" className="btn btn-large heroBtn z-depth-0 center-align">VIEW ALL IPL SEASONS  <i style={{fontSize: "16px", paddingLeft: "10px"}} className="fas fa-arrow-right"></i></Link>
          </div>
        </header>
        <section className="container">
          <h3 className="indigo-text text-darken-4">About IPL</h3>
          <div className="divider"></div>
          <div className="row">
            <div className="col m8 s12">
              <p>The Indian Premier League (IPL) is a professional Twenty20 cricket league in India contested every year by eight teams representing eight different cities in India. The league was founded by the Board of Control for Cricket in India (BCCI) in 2008.</p>
              <p>The IPL is the most-attended cricket league in the world and ranked sixth by average attendance among all sports leagues. IPL became the first sporting event in the world to be broadcast live on YouTube.</p>
            </div>
            <div className="col m4 s12">
              <blockquote>
                The IPL has been designed to entice an entire new generation of sports fans into the grounds throughout the country. The dynamic Twenty20 format has been designed to attract a young fan base, which also includes women and children.
                <br />
                <br />
                <b>~ Lalit Modi during the launch of the IPL</b>
              </blockquote>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Home;