import { FunctionComponent, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../App";

interface ProfileProps {}

const Profile: FunctionComponent<ProfileProps> = () => {
  let UserCtx = useContext(UserContext);

  return (
    <>
      <div className="container mx-auto text-center">
        <h1 className="display-1 text-center">My Profile</h1>
        <h3 className="display-3 text-center">
          Hello, {UserCtx.userctx?.name ?? "Stranger"}
        </h3>
        {!UserCtx.userctx.isBusiness && (
          <>
            <Link to={"/favoriteCards"} className="btn btn-primary my-4">
              My Favorite Cards
            </Link>
          </>
        )}
        {UserCtx.userctx.isBusiness && (
          <>
            <Link to={"/myCards"} className="btn btn-primary my-4">
              My Cards
            </Link>
          </>
        )}
      </div>
    </>
  );
};

export default Profile;
