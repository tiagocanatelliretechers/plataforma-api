"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuarios_controller_1 = require("../controllers/usuarios.controller");
const router = (0, express_1.Router)();
// GET /usuarios/me
router.get('/me', usuarios_controller_1.usuariosController.obterUsuarioAutenticado);
// GET /usuarios
router.get('/', usuarios_controller_1.usuariosController.listarUsuarios);
// POST /usuarios
router.post('/', usuarios_controller_1.usuariosController.criarUsuario);
// GET /usuarios/:usuarioId
router.get('/:usuarioId', usuarios_controller_1.usuariosController.obterUsuario);
// PATCH /usuarios/:usuarioId
router.patch('/:usuarioId', usuarios_controller_1.usuariosController.atualizarUsuario);
// POST /usuarios/:usuarioId/ativar
router.post('/:usuarioId/ativar', usuarios_controller_1.usuariosController.ativarUsuario);
// GET /usuarios/:usuarioId/papeis
router.get('/:usuarioId/papeis', usuarios_controller_1.usuariosController.listarPapeisUsuario);
// PUT /usuarios/:usuarioId/papeis
router.put('/:usuarioId/papeis', usuarios_controller_1.usuariosController.substituirPapeisUsuario);
// GET /usuarios/:usuarioId/times
router.get('/:usuarioId/times', usuarios_controller_1.usuariosController.listarTimesUsuario);
// PUT /usuarios/:usuarioId/times
router.put('/:usuarioId/times', usuarios_controller_1.usuariosController.substituirTimesUsuario);
exports.default = router;
//# sourceMappingURL=usuarios.routes.js.map