"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dominios_controller_1 = require("../controllers/dominios.controller");
const router = (0, express_1.Router)();
// GET /dominios
router.get('/', dominios_controller_1.dominiosController.listarDominios);
// GET /dominios/:dominioId/subdominios
router.get('/:dominioId/subdominios', dominios_controller_1.dominiosController.listarSubdominios);
exports.default = router;
//# sourceMappingURL=dominios.routes.js.map