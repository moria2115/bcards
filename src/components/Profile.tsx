import { FunctionComponent, useEffect, useState } from "react";
import User from "../interfaces/User";
import { getUserById } from "../services/usersService";

interface ProfileProps {}

const Profile: FunctionComponent<ProfileProps> = () => {
  let [user, setUser] = useState<User>({
    name: "",
    email: "",
    password: "",
  });
  let userId: number = JSON.parse(
    sessionStorage.getItem("userData") as string
  ).userId;

  useEffect(() => {
    getUserById(userId)
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <h1 className="display-1 text-center">My Profile</h1>
      <h3 className="display-3 text-center">Hello, {user.name}</h3>
    </>
  );
};

export default Profile;
