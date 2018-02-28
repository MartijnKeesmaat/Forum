import React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

const App = ({ data }) => <h1>{data.hi}</h1>;

// Query from Graphiql
const hiQuery = gql`
  {
    hi
  }
`;

export default graphql(hiQuery)(App);
