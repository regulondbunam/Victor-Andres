import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Documentation from "./../pages/Documentation";
import ServiceInformation from "./../pages/ServiceInformation";
import Navbar from "./../components/Navbar";

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/" component={Documentation} />
        <Route exact path="/:service" component={ServiceInformation} />
      </Switch>
    </Router>
  );
}

export default App;
