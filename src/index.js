import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
//import "font-awesome/css/font-awesome.min.css";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

const client = new ApolloClient({
  uri: "http://localhost:4001/graphql",
  fetchOptions: {
    mode: "cors",
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
