import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route } from "react-router-dom";
import { Home, Profile, Login, Signup } from "./pages";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Route exact path="/" component={Home}></Route>
        <Route path="/profile" component={Profile}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/signup" component={Signup}></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
