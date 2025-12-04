import { Request, Response } from 'express';
import { perfisAcessoMock, perfisAcessoDetalheMock, permissoesMock } from '../mocks/perfis-acesso.mocks';

export const perfisAcessoController = {
  // GET /perfis-acesso
  listarPerfisAcesso: (_req: Request, res: Response) => {
    res.status(200).json(perfisAcessoMock);
  },

  // POST /perfis-acesso
  criarPerfilAcesso: (req: Request, res: Response) => {
    const novoPerfil = {
      idPerfilAcesso: `role-${Date.now()}`,
      ...req.body,
      permissoes: permissoesMock.filter((p) =>
        req.body.permissoesIds?.includes(p.codigoPermissao)
      ),
    };
    res.status(201).json(novoPerfil);
  },

  // GET /perfis-acesso/:perfilId
  obterPerfilAcesso: (req: Request, res: Response) => {
    const { perfilId } = req.params;
    const perfil = perfisAcessoDetalheMock.find((p) => p.idPerfilAcesso === perfilId);
    if (perfil) {
      res.status(200).json(perfil);
    } else {
      res.status(200).json({ ...perfisAcessoDetalheMock[0], idPerfilAcesso: perfilId });
    }
  },

  // PATCH /perfis-acesso/:perfilId
  atualizarPerfilAcesso: (req: Request, res: Response) => {
    const { perfilId } = req.params;
    const perfil = perfisAcessoDetalheMock.find((p) => p.idPerfilAcesso === perfilId);
    const perfilAtualizado = {
      ...(perfil || perfisAcessoDetalheMock[0]),
      ...req.body,
      idPerfilAcesso: perfilId,
      permissoes: req.body.permissoesIds
        ? permissoesMock.filter((p) => req.body.permissoesIds.includes(p.codigoPermissao))
        : perfil?.permissoes || perfisAcessoDetalheMock[0].permissoes,
    };
    res.status(200).json(perfilAtualizado);
  },
};

