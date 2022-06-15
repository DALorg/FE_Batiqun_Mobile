import { combineReducers } from "redux";

import homepageReducer from "./homepageReducer";
import productReducer from "./productReducer";
import leaderboardReducer from "./leaderboardReducer";

export default combineReducers({
  Homes: homepageReducer,
  Products: productReducer,
  Leaderboards: leaderboardReducer,
});
