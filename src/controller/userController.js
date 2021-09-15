import axios from "axios";
import Cookies from "js-cookie";

axios.defaults.withCredentials = true;
const userController = {
  async storeUserData(user) {
    try {
      const res = await axios.post(
        process.env.REACT_APP_INSTA_API_PROD + "/api/signup",
        user,
        {
          withCredentials: true,
          credentials: "include",
          headers: {
            "access-control-allow-origin": "set-cookie",
          },
        }
      );
      if (res) {
        return this.tokenValidation(res);
      }
    } catch (err) {
      return err.response;
    }
  },

  // login user

  async loginUser(user) {
    try {
      const res = await axios.post("/api/login", user, {
        withCredentials: true,
        credentials: "include",
        headers: {
          "access-control-allow-origin": "set-cookie",
        },
      });
      if (res) {
        return this.tokenValidation(res);
      }
    } catch (err) {
      return err.response;
    }
  },

  async tokenValidation(res) {
    if (!res.status) {
      throw Error("something went wrong");
    } else {
      const { access_token } = res.data;
      let token;

      if (!access_token) {
        token = await this.protect();
        if (!token) {
          return false;
        } else {
          return token;
        }
      }

      return res;
    }
  },

  //check token validity
  async protect() {
    let refresh_token = Cookies.get("jid");
    //let refreshToken = Cookies.get("refresh");

    const accessToken = await this.hasAccess(refresh_token);

    if (!accessToken) {
      console.log("internal server error ");
    } else {
      return accessToken;
    }
  },

  //hasAccess method
  async hasAccess(refreshToken) {
    if (!refreshToken) {
      return null; //unauthorized
    } else {
      const accessToken = await this.refresh(refreshToken);

      return accessToken;
    }
  },

  //generate new access token
  async refresh(refreshToken) {
    const refresh = {
      token: refreshToken,
    };
    const newAccessToken = await axios.post("/api/refresh", refresh, {
      credentials: "include",
      headers: {
        Accept: "application/json",
      },
    });

    if (!newAccessToken) {
      console.log("Invalid refresh token");
    } else {
      return newAccessToken;
    }
  },

  async getUserData(access_token, refresh_token) {
    if (access_token) {
      const res = await axios.get("/api/me", {
        credentials: "include",
        headers: {
          authorization: `Bearer ${access_token}`,
          Accept: "application/json",
        },
      });
      return res;
    } else {
      if (access_token || refresh_token) {
        const access = await this.hasAccess(refresh_token);

        if (access.status === 200) {
          const res = await axios.get("/api/me", {
            credentials: "include",
            headers: {
              authorization: `Bearer ${access.data.access_token}`,
              Accept: "application/json",
            },
          });

          if (res) {
            return res.data;
          } else {
            console.log("invalid token");
          }
        }
      } else {
        console.log("invalid token");
      }
    }
  },

  async logoutUser(refresh_token) {
    const refresh = {
      token: refresh_token,
    };
    const logoutRes = await axios.post("/api/logout", refresh, {
      credentials: "include",
      headers: {
        Accept: "application/json",
      },
    });
    if (logoutRes.status === 200) {
      return logoutRes;
    }
  },
};

export default userController;
