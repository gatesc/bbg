import React, { Component } from "react";
import GameCard from "./GameCard.jsx";

class GameCardCollection extends Component {
  render() {
    return (
      <div>
        <table>
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
        </table>
      </div>
    );
  }
}

export default GameCardCollection;
