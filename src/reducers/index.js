import { combineReducers } from "redux";
import wReducer from "./wReducer";

export default combineReducers({
  weatherReducer: wReducer,
});
