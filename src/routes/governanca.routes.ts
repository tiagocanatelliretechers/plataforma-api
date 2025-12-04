import { Router } from 'express';
import { governancaController } from '../controllers/governanca.controller';

const router = Router();

// GET /governanca/solicitacoes-aprovacao
router.get('/solicitacoes-aprovacao', governancaController.listarSolicitacoesAprovacao);

// POST /governanca/solicitacoes-aprovacao/:solicitacaoId/decisao
router.post(
  '/solicitacoes-aprovacao/:solicitacaoId/decisao',
  governancaController.registrarDecisao
);

export default router;

