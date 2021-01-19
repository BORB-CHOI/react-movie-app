import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home.js";
import { About as Potato } from "./routes/About";
import Navigation from "./components/Navigation.js";
import "./reset.css";

const App = () => {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={Potato} />
    </HashRouter>
  );
};

export default App;
