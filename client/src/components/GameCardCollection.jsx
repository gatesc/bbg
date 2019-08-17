import React, { Component } from "react";
import GameCard from "./GameCard.jsx";
import { connect } from "react-redux";

//import { getGamesInfo } from "../actions/search.js";
import { getGamesInfo } from "../actions/search.js";

class GameCardCollection extends Component {
  constructor(props) {
    console.log("Inside GameCardCollection constructor")
    super(props)
    var games=[]
  }

  /* state={
    gameSearch: '',
    games: [],
    gameCards: []
  }
 */
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

/*     this.setState(
      {
        gameSearch: nextProps.gameSearch,
        games: nextProps.games,
        gameCards: []
      }
    );
 */
    this.setState((prevState, nextProps) => {
      console.log("prevState", prevState, "   nextState ", nextProps)
      let obj = {};
      obj.gameSearch = nextProps.gameSearch;
      obj.aGame = nextProps.gameSearch;
      //obj.games = nextProps.games;
      obj.games = nextProps.games.map(gameObj => gameObj.name);
      return obj;
    })
    
    //let obj=Object.assign({}, nextProps);
    //console.log("obj...", obj);
    //this.setState(obj);
    //console.log("inside componentWillReceiveProps... state... ", this.state)
    //console.log(this.state);
  }

  render() {
    return (
      <div>
        <p>{this.state.gameSearch}</p>
        <p>{this.state.aGame}</p>
        <ol>
          {this.state.games.map(currGame => (
            <li key={currGame}>{currGame}</li>
          ))}
        </ol>
      </div>
    );
  }
}

{/* <table><tbody>
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
 */}
//const mapDispatchToProps = dispatch => ({
//  processSearch: () => {
//    console.log("Hi Mom from mapDispatchToProps")
//    dispatch(processSearchStr());
//  }
//});

const mapStateToProps = appState => ({
  gameSearch: appState.search.searchStr,
  games: appState.search.searchResults
})

export default connect(
  mapStateToProps,
  { getGamesInfo })(GameCardCollection);

//export default connect(
//  mapStateToProps, mapDispatchToProps
//  )(GameCardCollection);

//export default GameCardCollection;
