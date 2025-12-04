import { Request, Response } from 'express';
import {
  dominiosMock,
  dominiosDetalheMock,
  paginaDominiosMock,
  responsaveisDominioMock,
  politicasDominioMock,
  estatisticasDominioMock,
} from '../mocks/dominios.mocks';
import { subdominiosMock, subdominiosDetalheMock } from '../mocks/subdominios.mocks';

export const adminController = {
  // GET /admin/dominios
  listarDominios: (req: Request, res: Response) => {
    const { pagina = 0, tamanho = 20 } = req.query;
    res.status(200).json({
      ...paginaDominiosMock,
      pagina: Number(pagina),
      tamanho: Number(tamanho),
    });
  },

  // POST /admin/dominios
  criarDominio: (req: Request, res: Response) => {
    const novoDominio = {
      idDominio: `dom-${Date.now()}`,
      ...req.body,
      ativo: true,
      timeResponsavelNome: 'Time Plataforma Componentes',
    };
    res.status(201).json(novoDominio);
  },

  // GET /admin/dominios/:dominioId
  obterDominio: (req: Request, res: Response) => {
    const { dominioId } = req.params;
    const dominio = dominiosDetalheMock.find((d) => d.idDominio === dominioId);
    if (dominio) {
      res.status(200).json(dominio);
    } else {
      res.status(200).json({ ...dominiosDetalheMock[0], idDominio: dominioId });
    }
  },

  // PATCH /admin/dominios/:dominioId
  atualizarDominio: (req: Request, res: Response) => {
    const { dominioId } = req.params;
    const dominio = dominiosDetalheMock.find((d) => d.idDominio === dominioId);
    const dominioAtualizado = {
      ...(dominio || dominiosDetalheMock[0]),
      ...req.body,
      idDominio: dominioId,
    };
    res.status(200).json(dominioAtualizado);
  },

  // DELETE /admin/dominios/:dominioId
  desativarDominio: (_req: Request, res: Response) => {
    res.status(204).send();
  },

  // POST /admin/dominios/:dominioId/ativar
  ativarDominio: (req: Request, res: Response) => {
    const { dominioId } = req.params;
    const dominio = dominiosDetalheMock.find((d) => d.idDominio === dominioId);
    res.status(200).json({
      ...(dominio || dominiosDetalheMock[0]),
      idDominio: dominioId,
      ativo: true,
    });
  },

  // GET /admin/dominios/:dominioId/responsaveis
  obterResponsaveis: (_req: Request, res: Response) => {
    res.status(200).json(responsaveisDominioMock);
  },

  // PUT /admin/dominios/:dominioId/responsaveis
  atualizarResponsaveis: (req: Request, res: Response) => {
    res.status(200).json({
      ...responsaveisDominioMock,
      ...req.body,
    });
  },

  // GET /admin/dominios/:dominioId/politicas
  obterPoliticas: (_req: Request, res: Response) => {
    res.status(200).json(politicasDominioMock);
  },

  // PUT /admin/dominios/:dominioId/politicas
  atualizarPoliticas: (req: Request, res: Response) => {
    res.status(200).json({
      ...politicasDominioMock,
      ...req.body,
    });
  },

  // GET /admin/dominios/:dominioId/subdominios
  listarSubdominios: (req: Request, res: Response) => {
    const { dominioId } = req.params;
    const subdominios = subdominiosDetalheMock.filter((s) => s.dominioId === dominioId);
    res.status(200).json(subdominios.length > 0 ? subdominios : subdominiosDetalheMock);
  },

  // POST /admin/dominios/:dominioId/subdominios
  criarSubdominio: (req: Request, res: Response) => {
    const { dominioId } = req.params;
    const novoSubdominio = {
      idSubdominio: `sub-${Date.now()}`,
      dominioId,
      ...req.body,
      ordemExibicao: subdominiosMock.length + 1,
      ativo: true,
    };
    res.status(201).json(novoSubdominio);
  },

  // GET /admin/subdominios/:subdominioId
  obterSubdominio: (req: Request, res: Response) => {
    const { subdominioId } = req.params;
    const subdominio = subdominiosDetalheMock.find((s) => s.idSubdominio === subdominioId);
    if (subdominio) {
      res.status(200).json(subdominio);
    } else {
      res.status(200).json({ ...subdominiosDetalheMock[0], idSubdominio: subdominioId });
    }
  },

  // PATCH /admin/subdominios/:subdominioId
  atualizarSubdominio: (req: Request, res: Response) => {
    const { subdominioId } = req.params;
    const subdominio = subdominiosDetalheMock.find((s) => s.idSubdominio === subdominioId);
    const subdominioAtualizado = {
      ...(subdominio || subdominiosDetalheMock[0]),
      ...req.body,
      idSubdominio: subdominioId,
    };
    res.status(200).json(subdominioAtualizado);
  },

  // DELETE /admin/subdominios/:subdominioId
  desativarSubdominio: (_req: Request, res: Response) => {
    res.status(204).send();
  },

  // POST /admin/subdominios/:subdominioId/ativar
  ativarSubdominio: (req: Request, res: Response) => {
    const { subdominioId } = req.params;
    const subdominio = subdominiosDetalheMock.find((s) => s.idSubdominio === subdominioId);
    res.status(200).json({
      ...(subdominio || subdominiosDetalheMock[0]),
      idSubdominio: subdominioId,
      ativo: true,
    });
  },

  // PATCH /admin/dominios/:dominioId/subdominios/reordenar
  reordenarSubdominios: (_req: Request, res: Response) => {
    res.status(200).json({ mensagem: 'Ordem de subdomínios atualizada com sucesso' });
  },

  // GET /admin/dominios/:dominioId/estatisticas
  obterEstatisticas: (req: Request, res: Response) => {
    const { dominioId } = req.params;
    res.status(200).json({
      ...estatisticasDominioMock,
      dominioId,
    });
  },
};

