import { ApolloServer } from 'apollo-server-lambda';
import lambdaPlayground from 'graphql-playground-middleware-lambda';
import jwt from 'jsonwebtoken';
import db from 'mongoose';

import schema from './schema';

require('dotenv-safe').config();

db.Promise = require('bluebird');

const server = new ApolloServer({
  schema,
  context: async ({ event, context }) => {
    context.callbackWaitsForEmptyEventLoop = false;

    const mongoState = db.connection.readyState;

    // Caso não haja nenhuma conexão, será necessário abrir uma
    if (mongoState === 0) {
      await db.connect(process.env.DB);
    }

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
