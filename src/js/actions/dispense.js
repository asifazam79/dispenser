import { DISPENSE_DRINK } from "../constants/action-types";

var myData = [{
  "dispenserId": "1",
  "tea": "30",
  "coffee": "50",
  "milk": "60",
  "sugar": "80"
}]

export function addDispenser(payload) {
  return { type: DISPENSE_DRINK, payload };
};

export function getData() {
  return function(dispatch) {
    return fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(json => {
        dispatch({ type: "DISPENSE_DATA_LOADED", payload: myData });
      });
  };
}