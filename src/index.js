/* eslint-disable prefer-destructuring */
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import models from './models';
import env from './config/env';
import { typeDefs, resolvers } from './gen';

// apollo server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({ req, models }),
  // debug: false,
});

// server
const app = express();
server.applyMiddleware({ app });

// sync and authenticate all db models
models.sequelize.authenticate();
models.sequelize.sync();

const port = app.listen(env.PORT || 3000, () => console.log(`listening on port http://localhost:${port.address().port}${server.graphqlPath} 🚀 `));
