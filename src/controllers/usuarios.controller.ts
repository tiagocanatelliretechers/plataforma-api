import { Request, Response } from 'express';
import {
  usuarioAutenticadoMock,
  usuariosDetalheMock,
  paginaUsuariosMock,
} from '../mocks/usuarios.mocks';
import { perfisAcessoMock } from '../mocks/perfis-acesso.mocks';
import { timesMock } from '../mocks/times.mocks';

export const usuariosController = {
  // GET /usuarios/me
  obterUsuarioAutenticado: (_req: Request, res: Response) => {
    res.status(200).json(usuarioAutenticadoMock);
  },

  // GET /usuarios
  listarUsuarios: (req: Request, res: Response) => {
    const { pagina = 0, tamanho = 20 } = req.query;
    res.status(200).json({
      ...paginaUsuariosMock,
      pagina: Number(pagina),
      tamanho: Number(tamanho),
    });
  },

  // POST /usuarios
  criarUsuario: (req: Request, res: Response) => {
    const novoUsuario = {
      idUsuario: `usr-${Date.now()}`,
      ...req.body,
      perfisAcesso: perfisAcessoMock.filter((p) =>
        req.body.perfisAcessoIds?.includes(p.idPerfilAcesso)
      ),
      times: timesMock.filter((t) => req.body.timeIds?.includes(t.idTime)),
    };
    res.status(201).json(novoUsuario);
  },

  // GET /usuarios/:usuarioId
  obterUsuario: (req: Request, res: Response) => {
    const { usuarioId } = req.params;
    const usuario = usuariosDetalheMock.find((u) => u.idUsuario === usuarioId);
    if (usuario) {
      res.status(200).json(usuario);
    } else {
      res.status(200).json({ ...usuariosDetalheMock[0], idUsuario: usuarioId });
    }
  },

  // PATCH /usuarios/:usuarioId
  atualizarUsuario: (req: Request, res: Response) => {
    const { usuarioId } = req.params;
    const usuario = usuariosDetalheMock.find((u) => u.idUsuario === usuarioId);
    const usuarioAtualizado = {
      ...(usuario || usuariosDetalheMock[0]),
      ...req.body,
      idUsuario: usuarioId,
    };
    res.status(200).json(usuarioAtualizado);
  },

  // POST /usuarios/:usuarioId/ativar
  ativarUsuario: (req: Request, res: Response) => {
    const { usuarioId } = req.params;
    const usuario = usuariosDetalheMock.find((u) => u.idUsuario === usuarioId);
    res.status(200).json({
      ...(usuario || usuariosDetalheMock[0]),
      idUsuario: usuarioId,
      ativo: true,
    });
  },

  // GET /usuarios/:usuarioId/papeis
  listarPapeisUsuario: (_req: Request, res: Response) => {
    res.status(200).json(perfisAcessoMock);
  },

  // PUT /usuarios/:usuarioId/papeis
  substituirPapeisUsuario: (req: Request, res: Response) => {
    const perfisIds = req.body as string[];
    const perfis = perfisAcessoMock.filter((p) => perfisIds.includes(p.idPerfilAcesso));
    res.status(200).json(perfis.length > 0 ? perfis : perfisAcessoMock);
  },

  // GET /usuarios/:usuarioId/times
  listarTimesUsuario: (_req: Request, res: Response) => {
    res.status(200).json(timesMock);
  },

  // PUT /usuarios/:usuarioId/times
  substituirTimesUsuario: (req: Request, res: Response) => {
    const timesIds = req.body as string[];
    const times = timesMock.filter((t) => timesIds.includes(t.idTime));
    res.status(200).json(times.length > 0 ? times : timesMock);
  },
};

