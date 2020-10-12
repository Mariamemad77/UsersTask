/** @format */

import { CreateUser } from "../types";

import { CreateUser as CreateUserService } from "../../api";

function setCreateUserPending(loading) {
  return {
    type: CreateUser.PENDING,
    loading,
  };
}

function setCreateUserSuccess(user) {
  return {
    type: CreateUser.SUCCESS,
    user,
  };
}
export function CreateUserAction(data) {
  return (dispatch) => {
    dispatch(setCreateUserPending(true));
    CreateUserService(data).then((res) => {
      if (res.status) {
        dispatch(setCreateUserPending(false));
        dispatch(setCreateUserSuccess(res.data));
        // window.location.href = "./";
        alert("Data Added Sucessfully");
      }
    });
  };
}
