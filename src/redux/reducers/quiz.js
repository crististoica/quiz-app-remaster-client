import * as types from "../types/quiz";

const initialState = {
  dashboardCards: [],
  data: {
    questions: [],
  },
  message: {
    content: "",
    type: "",
  },
  currentQuizSettings: {
    color: "",
    type: "",
    quizImg: "",
  },
  result: {
    data: [],
    time: {},
    date: 0,
    color: "",
  },
  time: {},
  isLoading: false,
};

const quizReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_QUIZ:
      return {
        ...state,
        currentQuizSettings: {
          color: action.payload.currentQuizColor,
          type: action.payload.quizType,
          quizImg: action.payload.quizImg,
        },
        progress: action.payload.progress,
        data: action.payload.quiz,
      };
    case types.LOADING_START:
      return {
        ...state,
        isLoading: true,
      };
    case types.LOADING_DONE:
      return {
        ...state,
        isLoading: false,
      };
    case types.GET_QUIZES:
      return {
        ...state,
        dashboardCards: action.payload.quizes,
      };
    case types.VERIFY_QUIZ:
      return {
        ...state,
        time: action.payload.time,
        result: action.payload.result,
      };
    case types.RESET_QUIZ_SETTINGS:
      return {
        ...state,
        data: initialState.data,
        result: initialState.result,
        currentQuizSettings: initialState.currentQuizSettings,
        message: initialState.message,
      };
    case types.QUIZ_ERROR:
      return {
        ...state,
        isLoading: false,
        message: action.payload.message,
      };
    default:
      return initialState;
  }
};

export default quizReducer;
