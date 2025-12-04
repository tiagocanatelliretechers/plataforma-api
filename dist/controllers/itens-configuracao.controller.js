"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.itensConfiguracaoController = void 0;
const itens_configuracao_mocks_1 = require("../mocks/itens-configuracao.mocks");
exports.itensConfiguracaoController = {
    // GET /itens-configuracao
    listarItensConfiguracao: (req, res) => {
        const { tipoIC, componenteId } = req.query;
        let itens = itens_configuracao_mocks_1.itensConfiguracaoResumoMock;
        if (tipoIC) {
            itens = itens.filter((ic) => ic.tipoIC === tipoIC);
        }
        if (componenteId) {
            itens = itens.filter((ic) => ic.componenteId === componenteId);
        }
        res.status(200).json(itens);
    },
    // POST /itens-configuracao
    criarItemConfiguracao: (req, res) => {
        const novoItem = {
            idItemConfiguracao: `ic-${Date.now()}`,
            ...req.body,
            nomeComponente: 'Parcelamento de Boletos',
        };
        res.status(201).json(novoItem);
    },
    // GET /itens-configuracao/:itemConfiguracaoId
    obterItemConfiguracao: (req, res) => {
        const { itemConfiguracaoId } = req.params;
        const item = itens_configuracao_mocks_1.itensConfiguracaoDetalheMock.find((ic) => ic.idItemConfiguracao === itemConfiguracaoId);
        if (item) {
            res.status(200).json(item);
        }
        else {
            res.status(200).json({ ...itens_configuracao_mocks_1.itensConfiguracaoDetalheMock[0], idItemConfiguracao: itemConfiguracaoId });
        }
    },
    // PATCH /itens-configuracao/:itemConfiguracaoId
    atualizarItemConfiguracao: (req, res) => {
        const { itemConfiguracaoId } = req.params;
        const item = itens_configuracao_mocks_1.itensConfiguracaoDetalheMock.find((ic) => ic.idItemConfiguracao === itemConfiguracaoId);
        const itemAtualizado = {
            ...(item || itens_configuracao_mocks_1.itensConfiguracaoDetalheMock[0]),
            ...req.body,
            idItemConfiguracao: itemConfiguracaoId,
        };
        res.status(200).json(itemAtualizado);
    },
};
//# sourceMappingURL=itens-configuracao.controller.js.map