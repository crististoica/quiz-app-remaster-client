import * as types from "../types/community";

const initialState = {
  data: [],
  isLoading: false,
  currentTopic: {
    posts: [],
  },
  currentPost: {
    replies: [],
  },
  isLoaded: false,
  message: {
    content: "",
    type: "",
  },
};

const communityReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.COMMUNITY_ERROR:
      return {
        ...state,
        message: {
          content: action.payload.message,
          type: "error",
        },
      };
    case types.CLEAR_COMMUNITY_MSG:
      return {
        ...state,
        message: initialState.message,
      };
    case types.COMMUNITY_LOAD_STARTED:
      return {
        ...state,
        currentTopic: initialState.currentTopic,
        isLoading: true,
      };
    case types.COMMUNITY_LOAD_DONE:
      return {
        ...state,
        isLoading: false,
      };
    case types.GET_TOPICS:
      return {
        ...state,
        isLoaded: true,
        data: action.payload.topics,
      };
    case types.GET_TOPIC:
      return {
        ...state,
        currentTopic: action.payload.topic,
      };
    case types.CREATE_NORMAL_POST:
      return {
        ...state,
        currentTopic: action.payload.topic,
        message: action.payload.message,
      };
    case types.CREATE_QUIZ_POST:
      return {
        ...state,
        currentTopic: action.payload.topic,
        message: action.payload.message,
      };
    case types.CREATE_REPLY:
      state.currentPost.replies.push(action.payload.reply);
      return {
        ...state,
        message: action.payload.message,
      };
    case types.GET_ONE_POST:
      return {
        ...state,
        currentPost: action.payload.post,
        currentTopic: action.payload.topic,
      };
    default:
      return state;
  }
};

export default communityReducer;
