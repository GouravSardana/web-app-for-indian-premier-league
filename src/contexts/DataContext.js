import React, {createContext} from "react";

// data import
import matches from '../data/matches.json';
import teams from '../data/teams.json'

export const DataContext = createContext();

class DataContextProvider extends React.Component{
  state = { }

  componentDidMount() {
    this.setState({ matches})
  }

  render(){
    return(
      <DataContext.Provider value={{...this.state}}>
        {this.props.children}
      </DataContext.Provider>
    )
  }
}

export default DataContextProvider;