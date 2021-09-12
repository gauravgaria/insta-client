import axios from "axios";
import Cookies from "js-cookie";
import userController from "./userController";
axios.defaults.withCredentials = true;
const postController = {
  async createPost(post) {
    let refresh_token = Cookies.get("jid");

    if (refresh_token) {
      const res = await userController.protect(refresh_token);

      if ((res.status = 200 && res.data.access_token)) {
        const postResponse = await axios.post("/api/post/create", post, {
          credentials: "include",
          headers: {
            authorization: `Bearer ${res.data.access_token}`,
            "Content-Type": "multipart/form-data",
          },
        });
        if (postResponse.status === 200) {
          console.log(postResponse);
        }
      }
    }

    /*  const res = await axios.post("/api/post/create", post, {
            withCredentials: true,
            credentials: "include",
            headers: {
              "access-control-allow-origin": "*",
            },
          }); */
  },
};
export default postController;