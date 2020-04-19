import React from "react";
import {Link} from "react-router-dom";

class Navbar extends React.Component{
  render() {
    return(
      <div>
        <nav>
          <ul className="right">
            <li><Link to={`/stats/season${1}`} className="btn blue z-depth-0">ALL STATS</Link></li>
          </ul>
        </nav>
      </div>
    )
  }
}
export  default Navbar;