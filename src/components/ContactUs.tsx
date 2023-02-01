import { useFormik } from "formik";
import { FunctionComponent, useEffect } from "react";
import * as yup from "yup";

interface ContactUsProps {}

const ContactUs: FunctionComponent<ContactUsProps> = () => {
  let formik = useFormik({
    initialValues: { email: "", phone: 0, name: "" },
    validationSchema: yup.object({
      name: yup.string().required().min(2),
      email: yup.string().required().email().min(5),
      phone: yup.number().required(),
    }),
    onSubmit: (values) => {
      //   checkUser(values)
      //     .then((res) => {
      //       if (res.data.length) {
      //         navigate("/");
      //         setIsLoggedIn(true);
      //         sessionStorage.setItem(
      //           "userData",
      //           JSON.stringify({
      //             isLoggedin: true,
      //             userId: res.data[0].id,
      //           })
      //         );
      //         successMsg("Youe logged in Successfully!");
      //       } else errorMsg("Wrong Email or Password!");
      //     })
      //     .catch((err) => console.log(err));
    },
  });
  useEffect(() => {
    formik.setFieldValue("phone", "");
  }, []);
  return (
    <>
      <div className="container mt-3 text-center">
        <h3 className="display-3">CONTACT US</h3>
        <div className="alert alert-primary" role="alert">
          For all other questions, please use the form below.
        </div>
        <div className="row">
          <div className="col-md-6">
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
                  type="phone"
                  className="form-control"
                  id="floatinginput"
                  placeholder="Phone Number"
                  name="phone"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <label htmlFor="floatingPassword">Phone Number</label>
                {formik.touched.phone && formik.errors.phone && (
                  <small className="text-danger"> {formik.errors.phone}</small>
                )}
              </div>
              <button
                type="submit"
                id="signinBtn"
                className="btn w-100 my-3"
                disabled={!formik.dirty || !formik.isValid}
              >
                Submit
              </button>
            </form>
          </div>
          <div className="container col-md-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3376.9521138289833!2d34.9322535!3d32.178566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d399ec45de401%3A0x64f9927c76f1ffb5!2z16LXntenINeX15XXqNeV158gNiwg15vXpNeoINeh15HXkA!5e0!3m2!1siw!2sil!4v1675237449086!5m2!1siw!2sil"
              width="630rem"
              height="270rem"
              style={{ border: "0" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
