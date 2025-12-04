"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assistentesController = void 0;
const assistentes_mocks_1 = require("../mocks/assistentes.mocks");
exports.assistentesController = {
    // POST /assistentes/componentes
    iniciarAssistente: (req, res) => {
        const assistente = {
            ...assistentes_mocks_1.assistenteComponenteMock,
            idRascunho: `rascunho-${Date.now()}`,
            metadados: {
                ...assistentes_mocks_1.assistenteComponenteMock.metadados,
                tipoComponente: req.body.tipoComponente,
            },
        };
        res.status(201).json(assistente);
    },
    // GET /assistentes/componentes/:rascunhoId
    obterAssistente: (req, res) => {
        const { rascunhoId } = req.params;
        res.status(200).json({
            ...assistentes_mocks_1.assistenteComponenteMock,
            idRascunho: rascunhoId,
        });
    },
    // PATCH /assistentes/componentes/:rascunhoId/metadados
    atualizarMetadados: (req, res) => {
        const { rascunhoId } = req.params;
        res.status(200).json({
            ...assistentes_mocks_1.assistenteComponenteMock,
            idRascunho: rascunhoId,
            etapaAtual: 'VERSAO',
            metadados: {
                ...assistentes_mocks_1.assistenteComponenteMock.metadados,
                ...req.body,
            },
        });
    },
    // PATCH /assistentes/componentes/:rascunhoId/versao
    atualizarVersao: (req, res) => {
        const { rascunhoId } = req.params;
        res.status(200).json({
            ...assistentes_mocks_1.assistenteComponenteMock,
            idRascunho: rascunhoId,
            etapaAtual: 'ITENS_CONFIGURACAO',
            versao: {
                ...assistentes_mocks_1.assistenteComponenteMock.versao,
                ...req.body,
            },
        });
    },
    // PATCH /assistentes/componentes/:rascunhoId/itens-configuracao
    atualizarItensConfiguracao: (req, res) => {
        const { rascunhoId } = req.params;
        res.status(200).json({
            ...assistentes_mocks_1.assistenteComponenteMock,
            idRascunho: rascunhoId,
            etapaAtual: 'DEPENDENCIAS',
            itensConfiguracao: req.body,
        });
    },
    // PATCH /assistentes/componentes/:rascunhoId/dependencias
    atualizarDependencias: (req, res) => {
        const { rascunhoId } = req.params;
        res.status(200).json({
            ...assistentes_mocks_1.assistenteComponenteMock,
            idRascunho: rascunhoId,
            etapaAtual: 'RESPONSAVEIS',
            dependencias: req.body,
        });
    },
    // PATCH /assistentes/componentes/:rascunhoId/responsaveis
    atualizarResponsaveis: (req, res) => {
        const { rascunhoId } = req.params;
        res.status(200).json({
            ...assistentes_mocks_1.assistenteComponenteMock,
            idRascunho: rascunhoId,
            etapaAtual: 'QUALIDADE',
            responsaveis: req.body,
        });
    },
    // PATCH /assistentes/componentes/:rascunhoId/qualidade
    atualizarQualidade: (req, res) => {
        const { rascunhoId } = req.params;
        res.status(200).json({
            ...assistentes_mocks_1.assistenteComponenteMock,
            idRascunho: rascunhoId,
            etapaAtual: 'REVISAO',
            qualidade: req.body,
        });
    },
    // POST /assistentes/componentes/:rascunhoId/enviar
    enviarAssistente: (_req, res) => {
        res.status(201).json(assistentes_mocks_1.assistenteComponenteResultadoMock);
    },
};
//# sourceMappingURL=assistentes.controller.js.map