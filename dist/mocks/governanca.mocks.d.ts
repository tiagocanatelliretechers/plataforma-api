export declare const solicitacoesAprovacaoMock: {
    idSolicitacao: string;
    tipoSolicitacao: string;
    estadoSolicitacao: string;
    solicitadoPor: {
        idUsuario: string;
        login: string;
        nomeExibicao: string;
        email: string;
        ativo: boolean;
    };
    dataSolicitacao: string;
    idAlvo: string;
    tipoAlvo: string;
}[];
export declare const registrosAuditoriaMock: {
    idRegistroAuditoria: string;
    idEntidade: string;
    tipoEntidade: string;
    acao: string;
    autor: {
        idUsuario: string;
        login: string;
        nomeExibicao: string;
        email: string;
        ativo: boolean;
    };
    dataRegistro: string;
    detalhes: {
        campo: string;
        valorAnterior: string;
        valorNovo: string;
    };
}[];
//# sourceMappingURL=governanca.mocks.d.ts.map