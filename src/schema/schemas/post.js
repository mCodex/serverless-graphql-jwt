import { makeExecutableSchema } from 'graphql-tools';

import typeDefs from '../definitions/hello';

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
