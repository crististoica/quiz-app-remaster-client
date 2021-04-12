import * as types from "../types/quiz";

const initialState = {
  dashboardCards: [],
  data: [],
  message: {
    content: "",
    type: "",
  },
  quizImages: {
    Java: "/java_img.png",
    Networks: "/networks_img.png",
    Databases: "/db_img.png",
    "Real Test": "/real_test.png",
    News: "/news.png",
  },
  quizColors: {
    Java: "#FCAB10",
    Networks: "#2B9EB3",
    Databases: "#ED6A5A",
    "Real Test": "#3BB273",
    News: "#35A7FF",
  },
  currentQuizSettings: {
    color: "",
    key: "",
    type: "",
    quizImg: "",
  },
  result: {
    entries: {},
    time: {},
    date: 0,
    color: "",
    type: "",
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
          key: action.payload.key,
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
      };
    default:
      return initialState;
  }
};

export default quizReducer;
