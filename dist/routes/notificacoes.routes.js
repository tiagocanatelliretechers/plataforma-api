"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const notificacoes_controller_1 = require("../controllers/notificacoes.controller");
const router = (0, express_1.Router)();
// GET /notificacoes
router.get('/', notificacoes_controller_1.notificacoesController.listarNotificacoes);
exports.default = router;
//# sourceMappingURL=notificacoes.routes.js.map