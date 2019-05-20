import { combineReducers } from 'redux'
import { statsReducer } from "../Containers/Stats";

export default combineReducers({
  stats: statsReducer
});