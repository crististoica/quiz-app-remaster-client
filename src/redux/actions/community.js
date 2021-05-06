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
        message: {
          content:
            error.response?.data.message.content || "Server must be off.",
          type: "error",
        },
      },
    });
  }
};

export const getTopic = (url, currentTopic) => async (dispatch) => {
  try {
    dispatch({ type: types.COMMUNITY_LOAD_STARTED });
    if (currentTopic) {
      dispatch({
        type: types.GET_TOPIC,
        payload: { topic: currentTopic },
      });
      return dispatch({ type: types.COMMUNITY_LOAD_DONE });
    }

    const { data } = await api.getTopic(url);

    dispatch({ type: types.GET_TOPIC, payload: { topic: data } });

    dispatch({ type: types.COMMUNITY_LOAD_DONE });
  } catch (error) {
    dispatch({
      type: types.COMMUNITY_ERROR,
      payload: {
        message: {
          content:
            error.response?.data.message.content || "Server must be off.",
          type: "error",
        },
      },
    });
  }
};

export const createNormalPost = (postInfos) => async (dispatch) => {
  try {
    dispatch({ type: types.CLEAR_COMMUNITY_MSG });

    const { data } = await api.createNormalPost(postInfos);

    dispatch({
      type: types.CREATE_NORMAL_POST,
      payload: {
        topic: data.topic,
        message: {
          content: data.message,
          type: "success",
        },
      },
    });
  } catch (error) {
    dispatch({
      type: types.COMMUNITY_ERROR,
      payload: {
        message: {
          content:
            error.response?.data.message.content || "Server must be off.",
          type: "error",
        },
      },
    });
  }
};

export const createQuizPost = (postInfos) => async (dispatch) => {
  try {
    dispatch({ type: types.CLEAR_COMMUNITY_MSG });
    const { data } = await api.createQuizPost(postInfos);

    dispatch({
      type: types.CREATE_QUIZ_POST,
      payload: {
        topic: data.topic,
        message: {
          content: data.message,
          type: "success",
        },
      },
    });
  } catch (error) {
    dispatch({
      type: types.COMMUNITY_ERROR,
      payload: {
        message: {
          content:
            error.response?.data.message.content || "Server must be off.",
          type: "error",
        },
      },
    });
  }
};

export const getOnePost = (topicSlug, postSlug) => async (dispatch) => {
  try {
    dispatch({ type: types.COMMUNITY_LOAD_STARTED });

    const { data } = await api.getOnePost(topicSlug, postSlug);

    dispatch({
      type: types.GET_ONE_POST,
      payload: { post: data.post, topic: data.topic },
    });

    dispatch({ type: types.COMMUNITY_LOAD_DONE });
  } catch (error) {
    dispatch({
      type: types.COMMUNITY_ERROR,
      payload: {
        message: {
          content:
            error.response?.data.message.content || "Server must be off.",
          type: "error",
        },
      },
    });
  }
};

export const createReply = (replyInfos, slug) => async (dispatch) => {
  try {
    dispatch({ type: types.CLEAR_COMMUNITY_MSG });

    const { data } = await api.createReply(replyInfos, slug);

    dispatch({
      type: types.CREATE_REPLY,
      payload: {
        reply: data.reply,
        message: {
          content: data.message.content,
          type: "success",
        },
      },
    });
  } catch (error) {
    console.log(error.response);
    dispatch({
      type: types.COMMUNITY_ERROR,
      payload: {
        message: {
          content:
            error.response?.data.message.content || "Server must be off.",
          type: "error",
        },
      },
    });
  }
};
