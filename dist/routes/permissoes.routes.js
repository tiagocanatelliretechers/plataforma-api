"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const permissoes_controller_1 = require("../controllers/permissoes.controller");
const router = (0, express_1.Router)();
// GET /permissoes
router.get('/', permissoes_controller_1.permissoesController.listarPermissoes);
exports.default = router;
//# sourceMappingURL=permissoes.routes.js.map