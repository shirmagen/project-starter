import 'dotenv-extended/config';
import logger from 'env-bunyan';
import connect from './config/mongoose';
import create from './config/express/express';

(async () => {
  const app = create();
  const { PORT } = process.env;
  await connect();
  await app.listen(PORT);
  logger.info(`Express listening on port ${PORT}`);
})();
