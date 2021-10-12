import _ from 'lodash';
import createError from 'http-errors';
import Example from './example.model';

export const create = async ({ headers, body }, res, next) => {
  const { user } = headers;
  const { date } = body;

  const example = await Post.create({
    date,
    user,
  });

  if (!example) {
    throw createError(400);
  }

  res.send(example);
  next();

  // or return example if there is no next
};

export const getAll = async (req, res, next) => {
  const examples = await Example.find();

  res.send(examples);
  next();

  // or return example if there is no next
};
