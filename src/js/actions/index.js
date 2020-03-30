import { ADD_TEMPERATURE } from "../constants/action-types";

var myData = [{
  "timestamp": "1",
  "temp": 99.0
},
{
  "timestamp": "2",
  "temp": 97.0
},
{
  "timestamp": "3",
  "temp": 99.0
},
{
  "timestamp": "4",
  "temp": 99.0
},
{
  "timestamp": "5",
  "temp": 97.0
},
{
  "timestamp": "6",
  "temp": 99.0
},
{
  "timestamp": "7",
  "temp": 99.0
},
{
  "timestamp": "8",
  "temp": 97.0
},
{
  "timestamp": "9",
  "temp": 99.0
},
{
  "timestamp": "10",
  "temp": 99.0
},
{
  "timestamp": "11",
  "temp": 97.0
},
{
  "timestamp": "12",
  "temp": 99.0
},
{
  "timestamp": "13",
  "temp": 99.0
},
{
  "timestamp": "14",
  "temp": 97.0
},
{
  "timestamp": "15",
  "temp": 99.0
},
{
  "timestamp": "16",
  "temp": 99.0
},
{
  "timestamp": "17",
  "temp": 97.0
},
{
  "timestamp": "18",
  "temp": 99.0
},
{
  "timestamp": "19",
  "temp": 99.0
},
{
  "timestamp": "20",
  "temp": 97.0
},
{
  "timestamp": "21",
  "temp": 99.0
},
{
  "timestamp": "22",
  "temp": 99.0
},
{
  "timestamp": "23",
  "temp": 97.0
},
{
  "timestamp": "24",
  "temp": 99.0
},
{
  "timestamp": "25",
  "temp": 99.0
},
{
  "timestamp": "26",
  "temp": 97.0
},
{
  "timestamp": "27",
  "temp": 99.0
},
{
  "timestamp": "28",
  "temp": 97.0
},
{
  "timestamp": "29",
  "temp": 99.0
},
{
  "timestamp": "30",
  "temp": 97.0
}]

export function addTemperature(payload) {
  return { type: ADD_TEMPERATURE, payload };
};

export function getData() {
  return function(dispatch) {
    return fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(json => {
        dispatch({ type: "DATA_LOADED", payload: myData });
      });
  };
}

console.log(getData());