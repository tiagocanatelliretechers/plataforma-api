"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.governancaController = void 0;
const governanca_mocks_1 = require("../mocks/governanca.mocks");
exports.governancaController = {
    // GET /governanca/solicitacoes-aprovacao
    listarSolicitacoesAprovacao: (_req, res) => {
        const pendentes = governanca_mocks_1.solicitacoesAprovacaoMock.filter((s) => s.estadoSolicitacao === 'PENDENTE');
        res.status(200).json(pendentes);
    },
    // POST /governanca/solicitacoes-aprovacao/:solicitacaoId/decisao
    registrarDecisao: (req, res) => {
        const { solicitacaoId } = req.params;
        const { decisao, comentario } = req.body;
        const solicitacao = governanca_mocks_1.solicitacoesAprovacaoMock.find((s) => s.idSolicitacao === solicitacaoId);
        res.status(200).json({
            ...(solicitacao || governanca_mocks_1.solicitacoesAprovacaoMock[0]),
            idSolicitacao: solicitacaoId,
            estadoSolicitacao: decisao === 'APROVAR' ? 'APROVADA' : 'REJEITADA',
            comentario,
        });
    },
};
//# sourceMappingURL=governanca.controller.js.map