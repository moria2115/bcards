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

export async function addCardToFavorites(cardId: number) {
  let cardsArr: number[] = [];
  let userId: number = JSON.parse(
    sessionStorage.getItem("userData") as string
  ).userId;

  try {
    let res = await axios.get(`${api}?userId=${userId}`);
    cardsArr = res.data[0].favoriteCards;
    console.log(cardsArr);

    cardsArr.push(cardId);
    console.log(cardsArr);

    return axios.patch(`${api}/${userId}`, { favoriteCards: cardsArr });
  } catch (error) {
    console.log(error);
  }
}

export function createFavoriteCards(userId: number) {
  return axios.patch(`${api}/${userId}`, {
    favoriteCards: [],
  });
}
