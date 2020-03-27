import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Option extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
      quantity: this.props.quantity
    };
    this.callUpdateCurrentState = this.callUpdateCurrentState.bind(this);
  }

  callUpdateCurrentState() {
    // Call this method with the state value to update
    if (this.props.value === 'Tea') {
      window.updateCurrentSelection (this.state.quantity - 1, null, null, null)
    } else if (this.props.value === 'Coffee') {
      window.updateCurrentSelection (null, this.state.quantity - 1, null, null)
    } else if (this.props.value === 'Milk') {
      window.updateCurrentSelection (null, null, this.state.quantity - 1, null)
    } else if (this.props.value === 'Sugar') {
      window.updateCurrentSelection (null, null, null, this.state.quantity - 1)
    }
  }

  disableButtonsAfterClick() {
    if (this.props.value !== "Dispense") {
      this.refs.btn.setAttribute("disabled", "disabled");
    }
  }

  render() {
    return (
      <button className="option" ref="btn" value={this.state.value} onClick={() => 
        { this.setState({quantity:  this.state.quantity - 1});
          this.callUpdateCurrentState();
          this.disableButtonsAfterClick();
        }
      }
      >
        {this.props.value} {this.state.quantity}
      </button>
    );
  }
}

class Essentials extends React.Component {
    renderOption(i, j) {
        return <Option value={i} quantity={j} />;
    }

    render() {
        return (
        <div class="essentials">
            <h2>Select Essentials</h2>
            {this.renderOption("Milk", 30)}
            {this.renderOption("Sugar", 25)}
        </div>
        );
    }
}

class Drinks extends React.Component {
  renderOption(i, j) {
    return <Option value={i} quantity={j} />;
  }

  render() {
    return (
      <div className="drinks">
      <h2>Select your drink</h2>
      {this.renderOption("Tea", 100)}
      {this.renderOption("Coffee", 85)}
      </div>
    );
  }
}

class Dispenser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      teaQuantity: null,
      coffeeQuantity: null,
      milkQuantity: null,
      sugarQuantity: null
    };
  }

  renderOption(i) {
    return <Option value={i} />;
  }

  checkTeaQuantity() {
    let message = '';
    if (this.state.teaQuantity < 25 && this.state.teaQuantity !== null) {
      message = 'Tea quantity is low. Please refill';
    } 
    return message;
  }

  checkCoffeeQuantity() {
    let message = '';
    if (this.state.coffeeQuantity < 25 && this.state.coffeeQuantity !== null) {
      message = 'Coffee quantity is low. Please refill';
    }
    return message;
  }

  checkMilkQuantity() {
    let message = '';
    if (this.state.milkQuantity < 25 && this.state.milkQuantity !== null) {
      message = 'Milk quantity is low. Please refill';
    }
    return message;
  }

  checkSugarQuantity() {
    let message = '';
    if (this.state.sugarQuantity < 25 && this.state.sugarQuantity !== null) {
      message = 'Sugar quantity is low. Please refill';
    }
    return message;
  }

  render() {
    return (
      <div className="dispenser">
        <h1 class="dispenser">Drinks Dispenser</h1>
        <Drinks />
        <Essentials />
        <div className="dispense">
          {this.renderOption("Dispense")}
        </div>
        <div class="statusPanel">
          <h2>Status Panel</h2>
          <ul>
            <li>
              <span class="messageHolder">Tea Quantity <span>{this.state.teaQuantity}</span></span>
              <span class="refill">{this.checkTeaQuantity()}</span>
            </li>
            <li>
              <span class="messageHolder">Coffee Quantity <span>{this.state.coffeeQuantity}</span></span>
              <span class="refill">{this.checkCoffeeQuantity()}</span>
            </li>
            <li>
              <span class="messageHolder">Milk Quantity <span>{this.state.milkQuantity}</span></span>
              <span class="refill">{this.checkMilkQuantity()}</span>
            </li>
            <li>
              <span class="messageHolder">Sugar Quantity <span>{this.state.sugarQuantity}</span></span>
              <span class="refill">{this.checkSugarQuantity()}</span>
            </li>
          </ul>
          <h2>Temprature readings</h2>
          <ul>
            <li>Temp reading 1</li>
            <li>Temp reading 2</li>
            <li>Temp reading 3</li>
            <li>Temp reading 4</li>
          </ul>
        </div>
      </div>
    );
  }
}

// ========================================

const dispenser = ReactDOM.render(
  <Dispenser />,
  document.getElementById('root')
);

window.updateCurrentSelection = (TeaQuantity, CoffeeQuantity, MilkQuantity, SugarQuantity) => {
  if(TeaQuantity !== null) {
    dispenser.setState({ teaQuantity: TeaQuantity});
  } else if(CoffeeQuantity !== null) {
    dispenser.setState({ coffeeQuantity: CoffeeQuantity});
  } else if(MilkQuantity !== null) {
    dispenser.setState({ milkQuantity: MilkQuantity});
  } else if(SugarQuantity !== null) {
    dispenser.setState({ sugarQuantity: SugarQuantity});
  }
}

