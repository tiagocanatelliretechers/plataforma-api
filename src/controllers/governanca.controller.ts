import { Request, Response } from 'express';
import { solicitacoesAprovacaoMock } from '../mocks/governanca.mocks';

export const governancaController = {
  // GET /governanca/solicitacoes-aprovacao
  listarSolicitacoesAprovacao: (_req: Request, res: Response) => {
    const pendentes = solicitacoesAprovacaoMock.filter(
      (s) => s.estadoSolicitacao === 'PENDENTE'
    );
    res.status(200).json(pendentes);
  },

  // POST /governanca/solicitacoes-aprovacao/:solicitacaoId/decisao
  registrarDecisao: (req: Request, res: Response) => {
    const { solicitacaoId } = req.params;
    const { decisao, comentario } = req.body;
    const solicitacao = solicitacoesAprovacaoMock.find(
      (s) => s.idSolicitacao === solicitacaoId
    );
    res.status(200).json({
      ...(solicitacao || solicitacoesAprovacaoMock[0]),
      idSolicitacao: solicitacaoId,
      estadoSolicitacao: decisao === 'APROVAR' ? 'APROVADA' : 'REJEITADA',
      comentario,
    });
  },
};

