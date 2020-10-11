/** @format */

import { ListUsers } from "../actions/types";

const initialState = {
  list_of_users: [],
  list_of_users_pages: [],
  loading: false,
  errorMessage: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ListUsers.PENDING:
      return {
        ...state,
        loading: action.loading,
      };
    case ListUsers.FAILED:
      return {
        ...state,
        errorMessage: action.err,
      };

    case ListUsers.SUCCESS:
      return {
        ...state,
        list_of_users: action.list_of_users,
        list_of_users_pages: action.list_of_users_pages,
      };

    default:
      return state;
  }
};
