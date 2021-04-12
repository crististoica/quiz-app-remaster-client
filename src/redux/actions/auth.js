import * as types from "../types/auth";
import * as api from "../api";

export const signup = (formInfo) => async (dispatch) => {
  try {
    dispatch({ type: types.CLEAR_USER_MSG });

    const { data } = await api.signup(formInfo);

    dispatch({
      type: types.SIGN_UP,
      payload: {
        token: data.token,
        data: data.userData,
        message: data.message,
      },
    });
  } catch (error) {
    dispatch({
      type: types.USER_ERROR,
      payload: {
        message: error.response?.data.message || "Server must be off.",
      },
    });
  }
};

export const signin = (formInfo) => async (dispatch) => {
  try {
    dispatch({ type: types.CLEAR_USER_MSG });

    const { data } = await api.signin(formInfo);

    dispatch({
      type: types.SIGN_IN,
      payload: {
        data: data.userData,
        token: data.token,
      },
    });
  } catch (error) {
    dispatch({
      type: types.USER_ERROR,
      payload: {
        message: error.response?.data.message || "Server must be off.",
      },
    });
  }
};

export const checkToken = () => async (dispatch) => {
  try {
    dispatch({ type: types.CLEAR_USER_MSG });

    const { data } = await api.checkToken();

    dispatch({
      type: types.CHECK_TOKEN,
      payload: { data },
    });
  } catch (error) {
    dispatch({
      type: types.USER_ERROR,
      payload: {
        message: error.response?.data.message || "Server must be off.",
      },
    });
  }
};
