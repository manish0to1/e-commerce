// const { default: axios } = require("axios");
// const { API_BASE_URL } = require("../../config/apiConfig");

// const {
//   REGISTER_REQUEST,
//   REGISTER_SUCCESS,
//   REGISTER_FAILURE,
//   LOGIN_REQUEST,
//   LOGIN_SUCCESS,
//   LOGIN_FAILURE,
//   GET_USER_REQUEST,
//   GET_USER_SUCCESS,
//   GET_USER_FAILURE,
//   LOGOUT,
// } = require("./ActionType");

// const token = localStorage.getItem("jwt");
// const registerRequest = () => ({ type: REGISTER_REQUEST });
// const registerSuccess = (user) => ({ type: REGISTER_SUCCESS, payload: user });
// const registerFailure = (error) => ({ type: REGISTER_FAILURE, payload: error });

// export const register = (userData) => async (dispatch) => {
//   dispatch(registerRequest());
//   try {
//     const response = await axios.post(`${API_BASE_URL}/auth/signup`, userData);
//     const user = response.data;
//     if (user.jwt) {
//       localStorage.setItem("jwt", user.jwt);
//     }
//     console.log("User", user);
//     dispatch(registerSuccess(user.jwt));
//   } catch (error) {
//     dispatch(registerFailure(error.message));
//   }
// };

// const loginRequest = () => ({ type: LOGIN_REQUEST });
// const loginSuccess = (user) => ({ type: LOGIN_SUCCESS, payload: user });
// const loginFailure = (error) => ({ type: LOGIN_FAILURE, payload: error });

// export const login = (userData) => async (dispatch) => {
//   dispatch(loginRequest());
//   try {
//     const response = await axios.post(`${API_BASE_URL}/auth/signin`, userData);
//     const user = response.data;
//     if (user.jwt) {
//       localStorage.setItem("jwt", user.jwt);
//     }
//     console.log("User", user);
//     dispatch(loginSuccess(user.jwt));
//   } catch (error) {
//     dispatch(loginFailure(error.message));
//   }
// };

// const getUserRequest = () => ({ type: GET_USER_REQUEST });
// const getUserSuccess = (user) => ({ type: GET_USER_SUCCESS, payload: user });
// const getUserFailure = (error) => ({ type: GET_USER_FAILURE, payload: error });

// export const getUser = () => async (dispatch) => {
//   dispatch(getUserRequest());
//   try {
//     const response = await axios.get(`${API_BASE_URL}/api/users/profile`, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     const user = response.data;
//     console.log("User", user);
//     dispatch(getUserSuccess(user));
//   } catch (error) {
//     dispatch(getUserFailure(error.message));
//   }
// };

// export const logout = () => (dispatch) => {
//   dispatch({ type: LOGOUT, payload: null });
// };
// ##################################################  ChatGPT here ##########################
const { default: axios } = require("axios");
const { API_BASE_URL } = require("../../config/apiConfig");

const {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
  LOGOUT,
} = require("./ActionType");

// Action creators for registration
const registerRequest = () => ({ type: REGISTER_REQUEST });
const registerSuccess = (user) => ({ type: REGISTER_SUCCESS, payload: user });
const registerFailure = (error) => ({ type: REGISTER_FAILURE, payload: error });

export const register = (userData) => async (dispatch) => {
  dispatch(registerRequest());
  try {
    const response = await axios.post(`${API_BASE_URL}/signup`, userData);
    const user = response.data;

    // Save JWT in localStorage if it exists
    if (user.jwt) {
      localStorage.setItem("jwt", user.jwt);
    }

    console.log("User", user);
    dispatch(registerSuccess(user)); // Dispatch user data (including JWT if necessary)
  } catch (error) {
    dispatch(registerFailure(error.response?.data?.message || error.message));
  }
};

// Action creators for login
const loginRequest = () => ({ type: LOGIN_REQUEST });
const loginSuccess = (user) => ({ type: LOGIN_SUCCESS, payload: user });
const loginFailure = (error) => ({ type: LOGIN_FAILURE, payload: error });

export const login = (userData) => async (dispatch) => {
  dispatch(loginRequest());
  try {
    const response = await axios.post(`${API_BASE_URL}/signin`, userData);
    const user = response.data;

    // Save JWT in localStorage if it exists
    if (user.jwt) {
      localStorage.setItem("jwt", user.jwt);
    }

    console.log("User", user);
    dispatch(loginSuccess(user)); // Dispatch user data (including JWT if necessary)
  } catch (error) {
    dispatch(loginFailure(error.response?.data?.message || error.message));
  }
};

// Action creators for fetching user profile
const getUserRequest = () => ({ type: GET_USER_REQUEST });
const getUserSuccess = (user) => ({ type: GET_USER_SUCCESS, payload: user });
const getUserFailure = (error) => ({ type: GET_USER_FAILURE, payload: error });

export const getUser = () => async (dispatch) => {
  const token = localStorage.getItem("jwt"); // Get token when needed
  dispatch(getUserRequest());
  try {
    const response = await axios.get(`${API_BASE_URL}/api/users/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const user = response.data;
    console.log("User", user);
    dispatch(getUserSuccess(user));
  } catch (error) {
    dispatch(getUserFailure(error.response?.data?.message || error.message));
  }
};

// Action for logout
export const logout = () => (dispatch) => {
  localStorage.removeItem("jwt"); // Clear token from localStorage on logout
  dispatch({ type: LOGOUT, payload: null });
};
