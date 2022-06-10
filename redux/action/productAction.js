import {
    GET_PRODUCTS,
    PRODUCTS_ERROR
  } from "../reducers/types";
  import axios from "axios";
  import Cookies from 'js-cookie';
  
  export const getProducts = (Page, Length) => async (dispatch) => {
    try {
      const config = {
        headers: { Authorization: `Bearer ${Cookies.get("UserData")}` }
        };
      const res = await axios.post(`https://batiqunapi.azurewebsites.net/api/Product/GetPaging`, 
      {
        objRequestData: {
            intPage: Page,
            intLength: Length,
            txtSearch: "",
            bitAscending: true
        }
    }, config);
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