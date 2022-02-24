import { combineReducers } from "redux";
import { phonesReducer, selectedPhonesReducer } from "./phonesReducer";
const reducers = combineReducers({
  allphones: phonesReducer,
  phone: selectedPhonesReducer,
});
export default reducers;
