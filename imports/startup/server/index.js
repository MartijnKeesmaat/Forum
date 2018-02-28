import { createApolloServer } from "meteor/apollo";
import { makeExecutableSchema } from "graphql-tools";

// Schema, define the outcome of a key
const typeDefs = `
type Query {
  hi: String
}
`;

// Query
const resolvers = {
  Query: {
    hi() {
      return "Hello World";
    }
  }
};

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

createApolloServer({
  schema
});
