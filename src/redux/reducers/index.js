import { combineReducers } from "redux";

import authReducer from "./auth";
import quizReducer from "./quiz";
import communityReducer from "./community";
import adminReducer from "./admin";

const rootReducer = combineReducers({
  auth: authReducer,
  quiz: quizReducer,
  community: communityReducer,
  admin: adminReducer,
});

export default rootReducer;
