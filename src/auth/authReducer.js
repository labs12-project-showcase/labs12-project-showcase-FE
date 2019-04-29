import {
  LOGGING_IN,
  LOGOUT,
  SET_SESSION
} from "./authActions";

const initialState = {
  loggingIn: false,
  isLoggedIn: false,
  accessToken: null,
  idToken: null,
  expiresAt: 0
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGGING_IN:
      return {
        ...state,
        loggingIn: true
      }
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        accessToken: null,
        idToken: null,
        expiresAt: 0
      }
    case SET_SESSION:
      return {
        ...state,
        ...action.payload,
        isLoggedIn: true,
      }
    default:
      return state;
  }
};

export default authReducer;