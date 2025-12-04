import { Request, Response } from 'express';
import { permissoesMock } from '../mocks/perfis-acesso.mocks';

export const permissoesController = {
  // GET /permissoes
  listarPermissoes: (_req: Request, res: Response) => {
    res.status(200).json(permissoesMock);
  },
};

