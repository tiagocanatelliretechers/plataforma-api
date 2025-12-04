"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dependenciasComponenteMock = exports.estatisticasComponenteMock = exports.paginaComponentesMock = exports.componentesDetalheMock = exports.componentesResumoMock = void 0;
exports.componentesResumoMock = [
    {
        idComponente: 'cmp-123',
        codigoComponente: 'PAGTO_BOLETO',
        nomeComponente: 'Parcelamento de Boletos',
        tipoComponente: 'BUSINESS',
        dominioId: 'dom-pagamentos',
        nomeDominio: 'Pagamentos',
        subdominioId: 'sub-parcelamento',
        nomeSubdominio: 'Parcelamento',
        versaoMaisRecente: '1.0.0',
        estadoCicloVida: 'EM_PRODUCAO',
    },
    {
        idComponente: 'cmp-456',
        codigoComponente: 'CONS_DEBITOS',
        nomeComponente: 'Consulta de Débitos Veiculares',
        tipoComponente: 'BUSINESS',
        dominioId: 'dom-veiculos',
        nomeDominio: 'Veículos',
        subdominioId: 'sub-consulta-debitos',
        nomeSubdominio: 'Consulta de Débitos',
        versaoMaisRecente: '0.9.0',
        estadoCicloVida: 'EM_HOMOLOGACAO',
    },
    {
        idComponente: 'cmp-789',
        codigoComponente: 'AUTH_SERVICE',
        nomeComponente: 'Serviço de Autenticação',
        tipoComponente: 'TECHNICAL',
        dominioId: 'dom-plataforma',
        nomeDominio: 'Plataforma',
        subdominioId: 'sub-seguranca',
        nomeSubdominio: 'Segurança',
        versaoMaisRecente: '2.1.0',
        estadoCicloVida: 'EM_PRODUCAO',
    },
];
exports.componentesDetalheMock = exports.componentesResumoMock.map((c) => ({
    ...c,
    descricao: `Componente responsável pelo ${c.nomeComponente.toLowerCase()}.`,
    timeResponsavelId: 'time-plataforma',
    timeResponsavelNome: 'Time Plataforma Componentes',
    tags: c.nomeComponente.toLowerCase().split(' '),
    dataCriacao: '2024-01-15T10:30:00Z',
    dataAtualizacao: '2024-03-20T14:45:00Z',
}));
exports.paginaComponentesMock = {
    conteudo: exports.componentesResumoMock,
    pagina: 0,
    tamanho: 20,
    totalElementos: exports.componentesResumoMock.length,
    totalPaginas: 1,
};
exports.estatisticasComponenteMock = {
    totalComponentes: 45,
    totalComponentesBusiness: 30,
    totalComponentesExtension: 8,
    totalComponentesTechnical: 7,
    totalDominios: 10,
    totalSubdominios: 35,
};
exports.dependenciasComponenteMock = {
    dependenciasEntrada: [exports.componentesResumoMock[2]],
    dependenciasSaida: [exports.componentesResumoMock[1]],
};
//# sourceMappingURL=componentes.mocks.js.map