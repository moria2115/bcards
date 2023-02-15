import { FunctionComponent, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../App";

interface ProfileProps {}

const Profile: FunctionComponent<ProfileProps> = () => {
  let USerCtx = useContext(UserContext);

  return (
    <>
      <h1 className="display-1 text-center">My Profile</h1>
      <h3 className="display-3 text-center">
        Hello, {USerCtx.userctx?.name ?? "Stranger"}
      </h3>

      <Link to={"/favoriteCards"} className="btn btn-primary">
        My Cards
      </Link>
    </>
  );
};

export default Profile;
