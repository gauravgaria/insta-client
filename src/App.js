import React, {
  useEffect,
  createContext,
  useContext,
  useReducer,
  useState,
} from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
import { Home, Profile, Login, Signup } from "./pages";
import Cookies from "js-cookie";
import { reducer, initalState } from "./reducers/useReducer";
import userController from "./controller/userController";
import { css } from "@emotion/react";

import HashLoader from "react-spinners/HashLoader";

export const UserContext = createContext();

// create Routing component to use 'useHistory' hoook
const Routing = () => {
  const history = useHistory();
  const { state, dispatch } = useContext(UserContext);

  useEffect(() => {
    const refresh_token = Cookies.get("jid");
    const access_token = Cookies.get("sid");

    userController.getUserData(access_token, refresh_token).then((res) => {
      if (res && refresh_token) {
        dispatch({ type: "USER", payload: res });
      } else {
        history.push("/login");
      }
    });
  }, []);

  return (
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route path="/profile" component={Profile}></Route>
      <Route path="/login" component={Login}></Route>
      <Route path="/signup" component={Signup}></Route>
    </Switch>
  );
};

function App() {
  const [state, dispatch] = useReducer(reducer, initalState);
  const [loader, setLoader] = useState(true);

  const override = css`
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
  `;

  useEffect(() => {
    const refresh_token = Cookies.get("jid");
    console.log(refresh_token);
    if (refresh_token) {
      console.log("already logged in");
      setLoader(false);
    } else {
      console.log("already  in");
      setTimeout(() => {
        setLoader(false);
      }, 3000);
    }
  }, []);

  return (
    <div className="App">
      {loader ? (
        <>
          <HashLoader
            color={"#123abc"}
            css={override}
            loading={loader}
            size={150}
          />
          <h3
            style={{
              fontFamily: "cursive",
              fontSize: "1.5rem",
              position: "absolute",
              top: "32%",
              left: "50%",
              marginRight: "-50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            Loading instaposts....
          </h3>
        </>
      ) : (
        <UserContext.Provider value={{ state, dispatch }}>
          <BrowserRouter>
            <Navbar />
            <Routing />
          </BrowserRouter>
        </UserContext.Provider>
      )}
    </div>
  );
}

export default App;
