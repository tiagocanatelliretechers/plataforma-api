"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usuariosController = void 0;
const usuarios_mocks_1 = require("../mocks/usuarios.mocks");
const perfis_acesso_mocks_1 = require("../mocks/perfis-acesso.mocks");
const times_mocks_1 = require("../mocks/times.mocks");
exports.usuariosController = {
    // GET /usuarios/me
    obterUsuarioAutenticado: (_req, res) => {
        res.status(200).json(usuarios_mocks_1.usuarioAutenticadoMock);
    },
    // GET /usuarios
    listarUsuarios: (req, res) => {
        const { pagina = 0, tamanho = 20 } = req.query;
        res.status(200).json({
            ...usuarios_mocks_1.paginaUsuariosMock,
            pagina: Number(pagina),
            tamanho: Number(tamanho),
        });
    },
    // POST /usuarios
    criarUsuario: (req, res) => {
        const novoUsuario = {
            idUsuario: `usr-${Date.now()}`,
            ...req.body,
            perfisAcesso: perfis_acesso_mocks_1.perfisAcessoMock.filter((p) => req.body.perfisAcessoIds?.includes(p.idPerfilAcesso)),
            times: times_mocks_1.timesMock.filter((t) => req.body.timeIds?.includes(t.idTime)),
        };
        res.status(201).json(novoUsuario);
    },
    // GET /usuarios/:usuarioId
    obterUsuario: (req, res) => {
        const { usuarioId } = req.params;
        const usuario = usuarios_mocks_1.usuariosDetalheMock.find((u) => u.idUsuario === usuarioId);
        if (usuario) {
            res.status(200).json(usuario);
        }
        else {
            res.status(200).json({ ...usuarios_mocks_1.usuariosDetalheMock[0], idUsuario: usuarioId });
        }
    },
    // PATCH /usuarios/:usuarioId
    atualizarUsuario: (req, res) => {
        const { usuarioId } = req.params;
        const usuario = usuarios_mocks_1.usuariosDetalheMock.find((u) => u.idUsuario === usuarioId);
        const usuarioAtualizado = {
            ...(usuario || usuarios_mocks_1.usuariosDetalheMock[0]),
            ...req.body,
            idUsuario: usuarioId,
        };
        res.status(200).json(usuarioAtualizado);
    },
    // POST /usuarios/:usuarioId/ativar
    ativarUsuario: (req, res) => {
        const { usuarioId } = req.params;
        const usuario = usuarios_mocks_1.usuariosDetalheMock.find((u) => u.idUsuario === usuarioId);
        res.status(200).json({
            ...(usuario || usuarios_mocks_1.usuariosDetalheMock[0]),
            idUsuario: usuarioId,
            ativo: true,
        });
    },
    // GET /usuarios/:usuarioId/papeis
    listarPapeisUsuario: (_req, res) => {
        res.status(200).json(perfis_acesso_mocks_1.perfisAcessoMock);
    },
    // PUT /usuarios/:usuarioId/papeis
    substituirPapeisUsuario: (req, res) => {
        const perfisIds = req.body;
        const perfis = perfis_acesso_mocks_1.perfisAcessoMock.filter((p) => perfisIds.includes(p.idPerfilAcesso));
        res.status(200).json(perfis.length > 0 ? perfis : perfis_acesso_mocks_1.perfisAcessoMock);
    },
    // GET /usuarios/:usuarioId/times
    listarTimesUsuario: (_req, res) => {
        res.status(200).json(times_mocks_1.timesMock);
    },
    // PUT /usuarios/:usuarioId/times
    substituirTimesUsuario: (req, res) => {
        const timesIds = req.body;
        const times = times_mocks_1.timesMock.filter((t) => timesIds.includes(t.idTime));
        res.status(200).json(times.length > 0 ? times : times_mocks_1.timesMock);
    },
};
//# sourceMappingURL=usuarios.controller.js.map