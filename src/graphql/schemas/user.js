import { makeExecutableSchema } from 'graphql-tools';

import typeDefs from '../definitions/user';

import { insertUser, getUser } from '../../db';

const resolvers = {
  Query: {
    async findUser(_, { _id }) {
      const user = await getUser(_id);
      return user;
    },
  },
  Mutation: {
    async createUser(_, { email, password }) {
      const user = await insertUser(email, password);
      return user;
    },
  }
};

export default makeExecutableSchema({
  typeDefs,
  resolvers
});
