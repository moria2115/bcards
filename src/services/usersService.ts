import axios from "axios";
import User from "../interfaces/User";

const api = process.env.REACT_APP_API + "/users" || "";

export function checkUser(userToCheck: User) {
  return axios.get(
    `${api}?email=${userToCheck.email}&password=${userToCheck.password}`
  );
}

export function addNewUser(userToAdd: User) {
  return axios.post(api, userToAdd);
}

export function getUserById(id: number) {
  return axios.get(`${api}/${id}`);
}
