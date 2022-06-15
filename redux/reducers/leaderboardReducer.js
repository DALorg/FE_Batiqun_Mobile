import { GET_LEADERBOARD, LEADERBOARD_ERROR } from "./types";

const initialState = {
  leaderboards: [],
  leaderboard: {},
  bitSuccessEdit: null,
  loading: true,
};

export default function leaderboardReducer(state = initialState, action) {
  switch (action.type) {
    case GET_LEADERBOARD:
      return {
        ...state,
        leaderboards: action.payload,
        bitSuccessEdit: null,
        loading: false,
      };
    case LEADERBOARD_ERROR:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
}
