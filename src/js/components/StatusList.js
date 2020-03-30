import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { dispense: state.dispense };
};

const ConnectedList = ({ dispense }) => (
  <ul>
      <li key={dispense.dispenserId}>{dispense.tea}</li>
      <li key={dispense.dispenserId}>{dispense.coffee}</li>
      <li key={dispense.dispenserId}>{dispense.milk}</li>
      <li key={dispense.dispenserId}>{dispense.sugar}</li>
  </ul>
);

const StatusList = connect(mapStateToProps)(ConnectedList);

export default StatusList;