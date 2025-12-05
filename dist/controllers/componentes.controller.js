"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.componentesController = void 0;
const componentes_mocks_1 = require("../mocks/componentes.mocks");
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
            codigoComponente: req.body.nomeComponente
                ? req.body.nomeComponente.toUpperCase().replace(/\s+/g, '_').substring(0, 20)
                : 'NOVO_COMP',
            nomeComponente: req.body.nomeComponente,
            tipoComponente: req.body.tipoComponente?.toUpperCase() || 'BUSINESS',
            dominio: 'Plataforma',
            estadoCicloVida: 'EM_DESENVOLVIMENTO',
            descricao: req.body.descricao || '',
            tags: req.body.tags || [],
        };
        res.status(201).json(novoComponente);
    },
    // GET /componentes/:componenteId (não está no YAML mas pode ser útil)
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
};
//# sourceMappingURL=componentes.controller.js.map