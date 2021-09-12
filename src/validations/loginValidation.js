import * as yup from "yup"; //import everything from yop

export const loginSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(4).required(),
});
