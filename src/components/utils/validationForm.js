import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .max(100, "Must be less than 100 characters")
    .required("This field is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("This field is required"),
  // phone: Yup.string()
  //   .matches(/^[0-9+\s]+$/, "Only numbers are allowed")
  //   .min(10, "At least 10 digits")
  //   .max(15, "At most 15 digits"),
  // message: Yup.string()
  //   .min(10, "Minimum 10 characters required")
  //   .required("This field is not empty"),
});

export default validationSchema;
