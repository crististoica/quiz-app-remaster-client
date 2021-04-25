import * as types from "../types/auth";

const initialState = {
  data: {},
  isLoggedIn: false,
  isLoading: true,
  message: {
    content: "",
    type: "",
  },
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CLEAR_USER_MSG:
      return {
        ...state,
        message: initialState.message,
      };
    case types.USER_ERROR:
      return {
        ...initialState,
        isLoading: false,
        message: action.payload.message,
      };
    case types.SIGN_UP:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        data: action.payload.data,
        isLoggedIn: true,
        message: action.payload.message,
      };
    case types.SIGN_IN:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        data: action.payload.data,
        isLoggedIn: true,
      };
    case types.CHECK_TOKEN:
      return {
        ...state,
        data: action.payload.data,
        isLoggedIn: true,
        isLoading: false,
      };
    case types.SIGN_OUT:
      localStorage.removeItem("token");
      return {
        ...initialState,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default authReducer;
