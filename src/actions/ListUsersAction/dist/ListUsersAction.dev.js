"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListUsersAction = ListUsersAction;
exports.ListUsersPagesAction = ListUsersPagesAction;

var _types = require("../types");

var _api = require("../../api");

/** @format */
function setListUsersPending(loading) {
  return {
    type: _types.ListUsers.PENDING,
    loading: loading
  };
}

function setListUsersSuccess(list_of_users) {
  return {
    type: _types.ListUsers.SUCCESS,
    list_of_users: list_of_users
  };
}

function setListUsersPagesSuccess(list_of_users_pages) {
  return {
    type: _types.ListUsers.SUCCESS,
    list_of_users_pages: list_of_users_pages
  };
}

function ListUsersAction(pageNumber) {
  return function (dispatch) {
    dispatch(setListUsersPending(true));
    (0, _api.ListUsers)().then(function (res) {
      dispatch(setListUsersPending(false));
      dispatch(setListUsersSuccess(res.data.data));
      console.log(res.data.data);
      console.log(pageNumber);
    });
  };
}

function ListUsersPagesAction() {
  return function (dispatch) {
    dispatch(setListUsersPending(true));
    (0, _api.ListUsers)().then(function (res) {
      dispatch(setListUsersPending(false));
      dispatch(setListUsersPagesSuccess(res.data));
      console.log(res.data);
    });
  };
}