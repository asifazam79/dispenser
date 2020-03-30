import { ADD_TEMPERATURE, DATA_LOADED, DISPENSE_DRINK, DISPENSE_DATA_LOADED } from "../constants/action-types";

const initialState = {
  temperature: [],
  remotetemperature: [],
  dispense: [],
  remotedispenser: []
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_TEMPERATURE) {
    return Object.assign({}, state, {
      temperature: state.temperature.concat(action.payload)
    });
  }

  if (action.type === DATA_LOADED) {
    return Object.assign({}, state, {
      remotetemperature: state.remotetemperature.concat(action.payload)
    });
  }

  if (action.type === DISPENSE_DRINK) {
    return Object.assign({}, state, {
      dispense: state.dispense.concat(action.payload)
    });
  }

  if (action.type === DISPENSE_DATA_LOADED) {
    return Object.assign({}, state, {
      remotedispenser: state.remotedispenser.concat(action.payload)
    });
  }

  return state;
}

export default rootReducer;