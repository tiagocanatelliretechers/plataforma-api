import { Request, Response } from 'express';
import { notificacoesMock } from '../mocks/notificacoes.mocks';

export const notificacoesController = {
  // GET /notificacoes
  listarNotificacoes: (_req: Request, res: Response) => {
    res.status(200).json(notificacoesMock);
  },
};

