import { createApolloServer } from "meteor/apollo";
import { makeExecutableSchema } from "graphql-tools";

import ResolutionsSchema from "../../api/resolutions/resolutions.graphql";

const testSchema = `
type Query {
  hi: String
}
`;

const typeDefs = [testSchema, ResolutionsSchema];

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
