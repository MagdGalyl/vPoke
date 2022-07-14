import { combineReducers } from "redux";
import pokesReducer from "./pokesReducer";

export default combineReducers({
  pokes: pokesReducer,
});
