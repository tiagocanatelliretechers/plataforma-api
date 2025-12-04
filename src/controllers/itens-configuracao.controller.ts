import { Request, Response } from 'express';
import { itensConfiguracaoResumoMock, itensConfiguracaoDetalheMock } from '../mocks/itens-configuracao.mocks';

export const itensConfiguracaoController = {
  // GET /itens-configuracao
  listarItensConfiguracao: (req: Request, res: Response) => {
    const { tipoIC, componenteId } = req.query;
    let itens = itensConfiguracaoResumoMock;

    if (tipoIC) {
      itens = itens.filter((ic) => ic.tipoIC === tipoIC);
    }
    if (componenteId) {
      itens = itens.filter((ic) => ic.componenteId === componenteId);
    }

    res.status(200).json(itens);
  },

  // POST /itens-configuracao
  criarItemConfiguracao: (req: Request, res: Response) => {
    const novoItem = {
      idItemConfiguracao: `ic-${Date.now()}`,
      ...req.body,
      nomeComponente: 'Parcelamento de Boletos',
    };
    res.status(201).json(novoItem);
  },

  // GET /itens-configuracao/:itemConfiguracaoId
  obterItemConfiguracao: (req: Request, res: Response) => {
    const { itemConfiguracaoId } = req.params;
    const item = itensConfiguracaoDetalheMock.find(
      (ic) => ic.idItemConfiguracao === itemConfiguracaoId
    );
    if (item) {
      res.status(200).json(item);
    } else {
      res.status(200).json({ ...itensConfiguracaoDetalheMock[0], idItemConfiguracao: itemConfiguracaoId });
    }
  },

  // PATCH /itens-configuracao/:itemConfiguracaoId
  atualizarItemConfiguracao: (req: Request, res: Response) => {
    const { itemConfiguracaoId } = req.params;
    const item = itensConfiguracaoDetalheMock.find(
      (ic) => ic.idItemConfiguracao === itemConfiguracaoId
    );
    const itemAtualizado = {
      ...(item || itensConfiguracaoDetalheMock[0]),
      ...req.body,
      idItemConfiguracao: itemConfiguracaoId,
    };
    res.status(200).json(itemAtualizado);
  },
};

