import React from "react";
import {Link} from "react-router-dom";
import M from 'materialize-css'

class Navbar extends React.Component{

  componentDidMount() {
    M.Sidenav.init(document.querySelectorAll('.sidenav'));
  }

  render() {
    return(
      <div>
        <div className="navbar-fixed">
          <nav>
            <div className="nav-wrapper indigo">
              <ul id="nav-mobile" className="right">
                <li><Link to={`/`}><b>Home</b></Link></li>
                <li><a href="/#teams"><b>Teams</b></a></li>
                <li><Link to={`/all-seasons`}><b>Seasons</b></Link></li>
                <li><a href="/#trending"><b>Trending</b></a></li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    )
  }
}
export  default Navbar;