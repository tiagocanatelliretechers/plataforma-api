import { Request, Response } from 'express';
import { tokenMock } from '../mocks/autenticacao.mocks';

export const autenticacaoController = {
  gerarToken: (_req: Request, res: Response) => {
    // Em um ambiente real, validaria login e senha
    res.status(200).json(tokenMock);
  },
};

