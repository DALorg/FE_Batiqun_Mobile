import {
  ADD_HOMEPAGE,
  EDIT_HOMEPAGE,
  DELETE_HOMEPAGE,
  GET_HOMEPAGE,
  HOMEPAGE_ERROR,
  GET_BY_ID_HOMEPAGE,
} from "../reducers/types";
import axios from "axios";
import Cookies from "js-cookie";

export const getHomepage = () => async (dispatch) => {
  try {
    const config = {
      headers: { Authorization: `Bearer ${Cookies.get("UserData")}` },
    };
    const res = await axios.post(
      global.apiurl + `api/Leaderboard/homepage`,
      {
        objRequestData: {
          access_token: Cookies.get("UserData"),
        },
      },
      config
    );
    dispatch({
      type: GET_HOMEPAGE,
      payload: res.data.objData,
    });
    console.log(res.data.objData);
  } catch (error) {
    dispatch({
      type: HOMEPAGE_ERROR,
      payload: error,
    });
    console.log(error);
  }
};
