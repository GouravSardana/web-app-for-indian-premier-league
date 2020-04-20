import React from "react";
import {Link} from "react-router-dom";

class Navbar extends React.Component{
  render() {
    return(
      <div>
        <nav>
          <ul className="right">
            <li><Link to={`/`}><b>HOME</b></Link></li>
            <li><Link to={`/all-seasons`}><b>ALL SEASONS</b></Link></li>
            <li><Link to={`/all-stats`}><b>ALL STATS</b></Link></li>
          </ul>
        </nav>
      </div>
    )
  }
}
export  default Navbar;