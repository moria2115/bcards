import { useFormik } from "formik";
import { FunctionComponent, useContext } from "react";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import User from "../interfaces/User";
import "../css/forms.css";
import { checkUser } from "../services/usersService";
import { errorMsg, successMsg } from "../services/feebacks";
import { UserContext } from "../App";

interface SignInProps {}

const SignIn: FunctionComponent<SignInProps> = () => {
  let UserCtx = useContext(UserContext);
  let navigate = useNavigate();
  let formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: yup.object({
      email: yup.string().required().email().min(5),
      password: yup.string().required().min(8),
    }),
    onSubmit: (values: User) => {
      checkUser(values)
        .then((res) => {
          if (res.data.length) {
            UserCtx.changeUser({ ...res.data, isLoggedIn: true });
            sessionStorage.setItem("userId", JSON.stringify(res.data[0].id));
            navigate("/");
            successMsg("Youe logged in Successfully!");
          } else errorMsg("Wrong Email or Password!");
        })
        .catch((err) => console.log(err));
    },
  });
  return (
    <>
      <div className="container mt-3 col-md-4 text-center">
        <h1 className="display-3">SIGN IN</h1>
        <form onSubmit={formik.handleSubmit}>
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <label htmlFor="floatingInput">Email address</label>
            {formik.touched.email && formik.errors.email && (
              <small className="text-danger"> {formik.errors.email}</small>
            )}
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <label htmlFor="floatingPassword">Password</label>
            {formik.touched.password && formik.errors.password && (
              <small className="text-danger"> {formik.errors.password}</small>
            )}
          </div>
          <button
            type="submit"
            id="signinBtn"
            className="btn w-100 my-3"
            disabled={!formik.dirty || !formik.isValid}
          >
            <i className="fa-solid fa-arrow-right-to-bracket"></i> Sign In
          </button>
        </form>
        <Link to="/signUp">New user? Sign Up here</Link>
      </div>
    </>
  );
};

export default SignIn;
