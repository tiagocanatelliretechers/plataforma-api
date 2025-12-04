import { Request, Response } from 'express';
import {
  componentesResumoMock,
  componentesDetalheMock,
  paginaComponentesMock,
  estatisticasComponenteMock,
  dependenciasComponenteMock,
} from '../mocks/componentes.mocks';
import { versoesResumoMock, versoesDetalheMock, estadoCicloVidaDetalheMock } from '../mocks/versoes.mocks';
import { itensConfiguracaoResumoMock } from '../mocks/itens-configuracao.mocks';
import { registrosAuditoriaMock } from '../mocks/governanca.mocks';

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
      ...req.body,
      nomeDominio: 'Pagamentos',
      nomeSubdominio: 'Parcelamento',
      versaoMaisRecente: '0.0.1',
      estadoCicloVida: 'EM_DESENVOLVIMENTO',
      timeResponsavelNome: 'Time Plataforma Componentes',
      dataCriacao: new Date().toISOString(),
      dataAtualizacao: new Date().toISOString(),
    };
    res.status(201).json(novoComponente);
  },

  // GET /componentes/recentes
  listarComponentesRecentes: (_req: Request, res: Response) => {
    res.status(200).json(componentesResumoMock);
  },

  // GET /componentes/estatisticas
  obterEstatisticas: (_req: Request, res: Response) => {
    res.status(200).json(estatisticasComponenteMock);
  },

  // GET /componentes/:componenteId
  obterComponente: (req: Request, res: Response) => {
    const { componenteId } = req.params;
    const componente = componentesDetalheMock.find((c) => c.idComponente === componenteId);
    if (componente) {
      res.status(200).json(componente);
    } else {
      res.status(200).json({ ...componentesDetalheMock[0], idComponente: componenteId });
    }
  },

  // PATCH /componentes/:componenteId
  atualizarComponente: (req: Request, res: Response) => {
    const { componenteId } = req.params;
    const componente = componentesDetalheMock.find((c) => c.idComponente === componenteId);
    const componenteAtualizado = {
      ...(componente || componentesDetalheMock[0]),
      ...req.body,
      idComponente: componenteId,
      dataAtualizacao: new Date().toISOString(),
    };
    res.status(200).json(componenteAtualizado);
  },

  // GET /componentes/:componenteId/versoes
  listarVersoes: (_req: Request, res: Response) => {
    res.status(200).json(versoesResumoMock);
  },

  // POST /componentes/:componenteId/versoes
  criarVersao: (req: Request, res: Response) => {
    const novaVersao = {
      idVersaoComponente: `ver-${Date.now()}`,
      ...req.body,
      estadoCicloVida: 'EM_DESENVOLVIMENTO',
      dataCriacao: new Date().toISOString(),
      itensConfiguracao: [],
      dependencias: [],
    };
    res.status(201).json(novaVersao);
  },

  // GET /componentes/:componenteId/versoes/:versaoId
  obterVersao: (req: Request, res: Response) => {
    const { versaoId } = req.params;
    const versao = versoesDetalheMock.find((v) => v.idVersaoComponente === versaoId);
    if (versao) {
      res.status(200).json(versao);
    } else {
      res.status(200).json({ ...versoesDetalheMock[0], idVersaoComponente: versaoId });
    }
  },

  // PATCH /componentes/:componenteId/versoes/:versaoId
  atualizarVersao: (req: Request, res: Response) => {
    const { versaoId } = req.params;
    const versao = versoesDetalheMock.find((v) => v.idVersaoComponente === versaoId);
    const versaoAtualizada = {
      ...(versao || versoesDetalheMock[0]),
      ...req.body,
      idVersaoComponente: versaoId,
    };
    res.status(200).json(versaoAtualizada);
  },

  // POST /componentes/:componenteId/versoes/:versaoId/ciclo-vida/transicoes
  aplicarTransicaoCicloVida: (req: Request, res: Response) => {
    res.status(200).json({
      ...estadoCicloVidaDetalheMock,
      estado: req.body.estadoDestino,
      comentario: req.body.comentario,
      dataAlteracao: new Date().toISOString(),
    });
  },

  // GET /componentes/:componenteId/itens-configuracao
  listarItensConfiguracao: (_req: Request, res: Response) => {
    res.status(200).json(itensConfiguracaoResumoMock);
  },

  // GET /componentes/:componenteId/dependencias
  obterDependencias: (_req: Request, res: Response) => {
    res.status(200).json(dependenciasComponenteMock);
  },

  // GET /componentes/:componenteId/auditoria
  listarAuditoria: (_req: Request, res: Response) => {
    res.status(200).json(registrosAuditoriaMock);
  },
};

