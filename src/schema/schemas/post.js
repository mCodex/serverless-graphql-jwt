import { gql } from 'apollo-server-lambda';
import { makeExecutableSchema } from 'graphql-tools';

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => 'Hello world!',
  },
};

export default makeExecutableSchema({
  typeDefs,
  resolvers
});
