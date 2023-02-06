import { FunctionComponent, useContext } from "react";
import { Link } from "react-router-dom";
import "../css/home.css";

interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
  return (
    <>
      <div className="container">
        <h1 className=" text-center display-1">WELCOME TO BCARDS</h1>
        <div className="row">
          <div className="col-md-7 my-auto">
            <h3 className="display-3">Create your own business card easily</h3>
            <Link className="btn btn-primary mx-2 mt-3" to={"/signIn"}>
              Sign In
            </Link>
            <Link className="btn btn-primary mt-3" to={"/signUp"}>
              Sign Up
            </Link>
          </div>
          <img
            className="col-md-5"
            src="\images\Tech_Tech_Website_in_Teal_White_Navy_Gradients_Style__1_-removebg-preview.png"
            alt="Mobile image"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
