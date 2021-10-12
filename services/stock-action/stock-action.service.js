import { create as createTask } from '../task/task.service';
import { statuses } from '../../utils/task-status.enum';

export const actionOnStock = async ({ product, validator, actionText }) => {
  if (validator) validator({ product });

  await createTask({ action: actionText, product, location, status: statuses.waiting });
};
