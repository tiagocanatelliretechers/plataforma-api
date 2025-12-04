"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const componentes_controller_1 = require("../controllers/componentes.controller");
const router = (0, express_1.Router)();
// GET /componentes
router.get('/', componentes_controller_1.componentesController.listarComponentes);
// POST /componentes
router.post('/', componentes_controller_1.componentesController.criarComponente);
// GET /componentes/recentes
router.get('/recentes', componentes_controller_1.componentesController.listarComponentesRecentes);
// GET /componentes/estatisticas
router.get('/estatisticas', componentes_controller_1.componentesController.obterEstatisticas);
// GET /componentes/:componenteId
router.get('/:componenteId', componentes_controller_1.componentesController.obterComponente);
// PATCH /componentes/:componenteId
router.patch('/:componenteId', componentes_controller_1.componentesController.atualizarComponente);
// GET /componentes/:componenteId/versoes
router.get('/:componenteId/versoes', componentes_controller_1.componentesController.listarVersoes);
// POST /componentes/:componenteId/versoes
router.post('/:componenteId/versoes', componentes_controller_1.componentesController.criarVersao);
// GET /componentes/:componenteId/versoes/:versaoId
router.get('/:componenteId/versoes/:versaoId', componentes_controller_1.componentesController.obterVersao);
// PATCH /componentes/:componenteId/versoes/:versaoId
router.patch('/:componenteId/versoes/:versaoId', componentes_controller_1.componentesController.atualizarVersao);
// POST /componentes/:componenteId/versoes/:versaoId/ciclo-vida/transicoes
router.post('/:componenteId/versoes/:versaoId/ciclo-vida/transicoes', componentes_controller_1.componentesController.aplicarTransicaoCicloVida);
// GET /componentes/:componenteId/itens-configuracao
router.get('/:componenteId/itens-configuracao', componentes_controller_1.componentesController.listarItensConfiguracao);
// GET /componentes/:componenteId/dependencias
router.get('/:componenteId/dependencias', componentes_controller_1.componentesController.obterDependencias);
// GET /componentes/:componenteId/auditoria
router.get('/:componenteId/auditoria', componentes_controller_1.componentesController.listarAuditoria);
exports.default = router;
//# sourceMappingURL=componentes.routes.js.map