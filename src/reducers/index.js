import { combineReducers } from "redux";

import ListUsersReducer from "./ListUsersReducer";

export default combineReducers({
  ListUsers: ListUsersReducer,
});
