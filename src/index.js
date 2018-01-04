import express from 'express';
import { createServer } from 'http';
import constants from './config/constants';
import middleware from './config/middleware';

const app = express();
middleware(app);
const graphQLServer = createServer(app);

graphQLServer.listen(constants.PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`App is live on port: ${constants.PORT}`);
  }
});
