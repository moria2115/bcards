import axios from "axios";
import Card from "../interfaces/Card";

const api: string = process.env.REACT_APP_API + "/cards" || "";

export function addCard(newCard: Card) {
  return axios.post(api, newCard);
}

export function getCardsById(id: number) {
  return axios.get(`${api}/${id}`);
}

export function getAllCards() {
  return axios.get(api);
}

export function deleteCard(id: number) {
  return axios.delete(`${api}/${id}`);
}

export function updateCard(newCard: Card) {
  return axios.put(`${api}/${newCard.id}`, newCard);
}
