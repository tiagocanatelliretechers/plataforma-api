import { Router } from 'express';
import { dominiosController } from '../controllers/dominios.controller';

const router = Router();

// GET /dominios
router.get('/', dominiosController.listarDominios);

// GET /dominios/:dominioId/subdominios
router.get('/:dominioId/subdominios', dominiosController.listarSubdominios);

export default router;

