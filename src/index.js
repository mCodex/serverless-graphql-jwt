import { ApolloServer } from 'apollo-server-lambda';
import lambdaPlayground from 'graphql-playground-middleware-lambda';

import schema from './schema';

const server = new ApolloServer({
  schema,
  context: ({ event, context }) => {
    context.callbackWaitsForEmptyEventLoop = false;
  }
});

exports.graphql = server.createHandler();

exports.playground = lambdaPlayground({
  endpoint: '/dev/graphql',
});
