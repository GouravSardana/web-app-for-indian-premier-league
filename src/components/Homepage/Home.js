import React from "react";
import {Link} from 'react-router-dom';
import M from 'materialize-css';


// components
import Navbar from "../Navbar/Navbar";
import Tweets from "./Tweets";

class Home extends React.Component {
  state = {

  }


  componentDidMount() {
    M.ScrollSpy.init(document.querySelectorAll(".scrollspy"))
  }


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
                <b> ~ Lalit Modi during the launch of the IPL</b>
              </blockquote>
            </div>
          </div>
        </section>

        <section id="teams" className="container">
            <h3 className="indigo-text text-darken-4">Teams</h3>
            <div className="divider"></div>
            <div className="row">
              <div style={{border: "1px solid #eeeeee", height: "250px"}} className="center col m3 s12">
                <img src="/img/logos/csk.png" height="150px" alt="csk-logo"/>
                <h6 className="indigo-text"><b><i>Chennai Super Kings (CSK)</i></b></h6>
              </div>
              <div style={{border: "1px solid #eeeeee", height: "250px"}} className="center col m3 s12">
                <img src="/img/logos/dd.png" height="150px" alt="dd-logo"/>
                <h6 className="indigo-text"><b><i>Delhi Daredevils (DD)</i></b></h6>
              </div>
              <div style={{border: "1px solid #eeeeee", height: "250px"}} className="center col m3 s12">
                <img src="/img/logos/rcb.png" height="150px" alt="rcb-logo"/>
                <h6 className="indigo-text"><b><i>Royal Challengers Bangalore (RCB)</i></b></h6>
              </div>
              <div style={{border: "1px solid #eeeeee", height: "250px"}} className="center col m3 s12">
                <img src="/img/logos/kkr.png" height="150px" alt="kkr-logo"/>
                <h6 className="indigo-text"><b><i>Kolkata Knight Riders (KKR)</i></b></h6>
              </div>
            </div>
          <div className="row">
            <div style={{border: "1px solid #eeeeee",height: "250px"}} className="center col m3 s12">
              <img src="/img/logos/csk.png" height="150px" alt="srh-logo"/>
              <h6 className="indigo-text"><b><i>Sunrisers Hyderabad (SRH)</i></b></h6>
            </div>
            <div style={{border: "1px solid #eeeeee", height: "250px"}} className="center col m3 s12">
              <img src="/img/logos/mi.png" height="150px" alt="mi-logo"/>
              <h6 className="indigo-text"><b><i>Mumbai Indians (MI)</i></b></h6>
            </div>
            <div style={{border: "1px solid #eeeeee", height: "250px"}} className="center col m3 s12">
              <img src="/img/logos/rr.png" height="150px" alt="rr-logo"/>
              <h6 className="indigo-text"><b><i>Rajasthan Royals (RR)</i></b></h6>
            </div>
            <div style={{border: "1px solid #eeeeee", height: "250px"}} className="center col m3 s12">
              <img src="/img/logos/kxiip.png" height="150px" alt="kxip-logo"/>
              <h6 className="indigo-text"><b><i>Kings XI Punjab (KXIP)</i></b></h6>
            </div>
          </div>

        </section>

        <section id="trending" className="container">
          <h3 className="indigo-text text-darken-4">IPL On Social</h3>
          <div className="divider"></div>

          <div className="scrollspy">
            <Tweets />
          </div>
          <div className="scrollspy">
            <div className="row">
              <p className="grey-text"><i><b>Latest Videos</b></i></p>
              <div className="col m4 s12">
                <div className="video-container">
                  <iframe title="game-banayega-name" src="//www.youtube.com/embed/o8jhKCp1liQ" frameBorder="0"
                          allowFullScreen></iframe>
                </div>
              </div>
              <div className="col m4 s12">
                <div className="video-container">
                  <iframe title="rcb-vs-csk" src="//www.youtube.com/embed/ARwPapBuAtI" frameBorder="0"
                          allowFullScreen></iframe>
                </div>
              </div>
              <div className="col m4 s12">
                <div className="video-container">
                  <iframe title="ipl-anthem" src="//www.youtube.com/embed/BXPbbBardrk" frameBorder="0"
                          allowFullScreen></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    )
  }
}

export default Home;