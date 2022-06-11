import { combineReducers } from "redux";

import homepageReducer from "./homepageReducer";
import productReducer from "./productReducer";

export default combineReducers({
  Homes: homepageReducer,
  Products: productReducer
});
