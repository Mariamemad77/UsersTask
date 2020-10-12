/** @format */

import { CreateUser } from "../actions/types";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case CreateUser.PENDING:
      return {
        loading: true,
      };
    case CreateUser.FAILED:
      return { loading: false, errorMessage: action.err };

    case CreateUser.SUCCESS:
      return {
        loading: false,
        errorMessage: null,
        user: action.user,
      };

    default:
      return state;
  }
};
