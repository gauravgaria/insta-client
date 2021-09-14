import * as yup from "yup"; //import everything from yop

export const postSchema = yup.object().shape({
  title: yup
    .string()
    .min(3)
    .max(30)
    .required("Enter a suitable title for the post"),
  body: yup
    .string()
    .min(3)
    .max(100)
    .required("Enter some description for your post"),
  photo: yup.mixed(),
});
