import * as types from "../types/community";
import * as api from "../api";

export const getTopics = () => async (dispatch) => {
  try {
    const { data } = await api.getTopics();

    dispatch({ type: types.GET_TOPICS, payload: { topics: data.topics } });
  } catch (error) {
    dispatch({
      type: types.COMMUNITY_ERROR,
      payload: {
        message: error.response?.data.message || "Server must be off.",
      },
    });
  }
};
