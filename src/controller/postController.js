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
          return postResponse;
        } else {
          console.log(postResponse);
        }
      }
    }
  },

  async showAllPosts() {
    let refresh_token = Cookies.get("jid");

    if (refresh_token) {
      const res = await userController.protect(refresh_token);

      if ((res.status = 200 && res.data.access_token)) {
        const getPosts = await axios.get("api/post/posts", {
          credentials: "include",
          headers: {
            authorization: `Bearer ${res.data.access_token}`,
          },
        });

        if (getPosts.status === 200) {
          return getPosts;
        } else {
          console.log(getPosts);
        }
      }
    }
  },
};
export default postController;
