import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import { graphql } from 'graphql';

// Fill this in with the schema string
import typeDefs from '../definitions/user';

// Make a GraphQL schema with no resolvers
const schema = makeExecutableSchema({ typeDefs });

// Add mocks, modifies schema in place
addMockFunctionsToSchema({ schema });

const mutation = `{
  mutation($email: String!, $password:String!){
    createUser(email: $email, password: $password) {
      email
    }
  },
  variables: {
    "email": "test@test.com",
    "password": "myStrongPassword"
  }
}`;

describe('User endpoint', () => {
  it('should be tested', async () => {
    const graphResult = await graphql(schema, mutation);
    console.log(graphResult);
    // expect(data.).toEqual('Hello World');
  });
});
