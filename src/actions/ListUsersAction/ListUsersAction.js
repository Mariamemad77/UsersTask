/** @format */

import { ListUsers } from "../types";

import { ListUsers as ListUsersService } from "../../api";

function setListUsersPending(loading) {
  return {
    type: ListUsers.PENDING,
    loading,
  };
}

function setListUsersSuccess(list_of_users) {
  return {
    type: ListUsers.SUCCESS,
    list_of_users,
  };
}

function setListUsersPagesSuccess(list_of_users_pages) {
  return {
    type: ListUsers.SUCCESS,
    list_of_users_pages,
  };
}

export function ListUsersAction(pageNumber) {
  return (dispatch) => {
    dispatch(setListUsersPending(true));

    ListUsersService().then((res) => {
      dispatch(setListUsersPending(false));
      dispatch(setListUsersSuccess(res.data.data));
      console.log(res.data.data);
      console.log(pageNumber);
    });
  };
}

export function ListUsersPagesAction() {
  return (dispatch) => {
    dispatch(setListUsersPending(true));

    ListUsersService().then((res) => {
      dispatch(setListUsersPending(false));
      dispatch(setListUsersPagesSuccess(res.data));
      console.log(res.data);
    });
  };
}
