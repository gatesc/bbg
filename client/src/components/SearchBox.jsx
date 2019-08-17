import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";

import { getSearchStr, getGamesInfo } from "../actions/search.js";

class SearchBox extends Component {
  constructor(props) {
    console.log("Inside SearchBox constructor")
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  state = {
    searchStr: ""
  };

  onChange(e) {
    console.log("... e ", e)
    //let s = this.state.searchStr + e.target.value;
    this.setState( {searchStr: e.target.value} )
    //this.setState( { [e.target.name] : e.target.value } )
    console.log("... ", this.state.searchStr)
  }

  onSubmit(e) {
    e.preventDefault();
    const theSearch = {
      searchStr: this.state.searchStr
    };
    this.props.getSearchStr(theSearch.searchStr);
    this.props.getGamesInfo(theSearch.searchStr);
  }

  render() {
    return (
      <Form inline onSubmit={this.onSubmit}>
        <Form.Group controlId="formSearchBox">
          <Form.Label style={{ margin: "10px" }}>Search</Form.Label>
          <Form.Control type="as" placeholder="Enter Game Title" onChange={this.onChange} />

          <Button
            variant="outline-dark"
            type="submit"
            style={{ margin: "10px" }}
          >
            Submit
          </Button>
        </Form.Group>
      </Form>
    );
  }
}

const mapStateToProps = appState => ({
  searchStr: appState.searchStr
});

//export default connect(
//  mapStateToProps,
//  { getSearchStr }
//)(SearchBox);

export default connect(
  mapStateToProps,
  { getSearchStr, getGamesInfo }
)(SearchBox);
