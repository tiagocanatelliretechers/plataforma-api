"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const governanca_controller_1 = require("../controllers/governanca.controller");
const router = (0, express_1.Router)();
// GET /governanca/solicitacoes-aprovacao
router.get('/solicitacoes-aprovacao', governanca_controller_1.governancaController.listarSolicitacoesAprovacao);
// POST /governanca/solicitacoes-aprovacao/:solicitacaoId/decisao
router.post('/solicitacoes-aprovacao/:solicitacaoId/decisao', governanca_controller_1.governancaController.registrarDecisao);
exports.default = router;
//# sourceMappingURL=governanca.routes.js.map