import { Request, Response } from 'express';
import { usuariosDetalheMock, paginaUsuariosMock } from '../mocks/usuarios.mocks';

export const usuariosController = {
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
};
