import * as types from "../types/quiz";
import * as api from "../api";

export const getQuiz = (quiz) => async (dispatch) => {
  try {
    dispatch({ type: types.LOADING_START });

    const { data } = await api.getQuiz(quiz.quizId);

    dispatch({
      type: types.GET_QUIZ,
      payload: {
        currentQuizColor: quiz.color,
        quiz: data.quiz,
        quizType: quiz.quizType,
        quizImg: quiz.quizImg,
      },
    });

    dispatch({ type: types.LOADING_DONE });
  } catch (error) {
    dispatch({
      type: types.QUIZ_ERROR,
      payload: {
        message: error.response?.data.message || "Server must be off.",
      },
    });
  }
};

export const getQuizes = () => async (dispatch) => {
  try {
    dispatch({ type: types.RESET_QUIZ_SETTINGS });
    const { data } = await api.getQuizes();

    dispatch({
      type: types.GET_QUIZES,
      payload: {
        quizes: data.quizes,
      },
    });
  } catch (error) {
    dispatch({
      type: types.QUIZ_ERROR,
      payload: {
        message: error.response?.data.message || "Server must be off.",
      },
    });
  }
};

export const verifyQuiz = (progress, time) => async (dispatch) => {
  try {
    dispatch({ type: types.LOADING_START });

    const { data } = await api.verifyQuiz(progress);

    dispatch({
      type: types.VERIFY_QUIZ,
      payload: { result: data.result, time, topic: data.topic },
    });

    dispatch({ type: types.LOADING_DONE });
  } catch (error) {
    dispatch({
      type: types.QUIZ_ERROR,
      payload: {
        message: error.response?.data.message || "Server must be off.",
      },
    });
  }
};
