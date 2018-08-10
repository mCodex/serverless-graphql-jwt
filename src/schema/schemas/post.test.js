import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import { graphql } from 'graphql';

// Fill this in with the schema string
import typeDefs from '../definitions/hello';

// Make a GraphQL schema with no resolvers
const schema = makeExecutableSchema({ typeDefs });

// Add mocks, modifies schema in place
addMockFunctionsToSchema({ schema });

const query = `{
  hello
}`;

describe('Autenticacao', () => {
  it('should match snapshot', async () => {
    const { data } = await graphql(schema, query);
    expect(data.hello).toEqual('Hello World');
  });
});
