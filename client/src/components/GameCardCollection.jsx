import React, { Component } from "react";
import GameCard from "./GameCard.jsx";
import { connect } from "react-redux";

//import { getGamesInfo } from "../actions/search.js";
import { getGamesInfo } from "../actions/search.js";

class GameCardCollection extends Component {
  constructor(props) {
    console.log("Inside GameCardCollection constructor")
    super(props)
    var games = []
    var gamesToDisplay = []
  }

  state = {
    gameSearch: 'blah1',
    aGame: 'blah2',
    games: ['hi', 'mom']
  }
    
  componentWillReceiveProps(nextProps) {
    console.clear();
    console.log(nextProps);
    console.log("componentWillReceiveProps... ", this.props.gameSearch)
    console.log("componentWillReceiveProps... ", this.props.games)
    console.log("nextProps.games... ", nextProps.games);

    this.setState((prevState, nextProps) => {
      console.log("prevState", prevState, "   nextState ", nextProps)
      let obj = {};
      obj.gameSearch = nextProps.gameSearch;
      obj.aGame = nextProps.gameSearch;
      //obj.games = nextProps.games;
      obj.games = nextProps.games.map(gameObj => gameObj.name);
      obj.gamesToDisplay = nextProps.games.map(currGame => <li key={currGame.id}>{currGame.name}</li>)
      return obj;
    })
    
  }

  render() {
    return (
      <div>
<p>{this.state.gameSearch}</p>
<p>{this.state.aGame}</p>
<ol>
{this.state.gamesToDisplay}
</ol>
      </div>
    );
  }
}

//<p>{this.state.gameSearch}</p>
//<p>{this.state.aGame}</p>
//<ol>
//{this.state.gamesToDisplay}
//</ol>

/* <table><tbody>
<tr>
  <td>
    <GameCard className="FirstCard" />
  </td>
  <td>
    <GameCard className="SecondCard" />
  </td>
</tr>
<tr>
  <td>
    <GameCard className="ThirdCard" />
  </td>
</tr>
</tbody></table>
 */

const mapStateToProps = appState => ({
  gameSearch: appState.search.searchStr,
  games: appState.search.searchResults
})

export default connect(
  mapStateToProps,
  { getGamesInfo })(GameCardCollection);

