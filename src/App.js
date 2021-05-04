import React from "react";
import { Switch, Route } from "react-router-dom";
import Layout from "./layout/layout";
import Documentation from "./apps/docs_dt/Doc_Main";

export default function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/">
          <Documentation />
        </Route>
        <Route exact path="/:service">
          <Documentation />
        </Route>
      </Switch>
    </Layout>
  );
}
