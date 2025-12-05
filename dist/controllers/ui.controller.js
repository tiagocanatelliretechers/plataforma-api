"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uiController = void 0;
const ui_layout_mocks_1 = require("../mocks/ui-layout.mocks");
const ui_dashboard_mocks_1 = require("../mocks/ui-dashboard.mocks");
const usuarios_mocks_1 = require("../mocks/usuarios.mocks");
const componentes_mocks_1 = require("../mocks/componentes.mocks");
exports.uiController = {
    // GET /ui/layout
    getLayout: (_req, res) => {
        res.status(200).json(ui_layout_mocks_1.layoutAreaLogadaMock);
    },
    // GET /ui/dashboard
    getDashboard: (_req, res) => {
        res.status(200).json(ui_dashboard_mocks_1.dashboardTelaMock);
    },
    // GET /ui/usuarios/lista
    getUsuariosLista: (req, res) => {
        const { pagina = 0, tamanho = 20, busca, ativo } = req.query;
        let linhasFiltradas = [...usuarios_mocks_1.usuariosMock];
        // Filtro por busca
        if (busca) {
            const termoBusca = String(busca).toLowerCase();
            linhasFiltradas = linhasFiltradas.filter((u) => u.login.toLowerCase().includes(termoBusca) ||
                u.nomeExibicao.toLowerCase().includes(termoBusca) ||
                u.email.toLowerCase().includes(termoBusca));
        }
        // Filtro por ativo
        if (ativo !== undefined) {
            const isAtivo = ativo === 'true';
            linhasFiltradas = linhasFiltradas.filter((u) => u.ativo === isAtivo);
        }
        res.status(200).json({
            ...usuarios_mocks_1.usuariosListaTelaMock,
            paginacao: {
                pagina: Number(pagina),
                tamanho: Number(tamanho),
                totalElementos: linhasFiltradas.length,
                totalPaginas: Math.ceil(linhasFiltradas.length / Number(tamanho)),
            },
            linhas: linhasFiltradas,
        });
    },
    // GET /ui/usuarios/form-criacao
    getUsuariosFormCriacao: (_req, res) => {
        res.status(200).json(usuarios_mocks_1.usuarioFormCriacaoTelaMock);
    },
    // GET /ui/usuarios/:usuarioId/form-edicao
    getUsuariosFormEdicao: (req, res) => {
        const { usuarioId } = req.params;
        res.status(200).json((0, usuarios_mocks_1.getUsuarioFormEdicaoTelaMock)(usuarioId));
    },
    // GET /ui/componentes/lista
    getComponentesLista: (req, res) => {
        const { pagina = 0, tamanho = 20, busca, tipoComponente, dominioId } = req.query;
        let linhasFiltradas = [...componentes_mocks_1.componentesMock];
        // Filtro por busca
        if (busca) {
            const termoBusca = String(busca).toLowerCase();
            linhasFiltradas = linhasFiltradas.filter((c) => c.codigoComponente.toLowerCase().includes(termoBusca) ||
                c.nomeComponente.toLowerCase().includes(termoBusca));
        }
        // Filtro por tipo
        if (tipoComponente) {
            linhasFiltradas = linhasFiltradas.filter((c) => c.tipoComponente === tipoComponente);
        }
        // Filtro por domínio (simulado)
        if (dominioId) {
            // Em um cenário real, filtraria pelo ID do domínio
            linhasFiltradas = linhasFiltradas.filter((c) => c.dominio.toLowerCase().includes(String(dominioId).toLowerCase()));
        }
        res.status(200).json({
            ...componentes_mocks_1.componentesListaTelaMock,
            paginacao: {
                pagina: Number(pagina),
                tamanho: Number(tamanho),
                totalElementos: linhasFiltradas.length,
                totalPaginas: Math.ceil(linhasFiltradas.length / Number(tamanho)),
            },
            linhas: linhasFiltradas,
        });
    },
    // GET /ui/componentes/form-criacao
    getComponentesFormCriacao: (_req, res) => {
        res.status(200).json(componentes_mocks_1.componenteWizardTelaMock);
    },
};
//# sourceMappingURL=ui.controller.js.map