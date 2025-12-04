import { Router } from 'express';
import { itensConfiguracaoController } from '../controllers/itens-configuracao.controller';

const router = Router();

// GET /itens-configuracao
router.get('/', itensConfiguracaoController.listarItensConfiguracao);

// POST /itens-configuracao
router.post('/', itensConfiguracaoController.criarItemConfiguracao);

// GET /itens-configuracao/:itemConfiguracaoId
router.get('/:itemConfiguracaoId', itensConfiguracaoController.obterItemConfiguracao);

// PATCH /itens-configuracao/:itemConfiguracaoId
router.patch('/:itemConfiguracaoId', itensConfiguracaoController.atualizarItemConfiguracao);

export default router;

