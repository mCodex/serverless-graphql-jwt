import { ApolloServer } from 'apollo-server-lambda';
import lambdaPlayground from 'graphql-playground-middleware-lambda';
import jwt from 'jsonwebtoken';

import schema from './schema';

require('dotenv-safe').config();

const server = new ApolloServer({
  schema,
  context: ({ event, context }) => {
    context.callbackWaitsForEmptyEventLoop = false;

    // const id = 1;
    // const token = jwt.sign({ id }, process.env.SECRET, {
    //   expiresIn: 300
    // });
    // const verifiedToken = jwt.verify(token, process.env.SECRET);
  }
});

exports.graphql = server.createHandler();

exports.playground = lambdaPlayground({
  endpoint: '/graphql',
});
