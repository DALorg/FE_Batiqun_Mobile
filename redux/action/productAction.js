import {
  GET_PRODUCTS,
  GET_BY_ID_PRODUCTS,
  PRODUCTS_ERROR,
  EDIT_PRODUCTS,
} from "../reducers/types";
import axios from "axios";
import Cookies from "js-cookie";

export const getProducts = (Page, Length, Search) => async (dispatch) => {
  try {
    const config = {
      headers: { Authorization: `Bearer ${Cookies.get("UserData")}` },
    };
    const res = await axios.post(
      global.apiurl + `/api/Product/GetPaging`,
      {
        objRequestData: {
          intPage: Page,
          intLength: Length,
          txtSearch: Search,
          bitAscending: true,
        },
      },
      config
    );
    dispatch({
      type: GET_PRODUCTS,
      payload: res.data.objData,
    });
    console.log(res.data.objData);
  } catch (error) {
    dispatch({
      type: PRODUCTS_ERROR,
      payload: error,
    });
    console.log(error);
  }
};

export const getById = (ProductId) => async (dispatch) => {
  try {
    const config = {
      headers: { Authorization: `Bearer ${Cookies.get("UserData")}` },
    };
    const res = await axios.post(
      global.apiurl + `api/product/get`,
      {
        objRequestData: {
          ProductId: ProductId,
        },
      },
      config
    );
    dispatch({
      type: GET_BY_ID_PRODUCTS,
      payload: res.data.objData,
    });
    console.log(res.data.objData);
  } catch (error) {
    dispatch({
      type: PRODUCTS_ERROR,
      payload: error,
    });
    console.log(error);
  }
};

export const BuyProduct = (objRequestData, token) => async (dispatch) => {
  try {
    var testResp = {
      objRequestData,
    };
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    debugger;
    await axios
      .post(global.apiurl + `api/product/BuyProduct`, testResp, config)
      .then((response) => {
        dispatch({
          type: EDIT_PRODUCTS,
          payload: response.data,
        });
        console.log(response);
      });
  } catch (error) {
    dispatch({
      type: PRODUCTS_ERROR,
      payload: error,
    });
    console.log(error);
  }
};
