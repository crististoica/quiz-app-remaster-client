import * as types from "../types/admin";
import * as api from "../api";

export const createTopic = (topicInfos) => async (dispatch) => {
  try {
    dispatch({ type: types.CLEAR_ADMIN_MSG });

    const { data } = await api.createTopic(topicInfos);

    dispatch({
      type: types.CREATE_TOPIC,
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
      type: types.ADMIN_MSG,
      payload: {
        message: error.response?.data.message || "Server must be off.",
      },
    });
  }
};

export const getTopicsAdmin = () => async (dispatch) => {
  try {
    dispatch({ type: types.CLEAR_ADMIN_MSG });

    const { data } = await api.getTopics();

    dispatch({
      type: types.ADMIN_GET_TOPICS,
      payload: {
        topics: data.topics,
      },
    });
  } catch (error) {
    dispatch({
      type: types.ADMIN_MSG,
      payload: {
        message: error.response?.data.message || "Server must be off.",
      },
    });
  }
};

export const removeTopic = (topicId) => async (dispatch) => {
  try {
    dispatch({ type: types.CLEAR_ADMIN_MSG });
    const { data } = await api.removeTopic(topicId);

    dispatch({
      type: types.REMOVE_TOPIC,
      payload: {
        id: data.topicId,
        message: {
          content: data.message,
          type: "success",
        },
      },
    });
  } catch (error) {
    dispatch({
      type: types.ADMIN_MSG,
      payload: {
        message: error.response?.data.message || "Server must be off.",
      },
    });
  }
};

export const toggleTopicLock = (topicId, topicInfos) => async (dispatch) => {
  try {
    dispatch({ type: types.CLEAR_ADMIN_MSG });

    const { data } = await api.toggleTopicLock(topicId, topicInfos);

    dispatch({
      type: types.TOGGLE_TOPIC_LOCK,
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
      type: types.ADMIN_MSG,
      payload: {
        message: error.response?.data.message || "Server must be off.",
      },
    });
  }
};

export const updateTopic = (topicId, topicInfos) => async (dispatch) => {
  try {
    dispatch({ type: types.CLEAR_ADMIN_MSG });

    const { data } = await api.updateTopic(topicId, topicInfos);

    dispatch({
      type: types.UPDATE_TOPIC,
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
      type: types.ADMIN_MSG,
      payload: {
        message: error.response?.data.message || "Server must be off.",
      },
    });
  }
};

// quizes
export const createQuiz = (quizInfos) => async (dispatch) => {
  try {
    dispatch({ type: types.CLEAR_ADMIN_MSG });

    const { data } = await api.createQuiz(quizInfos);

    dispatch({
      type: types.CREATE_QUIZ,
      payload: {
        quiz: data.quiz,
        topic: data.topic,
        message: {
          content: data.message,
          type: "success",
        },
      },
    });
  } catch (error) {
    dispatch({
      type: types.ADMIN_MSG,
      payload: {
        message: error.response?.data.message || "Server must be off.",
      },
    });
  }
};
