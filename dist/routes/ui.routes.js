"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ui_controller_1 = require("../controllers/ui.controller");
const router = (0, express_1.Router)();
// GET /ui/layout
router.get('/layout', ui_controller_1.uiController.getLayout);
// GET /ui/dashboard
router.get('/dashboard', ui_controller_1.uiController.getDashboard);
// GET /ui/usuarios/lista
router.get('/usuarios/lista', ui_controller_1.uiController.getUsuariosLista);
// GET /ui/usuarios/form-criacao
router.get('/usuarios/form-criacao', ui_controller_1.uiController.getUsuariosFormCriacao);
// GET /ui/usuarios/:usuarioId/form-edicao
router.get('/usuarios/:usuarioId/form-edicao', ui_controller_1.uiController.getUsuariosFormEdicao);
// GET /ui/componentes/lista
router.get('/componentes/lista', ui_controller_1.uiController.getComponentesLista);
// GET /ui/componentes/form-criacao
router.get('/componentes/form-criacao', ui_controller_1.uiController.getComponentesFormCriacao);
exports.default = router;
//# sourceMappingURL=ui.routes.js.map