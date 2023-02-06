import { FunctionComponent, useContext, useState } from "react";
import { Link } from "react-router-dom";
// import { UserContext } from "../App";
import "../css/forms.css";
import SignUpUser from "./SignUpUser";

interface SignUpProps {}

const SignUp: FunctionComponent<SignUpProps> = ({}) => {
  let [isBusiness, setIsBusiness] = useState<boolean>(false);

  return (
    <>
      <div className="container mt-3 col-md-4 text-center">
        <h3 className="display-3 my-3">SIGN UP</h3>
        <div>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onChange={() => setIsBusiness(!isBusiness)}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              I'm a Business owner
            </label>
          </div>
          <SignUpUser isBusiness={isBusiness} />
        </div>

        <Link to="/">Already have a user? Login here</Link>
      </div>
    </>
  );
};

export default SignUp;
