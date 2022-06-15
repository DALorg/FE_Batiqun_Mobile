import {
  ADD_USERS,
  DELETE_USERS,
  GET_USERS,
  USERS_ERROR,
  EDIT_USERS,
} from "./types";

const initialState = {
  profiles: [],
  profile: {},
  bitSuccessEdit: null,
  loading: true,
};

export default function profileReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        profile: action.payload.objData,
        loading: false,
      };

    case ADD_USERS:
      return {
        ...state,
        profiles: state.profiles.concat(action.payload),
        loading: false,
      };

    case EDIT_USERS:
      return {
        ...state,
        profiles: state.profiles.map((profile) =>
          Number(profile.id) === Number(action.payload.id)
            ? (profile = action.payload)
            : profile
        ),
        bitSuccessEdit: action.payload.bitSuccess,
        loading: false,
      };

    case DELETE_USERS:
      const filteredState = state.profiles.filter(
        (profile) => Number(profile.id) !== Number(action.payload.id)
      );
      return { ...state, profiles: filteredState };

    case USERS_ERROR:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
}
