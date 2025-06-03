import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .max(100, "Must be less than 100 characters")
    .required("This field is required"),
  email: Yup.string()
    .email("Invalid email address")
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      "Invalid email address"
    )
    .required("This field is required"),
  // phone: Yup.string()
  //   .matches(/^[0-9+\s]+$/, "Only numbers are allowed")
  //   .min(10, "At least 10 digits")
  //   .max(15, "At most 15 digits"),
  message: Yup.string()
    .min(10, "Must be more than 10 characters")
    .required("This field is not empty"),
});

export default validationSchema;
