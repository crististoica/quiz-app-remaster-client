import * as types from "../types/admin";

const initialState = {
  community: {
    topics: [],
  },
  dashboard: {
    quizes: [],
  },
  message: {
    content: "",
    type: "",
  },
};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CLEAR_ADMIN_MSG:
      return {
        ...state,
        message: initialState.message,
      };
    case types.ADMIN_GET_TOPICS:
      return {
        ...state,
        community: {
          ...state.community,
          topics: action.payload.topics,
        },
      };
    case types.CREATE_TOPIC:
      state.community.topics.push(action.payload.topic);
      return {
        ...state,
        community: {
          ...state.community,
          topics: [...state.community.topics],
        },
        message: action.payload.message,
      };
    case types.REMOVE_TOPIC:
      return {
        ...state,
        community: {
          ...state.community,
          topics: [
            ...state.community.topics.filter(
              (topic) => topic._id !== action.payload.id
            ),
          ],
        },
        message: action.payload.message,
      };
    case types.TOGGLE_TOPIC_LOCK:
      const index = state.community.topics.findIndex(
        (topic) => topic._id === action.payload.topic._id
      );
      state.community.topics[index] = action.payload.topic;
      return {
        ...state,
        community: {
          ...state.community,
          topics: [...state.community.topics],
        },
        message: action.payload.message,
      };
    case types.UPDATE_TOPIC:
      const index_1 = state.community.topics.findIndex(
        (topic) => topic._id === action.payload.topic._id
      );
      state.community.topics[index_1] = action.payload.topic;
      return {
        ...state,
        community: {
          ...state.community,
          topics: [...state.topics],
        },
        message: action.payload.message,
      };
    case types.CREATE_QUIZ:
      state.dashboard.quizes.push(action.payload.quiz);
      state.community.topics.push(action.payload.topic);
      return {
        ...state,
        community: {
          ...state.community,
          topics: [...state.community.topics],
        },
        dashboard: {
          ...state.dashboard,
          quizes: [...state.dashboard.quizes],
        },
        message: action.payload.message,
      };
    case types.ADMIN_MSG:
      return {
        ...state,
        message: action.payload.message,
      };
    default:
      return state;
  }
};

export default adminReducer;
