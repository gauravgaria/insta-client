import * as yup from "yup"; //import everything from yop

export const postSchema = yup.object().shape({
  title: yup.string().min(3).max(30).required(),
  body: yup.string().min(3).max(30).required(),
  photo: yup.string().min(4),
});
