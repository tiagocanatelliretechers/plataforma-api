import { Router } from 'express';
import { componentesController } from '../controllers/componentes.controller';

const router = Router();

// GET /componentes
router.get('/', componentesController.listarComponentes);

// POST /componentes
router.post('/', componentesController.criarComponente);

// GET /componentes/:componenteId (auxiliar)
router.get('/:componenteId', componentesController.obterComponente);

export default router;
