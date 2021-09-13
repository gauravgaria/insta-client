import React, { useEffect, createContext, useContext, useReducer } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
import { Home, Profile, Login, Signup } from "./pages";
import Cookies from "js-cookie";
import { reducer, initalState } from "./reducers/useReducer";
import userController from "./controller/userController";

export const UserContext = createContext();

// create Routing component to use 'useHistory' hoook
const Routing = () => {
  const history = useHistory();
  const { state, dispatch } = useContext(UserContext);

  useEffect(() => {
    // console.log()
    console.log("app " + state);
    const refresh_token = Cookies.get("jid");
    const access_token = Cookies.get("sid");
    console.log(access_token);
    userController.getUserData(access_token, refresh_token).then((res) => {
      if (res && refresh_token) {
        console.log(res);
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
  return (
    <div className="App">
      <UserContext.Provider value={{ state, dispatch }}>
        <BrowserRouter>
          <Navbar />
          <Routing />
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;
