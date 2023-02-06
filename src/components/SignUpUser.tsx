import { FunctionComponent, useContext, useEffect } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import User from "../interfaces/User";
import { successMsg } from "../services/feebacks";
import { addNewUser, createFavoriteCards } from "../services/usersService";
import { UserContext } from "../App";

interface SignUpUserProps {
  isBusiness: boolean;
}

const SignUpUser: FunctionComponent<SignUpUserProps> = ({ isBusiness }) => {
  let UserCtx = useContext(UserContext);
  let navigate = useNavigate();
  let formik = useFormik({
    initialValues: { name: "", email: "", password: "" },
    validationSchema: yup.object({
      name: yup.string().required().min(2),
      email: yup.string().required().email().min(5),
      password: yup.string().required().min(8),
    }),
    onSubmit: (values: User) => {
      const newObj = { ...values, isBusiness: isBusiness, isLoggedIn: true };

      UserCtx.changeUser({ ...newObj, favoriteCards: [] });

      addNewUser(newObj)
        .then((res) => {
          createUserFavorites(res.data.id);
          navigate("/");

          sessionStorage.setItem("userId", JSON.stringify(res.data.id));

          successMsg("Youe registered Successfully!");
        })
        .catch((err) => console.log(err));
    },
  });

  let createUserFavorites = (userId: number) =>
    createFavoriteCards(userId).catch((err) => console.log(err));
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-floating my-3">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="Jhon"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <label htmlFor="floatingInput">Name</label>
          {formik.touched.name && formik.errors.name && (
            <small className="text-danger"> {formik.errors.name}</small>
          )}
        </div>
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="floatingemail"
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
          id="signupBtn"
          type="submit"
          className="btn btn-secondary w-100 my-3"
          disabled={!formik.dirty || !formik.isValid}
        >
          Register
        </button>
      </form>
    </>
  );
};

export default SignUpUser;
