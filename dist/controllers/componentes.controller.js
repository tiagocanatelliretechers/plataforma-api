"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.componentesController = void 0;
const componentes_mocks_1 = require("../mocks/componentes.mocks");
const versoes_mocks_1 = require("../mocks/versoes.mocks");
const itens_configuracao_mocks_1 = require("../mocks/itens-configuracao.mocks");
const governanca_mocks_1 = require("../mocks/governanca.mocks");
exports.componentesController = {
    // GET /componentes
    listarComponentes: (req, res) => {
        const { pagina = 0, tamanho = 20 } = req.query;
        res.status(200).json({
            ...componentes_mocks_1.paginaComponentesMock,
            pagina: Number(pagina),
            tamanho: Number(tamanho),
        });
    },
    // POST /componentes
    criarComponente: (req, res) => {
        const novoComponente = {
            idComponente: `cmp-${Date.now()}`,
            ...req.body,
            nomeDominio: 'Pagamentos',
            nomeSubdominio: 'Parcelamento',
            versaoMaisRecente: '0.0.1',
            estadoCicloVida: 'EM_DESENVOLVIMENTO',
            timeResponsavelNome: 'Time Plataforma Componentes',
            dataCriacao: new Date().toISOString(),
            dataAtualizacao: new Date().toISOString(),
        };
        res.status(201).json(novoComponente);
    },
    // GET /componentes/recentes
    listarComponentesRecentes: (_req, res) => {
        res.status(200).json(componentes_mocks_1.componentesResumoMock);
    },
    // GET /componentes/estatisticas
    obterEstatisticas: (_req, res) => {
        res.status(200).json(componentes_mocks_1.estatisticasComponenteMock);
    },
    // GET /componentes/:componenteId
    obterComponente: (req, res) => {
        const { componenteId } = req.params;
        const componente = componentes_mocks_1.componentesDetalheMock.find((c) => c.idComponente === componenteId);
        if (componente) {
            res.status(200).json(componente);
        }
        else {
            res.status(200).json({ ...componentes_mocks_1.componentesDetalheMock[0], idComponente: componenteId });
        }
    },
    // PATCH /componentes/:componenteId
    atualizarComponente: (req, res) => {
        const { componenteId } = req.params;
        const componente = componentes_mocks_1.componentesDetalheMock.find((c) => c.idComponente === componenteId);
        const componenteAtualizado = {
            ...(componente || componentes_mocks_1.componentesDetalheMock[0]),
            ...req.body,
            idComponente: componenteId,
            dataAtualizacao: new Date().toISOString(),
        };
        res.status(200).json(componenteAtualizado);
    },
    // GET /componentes/:componenteId/versoes
    listarVersoes: (_req, res) => {
        res.status(200).json(versoes_mocks_1.versoesResumoMock);
    },
    // POST /componentes/:componenteId/versoes
    criarVersao: (req, res) => {
        const novaVersao = {
            idVersaoComponente: `ver-${Date.now()}`,
            ...req.body,
            estadoCicloVida: 'EM_DESENVOLVIMENTO',
            dataCriacao: new Date().toISOString(),
            itensConfiguracao: [],
            dependencias: [],
        };
        res.status(201).json(novaVersao);
    },
    // GET /componentes/:componenteId/versoes/:versaoId
    obterVersao: (req, res) => {
        const { versaoId } = req.params;
        const versao = versoes_mocks_1.versoesDetalheMock.find((v) => v.idVersaoComponente === versaoId);
        if (versao) {
            res.status(200).json(versao);
        }
        else {
            res.status(200).json({ ...versoes_mocks_1.versoesDetalheMock[0], idVersaoComponente: versaoId });
        }
    },
    // PATCH /componentes/:componenteId/versoes/:versaoId
    atualizarVersao: (req, res) => {
        const { versaoId } = req.params;
        const versao = versoes_mocks_1.versoesDetalheMock.find((v) => v.idVersaoComponente === versaoId);
        const versaoAtualizada = {
            ...(versao || versoes_mocks_1.versoesDetalheMock[0]),
            ...req.body,
            idVersaoComponente: versaoId,
        };
        res.status(200).json(versaoAtualizada);
    },
    // POST /componentes/:componenteId/versoes/:versaoId/ciclo-vida/transicoes
    aplicarTransicaoCicloVida: (req, res) => {
        res.status(200).json({
            ...versoes_mocks_1.estadoCicloVidaDetalheMock,
            estado: req.body.estadoDestino,
            comentario: req.body.comentario,
            dataAlteracao: new Date().toISOString(),
        });
    },
    // GET /componentes/:componenteId/itens-configuracao
    listarItensConfiguracao: (_req, res) => {
        res.status(200).json(itens_configuracao_mocks_1.itensConfiguracaoResumoMock);
    },
    // GET /componentes/:componenteId/dependencias
    obterDependencias: (_req, res) => {
        res.status(200).json(componentes_mocks_1.dependenciasComponenteMock);
    },
    // GET /componentes/:componenteId/auditoria
    listarAuditoria: (_req, res) => {
        res.status(200).json(governanca_mocks_1.registrosAuditoriaMock);
    },
};
//# sourceMappingURL=componentes.controller.js.map