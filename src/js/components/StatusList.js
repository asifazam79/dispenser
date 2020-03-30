import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { dispense: state.dispense };
};

const ConnectedList = ({ dispense }) => (
  <ul>
      {dispense.map(function(el) {
        return ([
          <li key={1}>{el}</li>
        ])
      })}
  </ul>
);

const StatusList = connect(mapStateToProps)(ConnectedList);

export default StatusList;