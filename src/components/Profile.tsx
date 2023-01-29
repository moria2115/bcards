import { FunctionComponent, useEffect, useState } from "react";
import User from "../interfaces/User";
import { getUserById } from "../services/usersService";

interface ProfileProps {}

const Profile: FunctionComponent<ProfileProps> = () => {
  let [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const getUser = async () => {
      try {
        let userId: number = await JSON.parse(
          sessionStorage.getItem("userData") as string
        ).userId;
        getUserById(userId)
          .then((res) => {
            setUser(res.data);
          })
          .catch((err) => console.log(err));
      } catch (error) {
        console.log(error);
      }
      getUser();
    };
  }, []);

  return (
    <>
      <h1 className="display-1 text-center">My Profile</h1>
      <h3 className="display-3 text-center">
        Hello, {user?.name ?? "Stranger"}
      </h3>
    </>
  );
};

export default Profile;
