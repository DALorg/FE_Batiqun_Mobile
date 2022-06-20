import {
    GET_PRODUCTS,
    PRODUCTS_ERROR,
    GET_BY_ID_PRODUCTS
  } from "./types";
  
  const initialState = {
    products: [],
    product: {},
    bitSuccessEdit: null,
    loading: true,
  };
  
  export default function productReducer(state = initialState, action) {
    switch (action.type) {
      case GET_PRODUCTS:
        return {
          ...state,
          products: action.payload,
          bitSuccessEdit: null,
          loading: false,
        };
        
      case GET_BY_ID_PRODUCTS:
        return {
          ...state,
          product: action.payload,
          bitSuccessEdit: null,
          loading: false,
        };
  
      case PRODUCTS_ERROR:
        return {
          loading: false,
          error: action.payload,
        };
  
      default:
        return state;
    }
  }
  