const { default: axios } = require("axios");
const { API_BASE_URL } = require("../../config/apiConfig");

const {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
} = require("./ActionType");

const registerRequest = () => ({ type: REGISTER_REQUEST });
const registerSuccess = (user) => ({ type: REGISTER_SUCCESS, payload: user });
const registerFailure = (error) => ({ type: REGISTER_FAILURE, payload: error });

export const register = (userData) => async (dispatch) => {
  dispatch(registerRequest());
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/signup`, userData);
    const user = response.data;
    if (user.jwt) {
      localStorage.setItem("jwt", user.jwt);
    }
    dispatch(registerSuccess());
  } catch (error) {
    dispatch(registerFailure(error.message));
  }
};

export const login = (userData) => async (dispatch) => {
  dispatch(registerRequest());
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/signin`, userData);
    const user = response.data;
    if (user.jwt) {
      localStorage.setItem("jwt", user.jwt);
    }
    dispatch(registerSuccess());
  } catch (error) {
    dispatch(registerFailure(error.message));
  }
};
