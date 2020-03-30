import React, { Component } from "react";
import { connect } from "react-redux";
import { getData } from "../actions/dispense";

export class Dispenser extends Component {
  componentDidMount() {
    this.props.getData();
  }

  render() {
    return (
      <ul>
        {this.props.dispenser.map(function(el) {
          return ([
            <li key={1}>Tea Quantity: <span>{el.tea}</span></li>,
            <li key={2}>Coffee Quantity: <span>{el.coffee}</span></li>,
            <li key={3}>Milk Quantity: <span>{el.milk}</span></li>,
            <li key={4}>Sugar Quantity: <span>{el.sugar}</span></li>
          ])
        })}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    dispenser: state.remotedispenser.slice(0, 1)
  };
}

export default connect(
  mapStateToProps,
  { getData }
)(Dispenser);