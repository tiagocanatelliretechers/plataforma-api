import { Router } from 'express';
import { autenticacaoController } from '../controllers/autenticacao.controller';

const router = Router();

// POST /autenticacao/token
router.post('/token', autenticacaoController.gerarToken);

export default router;

