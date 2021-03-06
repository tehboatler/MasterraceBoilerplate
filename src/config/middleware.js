import bodyParser from 'body-parser';
import { graphiqlExpress, graphqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import typeDefs from '../graphql/schema';
import resolvers from '../graphql/resolvers/index';

import constants from './constants';

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

export default (app) => {
  app.use(bodyParser.json());
  app.use(
    '/graphiql',
    graphiqlExpress({
      endpointURL: constants.GRAPHQL_PATH,
    }),
  );

  app.use(constants.GRAPHQL_PATH, graphqlExpress({ schema }));
};
