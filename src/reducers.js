import { combineReducers } from "redux";
import searchReducer from "./features/search/redux";

const rootReducer = combineReducers({
  search: searchReducer
});

export default rootReducer;
