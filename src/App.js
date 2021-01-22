import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home.js";
import Detail from "./routes/Detail.js";
import { About as Potato } from "./routes/About.js";
import Navigation from "./components/Navigation.js";
import "./reset.css";

const App = () => {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={Potato} />
      <Route path="/movie/:id" component={Detail} />
      {/* Route 컴포넌트는 props를 줌 */}
    </HashRouter>
  );
};

export default App;
