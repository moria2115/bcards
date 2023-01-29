import Card from "./Card";

export default interface User {
  id?: number;
  name?: string;
  email: string;
  password: string;
  isBusiness?: boolean;
  myCards?: Card[];
}