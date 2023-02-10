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

export async function addCardToFavorites(cardId: number) {
  let cardsArr: number[] = [];

  try {
    let userId: number = await JSON.parse(
      sessionStorage.getItem("userId") as string
    );

    if (!userId) return;

    let res = await axios.get(`${api}?userId=${userId}`);
    // console.log(res.data[userId]);
    if (res.data[0].favoriteCards.length) {
      cardsArr.push(res.data[0].favoriteCards);
    }
    cardsArr.push(cardId);

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
