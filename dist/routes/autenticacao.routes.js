"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const autenticacao_controller_1 = require("../controllers/autenticacao.controller");
const router = (0, express_1.Router)();
// POST /autenticacao/token
router.post('/token', autenticacao_controller_1.autenticacaoController.gerarToken);
exports.default = router;
//# sourceMappingURL=autenticacao.routes.js.map