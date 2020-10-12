/** @format */
import http from "../services/httpService";

import { API } from "../config/constants";

export async function ListUsers(pageNumber) {
  return http.get(`${API}/users?page=${pageNumber}`, {});
}

export async function CreateUser(data) {
  let body = {
    ...data,
  };
  return http.post(`${API}/users`, body);
}
