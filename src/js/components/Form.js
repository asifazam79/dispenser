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
      tea: 0,
      coffee: 0,
      milk: 0,
      sugar: 0
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    const selectedButton = event.target.id;

    if(selectedButton === 'tea') {
      this.setState({ tea: this.state.tea + 1 })
    } else if(selectedButton === 'coffee') {
      this.setState({ coffee: this.state.coffee + 1 })
    } else if(selectedButton === 'milk') {
      this.setState({ milk: this.state.milk + 1 })
    } if(selectedButton === 'sugar') {
      this.setState({ sugar: this.state.sugar + 1 })
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    const selection = this.state;
    this.props.addDispenser(selection);
    this.setState({ tea: 0, coffee: 0, milk: 0, sugar: 0 })
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
        <div class="statusPanel">
          <h2>Selection Panel</h2>
          <ul>
            <li>Tea Selection: <span>{this.state.tea}</span></li>
            <li>Coffee Selection: <span>{this.state.coffee}</span></li>
            <li>Milk Selection: <span>{this.state.milk}</span></li>
            <li>Sugar Selection: <span>{this.state.sugar}</span></li>
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
