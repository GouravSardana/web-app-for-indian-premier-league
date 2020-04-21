import React from "react";
import axios from "axios";
import Preloader from "../Preloader/Preloader";

class Tweets extends React.Component{
  state = {

  }

  componentDidMount() {
    axios.get("https://iplserver.herokuapp.com/ipl-tweets")
      .then((res) => {
        this.setState({tweets: res.data});
      })
      .catch((err) => console.log(err));
  }

  render() {
    const tweets = this.state.tweets;
    console.log(tweets)

    const renderTweets = (tweets) ? (tweets.slice(0,6).map((tweet, index) => {
      return(
        <a key={index} href={`https://twitter.com/i/web/status/${tweet.id_str}`} rel="noopener noreferrer" target="_blank">
        <div className='col m4 s12'>
          <div style={{height: "200px", color: "#4d4d4d", borderBottom: "6px solid #3949ab"}} className="card-panel hoverable">
            <h6 className="indigo-text">{tweet.user.name} &#183; @<b>IPL</b>  </h6>
            {tweet.text}
          </div>
        </div>
        </a>
      )
    })) : (<p><Preloader /></p>)

    return(
      <div className="row">
        <p className="grey-text"><i><b>Latest Tweets</b></i></p>
        {renderTweets}
      </div>
    )
  }

}
export default Tweets;