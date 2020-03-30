import React, { Component } from "react";
import { connect } from "react-redux";
import { addDispenser } from "../actions/dispense";

function mapDispatchToProps(dispatch) {
  return {
    addDispenser: dispense => dispatch(addDispenser(dispense))
  };
}

class ConnectedForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Tea: 0,
      Coffee: 0,
      Milk: 0,
      Sugar: 0
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    const selectedButton = event.target.id;

    if(selectedButton === 'tea') {
      this.setState({ Tea: this.state.Tea + 1 })
    } else if(selectedButton === 'coffee') {
      this.setState({ Coffee: this.state.Coffee + 1 })
    } else if(selectedButton === 'milk') {
      this.setState({ Milk: this.state.Milk + 1 })
    } if(selectedButton === 'sugar') {
      this.setState({ Sugar: this.state.Sugar + 1 })
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    const selection = this.state;
    const convertedSelection = (Object.entries(selection));
    this.props.addDispenser(convertedSelection);
    this.setState({ Tea: 0, Coffee: 0, Milk: 0, Sugar: 0 })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h2>Select your drink</h2>
          <label htmlFor="tea">Tea</label>
          <button id="tea" name="tea" className="option" onClick={this.handleClick}>Tea</button>
          <label htmlFor="coffee">Coffee</label>
          <button id="coffee" name="coffee" className="option" onClick={this.handleClick}>Coffee</button>
          <h2>Select Essentials</h2>
          <label htmlFor="milk">Milk</label>
          <button id="milk" name="milk" className="option" onClick={this.handleClick}>Milk</button>
          <label htmlFor="sugar">Sugar</label>
          <button id="sugar" name="sugar" className="option" onClick={this.handleClick}>Sugar</button>
          <label htmlFor="dispense">Sugar</label>
          <button id="dispense" name="dispense" className="submitButton" type="submit">Dispense</button>
        </form>
        <div className="statusPanel">
          <h2>Selection Panel</h2>
          <ul>
            <li>Tea Selection: <span>{this.state.Tea}</span></li>
            <li>Coffee Selection: <span>{this.state.Coffee}</span></li>
            <li>Milk Selection: <span>{this.state.Milk}</span></li>
            <li>Sugar Selection: <span>{this.state.Sugar}</span></li>
          </ul>
          </div>
      </div>
    );
  }
}

const Form = connect(
  null,
  mapDispatchToProps
)(ConnectedForm);

export default Form;
