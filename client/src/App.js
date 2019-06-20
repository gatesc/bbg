import React, { Component } from "react";
import axios from "axios";
//import Button from 'react-bootstrap/Button';
import "./App.css";
import BBGBar from "./components/BBGBar.jsx";
import GameCardCollection from "./components/GameCardCollection.jsx";
import DebugLog from "./components/DebugLog.jsx";

//import SearchBox from './components/SearchBox.jsx'
//import GameCard from "./components/GameCard.jsx";

// =======================================================
// class GoButton extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = "empty";
//     //this.eventHandler = this.eventHandler.bind(this);
//     this.onClick = this.onClick.bind(this);
//     this.getState = this.getState.bind(this);
//   }
//
//   getState() {
//     return this.state;
//   }
//   //eventHandler(event) {
//   onClick(event) {
// //    this.setState((prevState) => ({
// //        toggle: !prevState.toggle
// //      })
// //    );
//     let url='http://penguin.linux.test:3001/getGameInfo?name=Cry Havoc';
// //      let url='http://penguin.linux.test:3001/getGameInfo?name=Root';
//       axios.get(url).then((res) => {
//       console.log("Got It.  Results... ", res);
//       return res.data;
//     })
//   }
//   render() {
//     return(
//       <div>
//         <button className="btn btn-primary" type="button" onClick={this.onClick}>{this.state}</button>
//       </div>
//     );
//   }
// }

//ReactDOM.render(<GoButton />, document.getElementById("root"));

// =======================================================
class App extends Component {
  render() {
    //return <div> Ready to use the back end apis</div>
    return (
      <div layout="row">
        <BBGBar />;
        <GameCardCollection />;
        <DebugLog />;
      </div>
    );
  }
}

export default App;
