import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { temperature: state.temperature };
};

const ConnectedList = ({ temperature }) => (
  <ul>
    {temperature.map(el => (
      <li key={el.timestamp}>{el.temp}</li>
    ))}
  </ul>
);

const TempList = connect(mapStateToProps)(ConnectedList);

export default TempList;