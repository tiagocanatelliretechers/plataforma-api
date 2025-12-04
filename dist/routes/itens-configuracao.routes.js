"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const itens_configuracao_controller_1 = require("../controllers/itens-configuracao.controller");
const router = (0, express_1.Router)();
// GET /itens-configuracao
router.get('/', itens_configuracao_controller_1.itensConfiguracaoController.listarItensConfiguracao);
// POST /itens-configuracao
router.post('/', itens_configuracao_controller_1.itensConfiguracaoController.criarItemConfiguracao);
// GET /itens-configuracao/:itemConfiguracaoId
router.get('/:itemConfiguracaoId', itens_configuracao_controller_1.itensConfiguracaoController.obterItemConfiguracao);
// PATCH /itens-configuracao/:itemConfiguracaoId
router.patch('/:itemConfiguracaoId', itens_configuracao_controller_1.itensConfiguracaoController.atualizarItemConfiguracao);
exports.default = router;
//# sourceMappingURL=itens-configuracao.routes.js.map