import Task from '../../api/task/task.model';

export const create = async ({ action, product, location, status }) => {
  const result = await Task.create({ action, product, location, status });

  if (!result) {
    throw createError(400);
  }

  return result;
};

export const getById = async id => {
  const task = await Task.getById(id);

  if (!task) {
    throw createError(404, `Task ${id} does not exist`);
  }

  return task;
};
