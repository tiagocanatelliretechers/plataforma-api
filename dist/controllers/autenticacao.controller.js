"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.autenticacaoController = void 0;
const autenticacao_mocks_1 = require("../mocks/autenticacao.mocks");
exports.autenticacaoController = {
    gerarToken: (_req, res) => {
        // Em um ambiente real, validaria login e senha
        res.status(200).json(autenticacao_mocks_1.tokenMock);
    },
};
//# sourceMappingURL=autenticacao.controller.js.map