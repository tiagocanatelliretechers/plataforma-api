"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.perfisAcessoController = void 0;
const perfis_acesso_mocks_1 = require("../mocks/perfis-acesso.mocks");
exports.perfisAcessoController = {
    // GET /perfis-acesso
    listarPerfisAcesso: (_req, res) => {
        res.status(200).json(perfis_acesso_mocks_1.perfisAcessoMock);
    },
    // POST /perfis-acesso
    criarPerfilAcesso: (req, res) => {
        const novoPerfil = {
            idPerfilAcesso: `role-${Date.now()}`,
            ...req.body,
            permissoes: perfis_acesso_mocks_1.permissoesMock.filter((p) => req.body.permissoesIds?.includes(p.codigoPermissao)),
        };
        res.status(201).json(novoPerfil);
    },
    // GET /perfis-acesso/:perfilId
    obterPerfilAcesso: (req, res) => {
        const { perfilId } = req.params;
        const perfil = perfis_acesso_mocks_1.perfisAcessoDetalheMock.find((p) => p.idPerfilAcesso === perfilId);
        if (perfil) {
            res.status(200).json(perfil);
        }
        else {
            res.status(200).json({ ...perfis_acesso_mocks_1.perfisAcessoDetalheMock[0], idPerfilAcesso: perfilId });
        }
    },
    // PATCH /perfis-acesso/:perfilId
    atualizarPerfilAcesso: (req, res) => {
        const { perfilId } = req.params;
        const perfil = perfis_acesso_mocks_1.perfisAcessoDetalheMock.find((p) => p.idPerfilAcesso === perfilId);
        const perfilAtualizado = {
            ...(perfil || perfis_acesso_mocks_1.perfisAcessoDetalheMock[0]),
            ...req.body,
            idPerfilAcesso: perfilId,
            permissoes: req.body.permissoesIds
                ? perfis_acesso_mocks_1.permissoesMock.filter((p) => req.body.permissoesIds.includes(p.codigoPermissao))
                : perfil?.permissoes || perfis_acesso_mocks_1.perfisAcessoDetalheMock[0].permissoes,
        };
        res.status(200).json(perfilAtualizado);
    },
};
//# sourceMappingURL=perfis-acesso.controller.js.map