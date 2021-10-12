import express from 'express';
import { json } from 'body-parser';
import logger from 'env-bunyan';
import mongooseErrors from 'express-mongoose-errors';
import jsonErrorHandler from 'express-json-error-handler';
import routes from './routes';

export default () => {
  var app = express();

  app.use(express.urlencoded({ extended: false }));
  app.use(json());

  routes(app);

  app.use(mongooseErrors());
  app.use(
    jsonErrorHandler({
      log({ err, req, res }) {
        logger.error({ err, req, res });
      },
    })
  );
  return app;
};
