import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import "./GameCard.css";
import "QueryIt";

// <img class="card-img-top" src="..." alt="Card image cap"> </img>

class GameCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gameinfo: props.gameinfo // this is in the form of an element returned from the a call to QueryIt.getGameInfo
    };
  }

  render() {
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{this.state.gameinfo.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Card Subtitle
          </Card.Subtitle>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
    );
  }
}

export default GameCard;
