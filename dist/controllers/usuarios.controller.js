"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usuariosController = void 0;
const usuarios_mocks_1 = require("../mocks/usuarios.mocks");
exports.usuariosController = {
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
};
//# sourceMappingURL=usuarios.controller.js.map