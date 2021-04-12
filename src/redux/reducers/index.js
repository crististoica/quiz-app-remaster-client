import { combineReducers } from "redux";

import authReducer from "./auth";
import quizReducer from "./quiz";
import communityReducer from "./community";
import adminReducer from "./admin";

const allReducers = combineReducers({
  auth: authReducer,
  quiz: quizReducer,
  community: communityReducer,
  admin: adminReducer,
});

export default allReducers;
