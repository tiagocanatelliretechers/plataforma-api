import { Router } from 'express';
import { notificacoesController } from '../controllers/notificacoes.controller';

const router = Router();

// GET /notificacoes
router.get('/', notificacoesController.listarNotificacoes);

export default router;

