"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuarios_controller_1 = require("../controllers/usuarios.controller");
const router = (0, express_1.Router)();
// GET /usuarios
router.get('/', usuarios_controller_1.usuariosController.listarUsuarios);
// POST /usuarios
router.post('/', usuarios_controller_1.usuariosController.criarUsuario);
// GET /usuarios/:usuarioId
router.get('/:usuarioId', usuarios_controller_1.usuariosController.obterUsuario);
// PATCH /usuarios/:usuarioId
router.patch('/:usuarioId', usuarios_controller_1.usuariosController.atualizarUsuario);
exports.default = router;
//# sourceMappingURL=usuarios.routes.js.map