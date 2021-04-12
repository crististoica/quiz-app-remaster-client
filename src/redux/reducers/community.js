import * as types from "../types/community";

const initialState = {
  data: [],
  message: {
    content: "",
    type: "",
  },
};

const communityReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.COMMUNITY_ERROR:
      return {
        ...initialState,
        message: action.payload.message,
      };

    case types.GET_TOPICS:
      return {
        ...state,
        data: action.payload.topics,
      };
    default:
      return state;
  }
};

export default communityReducer;
