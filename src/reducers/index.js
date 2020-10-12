import { combineReducers } from "redux";

import ListUsersReducer from "./ListUsersReducer";
import CreateUserReducer from "./CreateUserReducer";

export default combineReducers({
  ListUsers: ListUsersReducer,
  CreateUser: CreateUserReducer,
});
