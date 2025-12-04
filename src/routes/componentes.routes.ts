import { Router } from 'express';
import { componentesController } from '../controllers/componentes.controller';

const router = Router();

// GET /componentes
router.get('/', componentesController.listarComponentes);

// POST /componentes
router.post('/', componentesController.criarComponente);

// GET /componentes/recentes
router.get('/recentes', componentesController.listarComponentesRecentes);

// GET /componentes/estatisticas
router.get('/estatisticas', componentesController.obterEstatisticas);

// GET /componentes/:componenteId
router.get('/:componenteId', componentesController.obterComponente);

// PATCH /componentes/:componenteId
router.patch('/:componenteId', componentesController.atualizarComponente);

// GET /componentes/:componenteId/versoes
router.get('/:componenteId/versoes', componentesController.listarVersoes);

// POST /componentes/:componenteId/versoes
router.post('/:componenteId/versoes', componentesController.criarVersao);

// GET /componentes/:componenteId/versoes/:versaoId
router.get('/:componenteId/versoes/:versaoId', componentesController.obterVersao);

// PATCH /componentes/:componenteId/versoes/:versaoId
router.patch('/:componenteId/versoes/:versaoId', componentesController.atualizarVersao);

// POST /componentes/:componenteId/versoes/:versaoId/ciclo-vida/transicoes
router.post(
  '/:componenteId/versoes/:versaoId/ciclo-vida/transicoes',
  componentesController.aplicarTransicaoCicloVida
);

// GET /componentes/:componenteId/itens-configuracao
router.get('/:componenteId/itens-configuracao', componentesController.listarItensConfiguracao);

// GET /componentes/:componenteId/dependencias
router.get('/:componenteId/dependencias', componentesController.obterDependencias);

// GET /componentes/:componenteId/auditoria
router.get('/:componenteId/auditoria', componentesController.listarAuditoria);

export default router;

