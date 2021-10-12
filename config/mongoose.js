import mongoose from 'mongoose';
import logger from 'env-bunyan';

export default async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    logger.info('Connected to MongoDB');
  } catch (error) {
    console.log('mongo error is', error);
    logger.error('Failed connecting to MongoDB');
  }

  mongoose.connection.on('error', err => {
    logger.info(err);
  });
};
