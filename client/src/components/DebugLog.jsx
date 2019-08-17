import React, { Component } from "react";
//import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Card from "react-bootstrap/Card";

import {debug} from '../actions/debug.js';

class DebugLog extends Component {
  componentWillMount() {
    this.props.debug();
  }

  componentWillReceiveProps(nextProps) {
      if (nextProps.debugMsg) {
        console.log('got... ', this.props.debugMsg);
        this.props.msg = this.props.debugMsg;
      }
  }

  render() {
    return (
    <Card style={{ width: '50rem', height: '20rem'}}>
      <Card.Body>
        <Card.Title>Debug Stuff</Card.Title>
        <Card.Text>{this.props.msg}</Card.Text>
      </Card.Body>
    </Card>
  );
  }
}

const mapStateToProps = state => ({
    debugMsg: state.debugMsg
  })

//export default DebugLog;
export default connect(mapStateToProps, {debug})(DebugLog);
