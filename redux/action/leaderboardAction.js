import { GET_LEADERBOARD, LEADERBOARD_ERROR } from "../reducers/types";
import axios from "axios";
import Cookies from "js-cookie";
import "../../GlobalVariable";

export const getLeaderboards = () => async (dispatch) => {
  try {
    const res = await axios.get(global.apiurl + `api/Leaderboard`);
    dispatch({
      type: GET_LEADERBOARD,
      payload: res.data.objData,
    });
    console.log(res.data.objData);
  } catch (error) {
    dispatch({
      type: LEADERBOARD_ERROR,
      payload: error,
    });
    console.log(error);
  }
};
