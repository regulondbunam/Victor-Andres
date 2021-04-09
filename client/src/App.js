import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navigation from "./components/Navbar";
import ServiceInfo from "./components/ServiceInfo";
//import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/" component={ServiceInfo} />
      </Switch>
    </Router>
  );
}

export default App;
