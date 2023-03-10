import { useFormik } from "formik";
import { FunctionComponent, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { UserContext } from "../App";
import Card from "../interfaces/Card";
import { addCard } from "../services/cardsService";
import { successMsg } from "../services/feebacks";

interface CreateNewCardProps {}

const CreateNewCard: FunctionComponent<CreateNewCardProps> = () => {
  let UserCtx = useContext(UserContext);
  let navigate = useNavigate();
  let formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      website: "",
      phone: 0,
      address: "",
      image: "",
    },
    validationSchema: yup.object({
      name: yup.string().required().min(2),
      description: yup.string().required().min(5),
      address: yup.string().required().min(5),
      phone: yup.number().required(),
      image: yup.string().required().min(5),
      website: yup.string().required().min(5),
    }),
    onSubmit: (values: Card) => {
      values.userId = UserCtx.userctx.id;
      addCard({
        ...values,
        userId: UserCtx.userctx.id,
      })
        .then((res) => {
          navigate("/myCards");
          successMsg("Card added successfully");
        })
        .catch((err) => console.log(err));
    },
  });
  useEffect(() => {
    formik.setFieldValue("phone", "");
  }, []);
  return (
    <>
      <h1 className="Display-1 text-center my-3">CREATE NEW CARD</h1>
      <div className="container col-md-4">
        <form onSubmit={formik.handleSubmit}>
          <div className="form-floating my-3">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="Business Name"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <label htmlFor="floatingInput">Business Name</label>
            {formik.touched.name && formik.errors.name && (
              <small className="text-danger"> {formik.errors.name}</small>
            )}
          </div>
          <div className="form-floating my-3">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="Description"
              name="description"
              value={formik.values.description}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <label htmlFor="floatingInput">Description</label>
            {formik.touched.description && formik.errors.description && (
              <small className="text-danger">{formik.errors.description}</small>
            )}
          </div>
          <div className="form-floating my-3">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="website"
              name="website"
              value={formik.values.website}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <label htmlFor="floatingInput">Website</label>
            {formik.touched.website && formik.errors.website && (
              <small className="text-danger"> {formik.errors.website}</small>
            )}
          </div>
          <div className="form-floating my-3">
            <input
              type="phone"
              className="form-control"
              id="floatingInput"
              placeholder="Phone"
              name="phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <label htmlFor="floatingInput">Phone</label>
            {formik.touched.phone && formik.errors.phone && (
              <small className="text-danger"> {formik.errors.phone}</small>
            )}
          </div>
          <div className="form-floating my-3">
            <input
              type="string"
              className="form-control"
              id="floatingInput"
              placeholder="Address"
              name="address"
              value={formik.values.address}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <label htmlFor="floatingInput">Address</label>
            {formik.touched.address && formik.errors.address && (
              <small className="text-danger"> {formik.errors.address}</small>
            )}
          </div>
          <div className="form-floating my-3">
            <input
              type="string"
              className="form-control"
              id="floatingInput"
              placeholder="Image"
              name="image"
              value={formik.values.image}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <label htmlFor="floatingInput">image</label>
            {formik.touched.image && formik.errors.image && (
              <small className="text-danger"> {formik.errors.image}</small>
            )}
          </div>

          <button
            type="submit"
            disabled={!formik.isValid || !formik.dirty}
            className="btn btn-info my-3 w-100"
          >
            Create
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateNewCard;
