import { ApolloServer } from 'apollo-server-lambda';
import lambdaPlayground from 'graphql-playground-middleware-lambda';
import jwt from 'jsonwebtoken';
import db from 'mongoose';

import schema from './graphql';

require('dotenv-safe').config();

db.Promise = require('bluebird');

const server = new ApolloServer({
  schema,
  context: async ({ event, context }) => {
    context.callbackWaitsForEmptyEventLoop = false;

    const mongoState = db.connection.readyState;

    // Sometimes mongoDB is not connect.
    if (mongoState === 0) {
      await db.connect(process.env.DB_DEV);
    }

    return ({
      headers: event.headers,
      functionName: context.functionName,
      event,
      context,
    });
  }
});

exports.graphql = server.createHandler({
  cors: {
    origin: '*',
    credentials: true
  }
});

exports.playground = lambdaPlayground({
  endpoint: '/graphql',
});
