import {
    ADD_HOMEPAGE,
    EDIT_HOMEPAGE,
    DELETE_HOMEPAGE,
    GET_HOMEPAGE,
    HOMEPAGE_ERROR,
    GET_BY_ID_HOMEPAGE
  } from "./types";
  
  const initialState = {
    homes: [],
    home: {},
    bitSuccessEdit: null,
    loading: true,
  };
  
  export default function homepageReducer(state = initialState, action) {
    switch (action.type) {
      case GET_HOMEPAGE:
        return {
          ...state,
          homes: action.payload,
          bitSuccessEdit: null,
          loading: false,
        };
        
      case GET_BY_ID_HOMEPAGE:
        return {
          ...state,
          home: action.payload,
          bitSuccessEdit: null,
          loading: false,
        };
  
      case ADD_HOMEPAGE:
        return {
          ...state,
          homes: state.homes.concat(action.payload),
          bitSuccessEdit: action.payload.bitSuccess,
          loading: false,
        };
  
      case EDIT_HOMEPAGE:
        return {
          ...state,
          homes: state.homes.map((home) =>
            Number(home.id) === Number(action.payload.id)
              ? (home = action.payload)
              : home
          ),
          loading: false,
        };
  
      case DELETE_HOMEPAGE:
        const filteredState = state.homes.filter(
          (home) => Number(home.id) !== Number(action.payload.id)
        );
        return { ...state, homes: filteredState };
  
      case HOMEPAGE_ERROR:
        return {
          loading: false,
          error: action.payload,
        };
  
      default:
        return state;
    }
  }
  