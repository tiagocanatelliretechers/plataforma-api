"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notificacoesController = void 0;
const notificacoes_mocks_1 = require("../mocks/notificacoes.mocks");
exports.notificacoesController = {
    // GET /notificacoes
    listarNotificacoes: (_req, res) => {
        res.status(200).json(notificacoes_mocks_1.notificacoesMock);
    },
};
//# sourceMappingURL=notificacoes.controller.js.map