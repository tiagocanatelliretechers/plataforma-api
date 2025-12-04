"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.estatisticasDominioMock = exports.politicasDominioMock = exports.responsaveisDominioMock = exports.paginaDominiosMock = exports.dominiosDetalheMock = exports.dominiosMock = void 0;
exports.dominiosMock = [
    {
        idDominio: 'dom-pagamentos',
        codigoDominio: 'PAGAMENTOS',
        nomeDominio: 'Pagamentos',
        tipoDominio: 'BUSINESS',
        ativo: true,
    },
    {
        idDominio: 'dom-veiculos',
        codigoDominio: 'VEICULOS',
        nomeDominio: 'Veículos',
        tipoDominio: 'BUSINESS',
        ativo: true,
    },
    {
        idDominio: 'dom-plataforma',
        codigoDominio: 'PLATAFORMA',
        nomeDominio: 'Plataforma',
        tipoDominio: 'TECHNICAL',
        ativo: true,
    },
    {
        idDominio: 'dom-suporte',
        codigoDominio: 'SUPORTE',
        nomeDominio: 'Suporte',
        tipoDominio: 'SUPPORT',
        ativo: true,
    },
];
exports.dominiosDetalheMock = exports.dominiosMock.map((d) => ({
    ...d,
    descricao: `Domínio de negócio responsável por ${d.nomeDominio.toLowerCase()}.`,
    timeResponsavelId: 'time-plataforma',
    timeResponsavelNome: 'Time Plataforma Componentes',
}));
exports.paginaDominiosMock = {
    conteudo: exports.dominiosDetalheMock,
    pagina: 0,
    tamanho: 20,
    totalElementos: exports.dominiosDetalheMock.length,
    totalPaginas: 1,
};
exports.responsaveisDominioMock = {
    timeResponsavelId: 'time-plataforma',
    timesCocriacaoIds: ['time-dom-pagamentos', 'time-dom-veiculos'],
};
exports.politicasDominioMock = {
    politicaCicloVida: 'PADRAO',
    politicaAprovacao: 'REQUER_APROVACAO_DOMINIO',
    politicaVisibilidade: 'PUBLICA',
};
exports.estatisticasDominioMock = {
    dominioId: 'dom-pagamentos',
    totalComponentes: 15,
    totalComponentesBusiness: 10,
    totalComponentesExtension: 3,
    totalComponentesTechnical: 2,
};
//# sourceMappingURL=dominios.mocks.js.map