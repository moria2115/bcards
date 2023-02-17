import { FunctionComponent, useContext, useMemo, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../App";
import { successMsg } from "../services/feebacks";

interface NavbarProps {}

const Navbar: FunctionComponent<NavbarProps> = () => {
  let UserCtx = useContext(UserContext);

  let navigate = useNavigate();

  let handleCollapse = () => {
    var nav = document.getElementById("navbarSupportedContent");
    var btn = document.getElementById("close-button");
    (nav as HTMLElement).classList.remove("show");
    (btn as HTMLButtonElement).classList.add("collapsed");
  };

  return useMemo(
    () => (
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
              className={"navbar-toggler collapsed"}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              id="close-button"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item mx-3">
                  <NavLink
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    className="nav-link text-primary"
                    aria-current="page"
                    to="/"
                    onClick={() => {
                      handleCollapse();
                      navigate("/");
                    }}
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item mx-3">
                  <NavLink
                    className="nav-link text-primary"
                    aria-current="page"
                    to="/about"
                    onClick={() => {
                      handleCollapse();
                      navigate("/about");
                    }}
                  >
                    About
                  </NavLink>
                </li>
                <li className="nav-item mx-3">
                  <NavLink
                    className="nav-link text-primary"
                    aria-current="page"
                    to="/cards"
                    onClick={() => {
                      handleCollapse();
                      navigate("/cards");
                    }}
                  >
                    Business Cards
                  </NavLink>
                </li>
                {!UserCtx.userctx.isLoggedIn && (
                  <>
                    <li className="nav-item mx-3">
                      <NavLink
                        className="nav-link text-primary"
                        to="/signin"
                        onClick={() => {
                          handleCollapse();
                          navigate("/signin");
                        }}
                      >
                        Sign in
                      </NavLink>
                    </li>
                    <li className="nav-item mx-3">
                      <NavLink
                        className="nav-link text-primary"
                        to="/signup"
                        onClick={() => {
                          handleCollapse();
                          navigate("/signup");
                        }}
                      >
                        Sign up
                      </NavLink>
                    </li>
                  </>
                )}
                {UserCtx.userctx.isLoggedIn && (
                  <>
                    <li className="nav-item mx-3">
                      <NavLink
                        className="nav-link text-primary"
                        aria-current="page"
                        to="/profile"
                        onClick={() => {
                          handleCollapse();
                          navigate("/profile");
                        }}
                      >
                        Profile
                      </NavLink>
                    </li>
                    {!UserCtx.userctx.isBusiness && (
                      <>
                        <li className="nav-item mx-3">
                          <NavLink
                            className="nav-link text-primary"
                            to="/favoriteCards"
                            onClick={() => {
                              handleCollapse();
                              navigate("/favoriteCards");
                            }}
                          >
                            Favorite Cards
                          </NavLink>
                        </li>
                      </>
                    )}
                    {UserCtx.userctx.isBusiness && (
                      <>
                        <li className="nav-item mx-3">
                          <NavLink
                            className="nav-link text-primary"
                            to="/myCards"
                            onClick={() => {
                              handleCollapse();
                              navigate("/myCards");
                            }}
                          >
                            My Cards
                          </NavLink>
                        </li>
                        <li className="nav-item mx-3">
                          <NavLink
                            className="nav-link text-primary"
                            to="/newCard"
                            onClick={() => {
                              handleCollapse();
                              navigate("/newCard");
                            }}
                          >
                            Create New Card
                          </NavLink>
                        </li>
                      </>
                    )}
                  </>
                )}
                <li className="nav-item mx-3">
                  <NavLink
                    className="nav-link text-primary"
                    aria-current="page"
                    to="/contactUs"
                    onClick={() => {
                      handleCollapse();
                      navigate("/contactUs");
                    }}
                  >
                    Contact Us
                  </NavLink>
                </li>
              </ul>
              {UserCtx.userctx.isLoggedIn && (
                <>
                  <form className="d-flex" role="search">
                    <button
                      className="btn btn-outline-danger"
                      onClick={() => {
                        UserCtx.changeUser({
                          ...UserCtx.userctx,
                          isLoggedIn: false,
                        });
                        sessionStorage.removeItem("userId");
                        successMsg("See you soon...");
                        navigate("/");
                      }}
                    >
                      Logout
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </nav>
      </>
    ),

    [UserCtx, navigate]
  );
};

export default Navbar;
