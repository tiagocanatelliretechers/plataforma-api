import { Request, Response } from 'express';
import { componentesDetalheMock, paginaComponentesMock } from '../mocks/componentes.mocks';

export const componentesController = {
  // GET /componentes
  listarComponentes: (req: Request, res: Response) => {
    const { pagina = 0, tamanho = 20 } = req.query;
    res.status(200).json({
      ...paginaComponentesMock,
      pagina: Number(pagina),
      tamanho: Number(tamanho),
    });
  },

  // POST /componentes
  criarComponente: (req: Request, res: Response) => {
    const novoComponente = {
      idComponente: `cmp-${Date.now()}`,
      codigoComponente: req.body.nomeComponente
        ? req.body.nomeComponente.toUpperCase().replace(/\s+/g, '_').substring(0, 20)
        : 'NOVO_COMP',
      nomeComponente: req.body.nomeComponente,
      tipoComponente: req.body.tipoComponente?.toUpperCase() || 'BUSINESS',
      dominio: 'Plataforma',
      estadoCicloVida: 'EM_DESENVOLVIMENTO',
      descricao: req.body.descricao || '',
      tags: req.body.tags || [],
    };
    res.status(201).json(novoComponente);
  },

  // GET /componentes/:componenteId (não está no YAML mas pode ser útil)
  obterComponente: (req: Request, res: Response) => {
    const { componenteId } = req.params;
    const componente = componentesDetalheMock.find((c) => c.idComponente === componenteId);
    if (componente) {
      res.status(200).json(componente);
    } else {
      res.status(200).json({ ...componentesDetalheMock[0], idComponente: componenteId });
    }
  },
};
