import createError from 'http-errors';
import { actions } from '../../utils/stock-actions';
import Product from './product.model';

export const getAll = async () => Product.find({});
export const update = async ({ name, changeInAmount }) => {
  const result = await Product.findOneAndUpdate({ name }, { $inc: { amount: changeInAmount } });

  if (!result) {
    throw createError(404, `Product named ${name} does not exist`);
  }

  return result;
};

export const getByName = async ({ name }) => {
  const result = await Product.findOne({ name });

  if (!result) {
    throw createError(404, `Product named ${name} does not exist`);
  }

  return result;
};

export const updateProductFromTask = async ({ action, product }) => {
  if (action === actions.order) {
    await update({ name: product, changeInAmount: -1 });
  }
  if (action === actions.supply) {
    await update({ name: product, changeInAmount: 1 });
  }
};
