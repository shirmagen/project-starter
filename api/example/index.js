import { AsyncRouter } from 'express-async-router';
import { create, getAll } from './example.controller';

const router = new AsyncRouter();

router.get('/', getAll);
router.post('/', create);

export default router;
