"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const perfis_acesso_controller_1 = require("../controllers/perfis-acesso.controller");
const router = (0, express_1.Router)();
// GET /perfis-acesso
router.get('/', perfis_acesso_controller_1.perfisAcessoController.listarPerfisAcesso);
// POST /perfis-acesso
router.post('/', perfis_acesso_controller_1.perfisAcessoController.criarPerfilAcesso);
// GET /perfis-acesso/:perfilId
router.get('/:perfilId', perfis_acesso_controller_1.perfisAcessoController.obterPerfilAcesso);
// PATCH /perfis-acesso/:perfilId
router.patch('/:perfilId', perfis_acesso_controller_1.perfisAcessoController.atualizarPerfilAcesso);
exports.default = router;
//# sourceMappingURL=perfis-acesso.routes.js.map