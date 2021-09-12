import * as yup from "yup"; //import everything from yop

export const registerSchema = yup.object().shape({
  name: yup.string().min(3).max(30).required(),
  email: yup.string().email().required(),
  password: yup.string().min(4).required(),
  confirm_password: yup.string().oneOf([yup.ref("password"), null]),
});
