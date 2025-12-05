import { Request, Response } from 'express';
import { tokenMock } from '../mocks/autenticacao.mocks';

export const autenticacaoController = {
  // POST /autenticacao/token
  gerarToken: (_req: Request, res: Response) => {
    res.status(200).json(tokenMock);
  },
};
