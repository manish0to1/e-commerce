import {
  GET_USER_REQUEST,
  LOGIN_REQUEST,
  REGISTER_REQUEST,
} from "./ActionType";

const initialState = {
  user: null,
  isLoading: false,
  jwt: null,
  error: null,
};
export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_REQUEST:
    case LOGIN_REQUEST:
    case GET_USER_REQUEST:
      return { ...state, isLoading: true, error: null };
    default:
      return state;
  }
};
