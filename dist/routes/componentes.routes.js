"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const componentes_controller_1 = require("../controllers/componentes.controller");
const router = (0, express_1.Router)();
// GET /componentes
router.get('/', componentes_controller_1.componentesController.listarComponentes);
// POST /componentes
router.post('/', componentes_controller_1.componentesController.criarComponente);
// GET /componentes/:componenteId (auxiliar)
router.get('/:componenteId', componentes_controller_1.componentesController.obterComponente);
exports.default = router;
//# sourceMappingURL=componentes.routes.js.map