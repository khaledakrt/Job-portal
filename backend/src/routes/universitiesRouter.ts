import { Router } from 'express';
import { getAllUniversities } from '../controllers/universitiesController';

const router = Router();

router.get('/', getAllUniversities);

export default router;
