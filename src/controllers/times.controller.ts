import { Request, Response } from 'express';
import { timesMock, timesDetalheMock } from '../mocks/times.mocks';
import { usuariosMock } from '../mocks/usuarios.mocks';

export const timesController = {
  // GET /times
  listarTimes: (_req: Request, res: Response) => {
    res.status(200).json(timesMock);
  },

  // POST /times
  criarTime: (req: Request, res: Response) => {
    const novoTime = {
      idTime: `time-${Date.now()}`,
      ...req.body,
      membros: [],
    };
    res.status(201).json(novoTime);
  },

  // GET /times/:timeId
  obterTime: (req: Request, res: Response) => {
    const { timeId } = req.params;
    const time = timesDetalheMock.find((t) => t.idTime === timeId);
    if (time) {
      res.status(200).json(time);
    } else {
      res.status(200).json({ ...timesDetalheMock[0], idTime: timeId });
    }
  },

  // PATCH /times/:timeId
  atualizarTime: (req: Request, res: Response) => {
    const { timeId } = req.params;
    const time = timesDetalheMock.find((t) => t.idTime === timeId);
    const timeAtualizado = {
      ...(time || timesDetalheMock[0]),
      ...req.body,
      idTime: timeId,
    };
    res.status(200).json(timeAtualizado);
  },

  // GET /times/:timeId/membros
  listarMembrosTime: (_req: Request, res: Response) => {
    res.status(200).json(usuariosMock);
  },

  // POST /times/:timeId/membros
  adicionarMembroTime: (_req: Request, res: Response) => {
    res.status(201).send();
  },

  // DELETE /times/:timeId/membros
  removerMembroTime: (_req: Request, res: Response) => {
    res.status(204).send();
  },
};

