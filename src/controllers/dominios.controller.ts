import { Request, Response } from 'express';
import { dominiosMock } from '../mocks/dominios.mocks';
import { subdominiosMock } from '../mocks/subdominios.mocks';

export const dominiosController = {
  // GET /dominios
  listarDominios: (_req: Request, res: Response) => {
    res.status(200).json(dominiosMock);
  },

  // GET /dominios/:dominioId/subdominios
  listarSubdominios: (req: Request, res: Response) => {
    const { dominioId } = req.params;
    const subdominios = subdominiosMock.filter((s) => s.dominioId === dominioId);
    res.status(200).json(subdominios.length > 0 ? subdominios : subdominiosMock);
  },
};

