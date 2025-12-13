import { Router } from 'express';
import { getAllDiploma } from '../controllers/diplomaController';

const router = Router();

router.get('/', getAllDiploma);

export default router;
