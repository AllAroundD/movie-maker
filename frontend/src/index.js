import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import App from "./App";

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
const { REACT_APP_STEPZEN_API_KEY, REACT_APP_STEPZEN_URI } = process.env;

const client = new ApolloClient({
  cache: new InMemoryCache(),
  // headers: {
  //   Authorization: `Apikey ${REACT_APP_STEPZEN_API_KEY}`,
  // },
  // uri: REACT_APP_STEPZEN_URI,
  uri: "http://localhost:4000/graphql",
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
