import { Router } from 'express';
import { permissoesController } from '../controllers/permissoes.controller';

const router = Router();

// GET /permissoes
router.get('/', permissoesController.listarPermissoes);

export default router;

