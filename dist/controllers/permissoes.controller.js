"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.permissoesController = void 0;
const perfis_acesso_mocks_1 = require("../mocks/perfis-acesso.mocks");
exports.permissoesController = {
    // GET /permissoes
    listarPermissoes: (_req, res) => {
        res.status(200).json(perfis_acesso_mocks_1.permissoesMock);
    },
};
//# sourceMappingURL=permissoes.controller.js.map