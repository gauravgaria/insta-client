import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route } from "react-router-dom";
import { Home, Profile, Login, Signup } from "./pages";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Route exact path="/"></Route>
        <Route exact path="/"></Route>
        <Route exact path="/"></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
