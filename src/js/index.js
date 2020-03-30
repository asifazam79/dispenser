import store from "../js/store/index";
import { addTemperature } from "../js/actions/index";
import { addDispenser } from "../js/actions/dispense";

window.store = store;
window.addTemperature = addTemperature;
window.addDispenser = addDispenser;