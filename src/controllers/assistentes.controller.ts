import { Request, Response } from 'express';
import { assistenteComponenteMock, assistenteComponenteResultadoMock } from '../mocks/assistentes.mocks';

export const assistentesController = {
  // POST /assistentes/componentes
  iniciarAssistente: (req: Request, res: Response) => {
    const assistente = {
      ...assistenteComponenteMock,
      idRascunho: `rascunho-${Date.now()}`,
      metadados: {
        ...assistenteComponenteMock.metadados,
        tipoComponente: req.body.tipoComponente,
      },
    };
    res.status(201).json(assistente);
  },

  // GET /assistentes/componentes/:rascunhoId
  obterAssistente: (req: Request, res: Response) => {
    const { rascunhoId } = req.params;
    res.status(200).json({
      ...assistenteComponenteMock,
      idRascunho: rascunhoId,
    });
  },

  // PATCH /assistentes/componentes/:rascunhoId/metadados
  atualizarMetadados: (req: Request, res: Response) => {
    const { rascunhoId } = req.params;
    res.status(200).json({
      ...assistenteComponenteMock,
      idRascunho: rascunhoId,
      etapaAtual: 'VERSAO',
      metadados: {
        ...assistenteComponenteMock.metadados,
        ...req.body,
      },
    });
  },

  // PATCH /assistentes/componentes/:rascunhoId/versao
  atualizarVersao: (req: Request, res: Response) => {
    const { rascunhoId } = req.params;
    res.status(200).json({
      ...assistenteComponenteMock,
      idRascunho: rascunhoId,
      etapaAtual: 'ITENS_CONFIGURACAO',
      versao: {
        ...assistenteComponenteMock.versao,
        ...req.body,
      },
    });
  },

  // PATCH /assistentes/componentes/:rascunhoId/itens-configuracao
  atualizarItensConfiguracao: (req: Request, res: Response) => {
    const { rascunhoId } = req.params;
    res.status(200).json({
      ...assistenteComponenteMock,
      idRascunho: rascunhoId,
      etapaAtual: 'DEPENDENCIAS',
      itensConfiguracao: req.body,
    });
  },

  // PATCH /assistentes/componentes/:rascunhoId/dependencias
  atualizarDependencias: (req: Request, res: Response) => {
    const { rascunhoId } = req.params;
    res.status(200).json({
      ...assistenteComponenteMock,
      idRascunho: rascunhoId,
      etapaAtual: 'RESPONSAVEIS',
      dependencias: req.body,
    });
  },

  // PATCH /assistentes/componentes/:rascunhoId/responsaveis
  atualizarResponsaveis: (req: Request, res: Response) => {
    const { rascunhoId } = req.params;
    res.status(200).json({
      ...assistenteComponenteMock,
      idRascunho: rascunhoId,
      etapaAtual: 'QUALIDADE',
      responsaveis: req.body,
    });
  },

  // PATCH /assistentes/componentes/:rascunhoId/qualidade
  atualizarQualidade: (req: Request, res: Response) => {
    const { rascunhoId } = req.params;
    res.status(200).json({
      ...assistenteComponenteMock,
      idRascunho: rascunhoId,
      etapaAtual: 'REVISAO',
      qualidade: req.body,
    });
  },

  // POST /assistentes/componentes/:rascunhoId/enviar
  enviarAssistente: (_req: Request, res: Response) => {
    res.status(201).json(assistenteComponenteResultadoMock);
  },
};

