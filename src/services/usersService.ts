import axios from "axios";
import Card from "../interfaces/Card";
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

export async function addCardToFavorites(cardId: number, user: User) {
  let favoriteCards = user.favoriteCards?.length
    ? [...user.favoriteCards, cardId]
    : [cardId];
  try {
    return axios.patch(`${api}/${user.id}`, { favoriteCards });
  } catch (error) {
    console.log(error);
  }
}

export function createFavoriteCards(userId: number) {
  return axios.patch(`${api}/${userId}`, {
    favoriteCards: [],
  });
}
