import { makeExecutableSchema } from 'graphql-tools';

import typeDefs from '../definitions/user';

import { insertUser, getUser, insertUserToken } from '../../db';

const resolvers = {
  Query: {
    async findUser(_, { _id }, ctx) {
      console.log(ctx.headers);
      const user = await getUser(_id);
      return user;
    },
  },
  Mutation: {
    async createUser(_, { email, password }) {
      const user = await insertUser(email, password);
      const { _id } = user;
      const userWithToken = await insertUserToken(_id);
      return userWithToken;
    },
  }
};

export default makeExecutableSchema({
  typeDefs,
  resolvers
});
