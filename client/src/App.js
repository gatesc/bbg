import React, { Component } from 'react';
//import Button from 'react-bootstrap/Button';
import './App.css';
import './GameCard.jsx'

// =======================================================
class GoButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {toggle: true};
    this.eventHandler = this.eventHandler.bind(this);
  }
  eventHandler(event) {
    this.setState((prevState) => ({
        toggle: !prevState.toggle
      })
    );
  }
  render() {
    return(
      <div>
        <button class="btn btn-primary" type="button" onClick={this.eventHandler}>{this.state.toggle ? 'Fetch Game' : 'Reset'}</button>
      </div>
    );
  }
}

//ReactDOM.render(<GoButton />, document.getElementById("root"));

// =======================================================
class App extends Component {
    render() {
	//return <div> Ready to use the back end apis</div>
  return <GoButton />
    }
}

export default App;
