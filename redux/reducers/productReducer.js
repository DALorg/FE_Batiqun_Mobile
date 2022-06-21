import {
    GET_PRODUCTS,
    PRODUCTS_ERROR,
    GET_BY_ID_PRODUCTS,
    EDIT_PRODUCTS
  } from "./types";
  
  const initialState = {
    products: [],
    product: {},
    loading: true,
  };
  
  export default function productReducer(state = initialState, action) {
    switch (action.type) {
      case GET_PRODUCTS:
        return {
          ...state,
          products: action.payload,
          loading: false,
        };
        
      case GET_BY_ID_PRODUCTS:
        return {
          ...state,
          product: action.payload,
          loading: false,
        };

        case EDIT_PRODUCTS:
          return {
            ...state,
            products: state.products.map((product) =>
              Number(product.id) === Number(action.payload.id)
                ? (product = action.payload)
                : product
            ),
            loading: false,
          };
  
      case PRODUCTS_ERROR:
        return {
          loading: false,
          error: action.payload,
          product: null,
        };
  
      default:
        return state;
    }
  }
  