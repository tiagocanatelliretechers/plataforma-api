import { Router } from 'express';
import { timesController } from '../controllers/times.controller';

const router = Router();

// GET /times
router.get('/', timesController.listarTimes);

// POST /times
router.post('/', timesController.criarTime);

// GET /times/:timeId
router.get('/:timeId', timesController.obterTime);

// PATCH /times/:timeId
router.patch('/:timeId', timesController.atualizarTime);

// GET /times/:timeId/membros
router.get('/:timeId/membros', timesController.listarMembrosTime);

// POST /times/:timeId/membros
router.post('/:timeId/membros', timesController.adicionarMembroTime);

// DELETE /times/:timeId/membros
router.delete('/:timeId/membros', timesController.removerMembroTime);

export default router;

