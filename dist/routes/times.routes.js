"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const times_controller_1 = require("../controllers/times.controller");
const router = (0, express_1.Router)();
// GET /times
router.get('/', times_controller_1.timesController.listarTimes);
// POST /times
router.post('/', times_controller_1.timesController.criarTime);
// GET /times/:timeId
router.get('/:timeId', times_controller_1.timesController.obterTime);
// PATCH /times/:timeId
router.patch('/:timeId', times_controller_1.timesController.atualizarTime);
// GET /times/:timeId/membros
router.get('/:timeId/membros', times_controller_1.timesController.listarMembrosTime);
// POST /times/:timeId/membros
router.post('/:timeId/membros', times_controller_1.timesController.adicionarMembroTime);
// DELETE /times/:timeId/membros
router.delete('/:timeId/membros', times_controller_1.timesController.removerMembroTime);
exports.default = router;
//# sourceMappingURL=times.routes.js.map