import createError from 'http-errors';
import exampleRoute from '../../api/example';

export default app => {
  app.use('/api/example', exampleRoute);

  app.route('/:url(api)/*').get((req, res, next) => {
    next(createError(404));
  });
};
