import { error } from "console";
import { FunctionComponent, useContext, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
// import { userDetails } from "../App";
import User from "../interfaces/User";
import { successMsg } from "../services/feebacks";

interface NavbarProps {
  isLoggedIn: boolean;
  setIsLoggedIn: Function;
}

const Navbar: FunctionComponent<NavbarProps> = ({
  isLoggedIn,
  setIsLoggedIn,
}) => {
  let navigate = useNavigate();
  // let user: User = useContext(userDetails);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <img
              src="/images/BcardLogo-removebg-preview.png"
              style={{ width: "8rem" }}
              alt="Bcards logo"
            />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item mx-3">
                <NavLink className="nav-link text-primary" to="/signin">
                  Sign in
                </NavLink>
              </li>
              <li className="nav-item mx-3">
                <NavLink className="nav-link text-primary" to="/signup">
                  Sign up
                </NavLink>
              </li>
              <li className="nav-item mx-3">
                <NavLink
                  className="nav-link text-primary"
                  aria-current="page"
                  to="/about"
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item mx-3">
                <NavLink
                  className="nav-link text-primary"
                  aria-current="page"
                  to="/cards"
                >
                  Business Cards
                </NavLink>
              </li>
              {isLoggedIn && (
                <>
                  <li className="nav-item mx-3">
                    <NavLink
                      className="nav-link text-primary"
                      aria-current="page"
                      to="/profile"
                    >
                      Profile
                    </NavLink>
                  </li>
                  <li className="nav-item mx-3">
                    <NavLink className="nav-link text-primary" to="/myCards">
                      My Cards
                    </NavLink>
                  </li>
                  <li className="nav-item mx-3">
                    <NavLink
                      className="nav-link text-primary"
                      to="/favoriteCards"
                    >
                      Favorite Cards
                    </NavLink>
                  </li>
                </>
              )}
              {/* {user.isBusiness && isLoggedIn && ( */}
              {/* <> */}
              <li className="nav-item mx-3">
                <NavLink className="nav-link text-primary" to="/newCard">
                  Create New Card
                </NavLink>
              </li>
              {/* </> */}
              {/* )} */}
              <li className="nav-item mx-3">
                <NavLink
                  className="nav-link text-primary"
                  aria-current="page"
                  to="/contactUs"
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
            {isLoggedIn && (
              <form className="d-flex" role="search">
                <button
                  className="btn btn-outline-success"
                  onClick={() => {
                    setIsLoggedIn(false);
                    sessionStorage.removeItem("userData");
                    successMsg("See you soon...");
                    navigate("/");
                  }}
                >
                  Logout
                </button>
              </form>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
