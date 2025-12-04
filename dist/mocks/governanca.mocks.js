"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registrosAuditoriaMock = exports.solicitacoesAprovacaoMock = void 0;
const usuarios_mocks_1 = require("./usuarios.mocks");
exports.solicitacoesAprovacaoMock = [
    {
        idSolicitacao: 'sol-001',
        tipoSolicitacao: 'PUBLICACAO_COMPONENTE',
        estadoSolicitacao: 'PENDENTE',
        solicitadoPor: usuarios_mocks_1.usuariosMock[0],
        dataSolicitacao: '2024-03-18T10:30:00Z',
        idAlvo: 'cmp-123',
        tipoAlvo: 'COMPONENTE',
    },
    {
        idSolicitacao: 'sol-002',
        tipoSolicitacao: 'TRANSICAO_CICLO_VIDA',
        estadoSolicitacao: 'PENDENTE',
        solicitadoPor: usuarios_mocks_1.usuariosMock[1],
        dataSolicitacao: '2024-03-19T14:45:00Z',
        idAlvo: 'ver-002',
        tipoAlvo: 'VERSAO',
    },
    {
        idSolicitacao: 'sol-003',
        tipoSolicitacao: 'ALTERACAO_DOMINIO',
        estadoSolicitacao: 'APROVADA',
        solicitadoPor: usuarios_mocks_1.usuariosMock[0],
        dataSolicitacao: '2024-03-15T09:00:00Z',
        idAlvo: 'dom-pagamentos',
        tipoAlvo: 'DOMINIO',
    },
];
exports.registrosAuditoriaMock = [
    {
        idRegistroAuditoria: 'aud-001',
        idEntidade: 'cmp-123',
        tipoEntidade: 'COMPONENTE',
        acao: 'CRIACAO',
        autor: usuarios_mocks_1.usuariosMock[0],
        dataRegistro: '2024-01-15T10:30:00Z',
        detalhes: {
            campo: 'nomeComponente',
            valorAnterior: '',
            valorNovo: 'Parcelamento de Boletos',
        },
    },
    {
        idRegistroAuditoria: 'aud-002',
        idEntidade: 'cmp-123',
        tipoEntidade: 'COMPONENTE',
        acao: 'ATUALIZACAO',
        autor: usuarios_mocks_1.usuariosMock[1],
        dataRegistro: '2024-02-20T14:45:00Z',
        detalhes: {
            campo: 'descricao',
            valorAnterior: 'Componente de boletos.',
            valorNovo: 'Componente responsável pelo parcelamento de boletos de clientes.',
        },
    },
];
//# sourceMappingURL=governanca.mocks.js.map