import React, { Component } from "react";
import { connect } from "react-redux";
import { getData } from "../actions/index";

export class Temprature extends Component {
  componentDidMount() {
    this.props.getData();
  }

  render() {
    return (
      <ul>
        {this.props.temperature.map((el, index) => (
          <li key={el.timestamp}>Reading {index+1}: <span>{el.temp}</span></li>
        ))}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    temperature: state.remotetemperature.slice(0, 30)
  };
}

export default connect(
  mapStateToProps,
  { getData }
)(Temprature);