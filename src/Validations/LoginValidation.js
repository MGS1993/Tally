import * as yup from "yup";

const loginSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup
    .string()
    .min(4, "Password must contain at least 4 characters")
    .required("Password is required"),
});

export default loginSchema;
