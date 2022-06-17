import { GET_PRODUCTS, PRODUCTS_ERROR } from "../reducers/types";
import axios from "axios";
import Cookies from "js-cookie";

export const getProducts = (Page, Length) => async (dispatch) => {
  try {
    const config = {
      headers: { Authorization: `Bearer ${Cookies.get("UserData")}` },
    };
    const res = await axios.post(
      `https://batiqunapi.azurewebsites.net/api/Product/GetPaging`,
      {
        objRequestData: {
          intPage: Page,
          intLength: Length,
          txtSearch: "",
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

export const getById = (id) => async (dispatch) => {
  try {
    await axios
      .post(`https://batiqunapi.azurewebsites.net/api/product/get`, {
        objRequestData: {
          ProductId: id,
        },
      })
      .then((response) => {
        dispatch({
          type: GET_BY_ID_PRODUCTS,
          payload: response.data.objData,
        });
      });
  } catch (error) {
    dispatch({
      type: PRODUCTS_ERROR,
      payload: error,
    });
    console.log(error);
  }
};

export const addProduct = (objRequestData, token) => async (dispatch) => {
  try {
    var testResp = {
      objRequestData,
    };
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    debugger;
    await axios
      .post(
        `https://batiqunapi.azurewebsites.net/api/product/CreateProduct`,
        testResp,
        config
      )
      .then((response) => {
        dispatch({
          type: ADD_PRODUCTS,
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

export const editProduct = (objRequestData, token) => async (dispatch) => {
  try {
    var testResp = {
      objRequestData,
    };
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    debugger;
    await axios
      .post(
        `https://batiqunapi.azurewebsites.net/api/product/savedata`,
        testResp,
        config
      )
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

export const mintProduct = (objRequestData, token) => async (dispatch) => {
  try {
    var testResp = {
      objRequestData,
    };
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    debugger;
    await axios
      .post(
        `https://batiqunapi.azurewebsites.net/api/product/Mint`,
        testResp,
        config
      )
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
      .post(
        `https://batiqunapi.azurewebsites.net/api/product/BuyProduct`,
        testResp,
        config
      )
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

export const SellProduct = (objRequestData, token) => async (dispatch) => {
  try {
    var testResp = {
      objRequestData,
    };
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    debugger;
    await axios
      .post(
        `https://batiqunapi.azurewebsites.net/api/product/sell`,
        testResp,
        config
      )
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

export const TransferProduct = (objRequestData, token) => async (dispatch) => {
  try {
    var testResp = {
      objRequestData,
    };
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    debugger;
    await axios
      .post(
        `https://batiqunapi.azurewebsites.net/api/product/TransferProduct`,
        testResp,
        config
      )
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

export const PayUser = (objRequestData, token) => async (dispatch) => {
  try {
    var testResp = {
      objRequestData,
    };
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    debugger;
    await axios
      .post(
        `https://batiqunapi.azurewebsites.net/api/ProductActivity/PayUser`,
        testResp,
        config
      )
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

export const TransferAfterBuy = (objRequestData, token) => async (dispatch) => {
  try {
    var testResp = {
      objRequestData,
    };
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    debugger;
    await axios
      .post(
        `https://batiqunapi.azurewebsites.net/api/product/TransferAfterBuy`,
        testResp,
        config
      )
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

export const deleteProduct = (id) => async (dispatch) => {
  try {
    debugger;
    await axios
      .post(`https://batiqunapi.azurewebsites.net/api/product/delete`, {
        objRequestData: {
          ProductId: id,
        },
      })
      .then((response) => {
        dispatch({
          type: DELETE_PRODUCTS,
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

export const ApproveProduct = (id) => async (dispatch) => {
  try {
    debugger;
    await axios
      .get(`https://batiqunapi.azurewebsites.net/api/product/Approve/` + id)
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

export const RejectProduct = (id) => async (dispatch) => {
  try {
    debugger;
    await axios
      .get(`https://batiqunapi.azurewebsites.net/api/product/Reject/` + id)
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
