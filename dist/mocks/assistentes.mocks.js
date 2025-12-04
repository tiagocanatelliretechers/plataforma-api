"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assistenteComponenteResultadoMock = exports.assistenteComponenteMock = void 0;
exports.assistenteComponenteMock = {
    idRascunho: 'rascunho-001',
    etapaAtual: 'METADADOS',
    metadados: {
        codigoComponente: 'PAGTO_BOLETO',
        nomeComponente: 'Parcelamento de Boletos',
        descricao: 'Componente responsável pelo parcelamento de boletos.',
        tags: ['pagamentos', 'boletos', 'parcelamento'],
    },
    versao: {
        versao: '1.0.0',
        descricaoAlteracoes: 'Versão inicial do componente.',
    },
    itensConfiguracao: {
        itensConfiguracao: [
            {
                tipoIC: 'API',
                nomeIC: 'API Parcelamento de Boletos',
                componenteId: 'cmp-123',
                descricao: 'API principal de parcelamento de boletos.',
                identificadorExterno: 'apim:PAGTO-BOLETO-v1',
                ambiente: 'PRODUCAO',
                protocolo: 'HTTPS',
            },
        ],
    },
    dependencias: {
        componentesDependenciaIds: ['cmp-789'],
    },
    responsaveis: {
        timeResponsavelId: 'time-plataforma',
        timesCocriacaoIds: ['time-dom-pagamentos'],
    },
    qualidade: {
        atributosQualidade: {
            disponibilidade: '99.9',
            tempoRespostaMs: '500',
        },
    },
};
exports.assistenteComponenteResultadoMock = {
    componente: {
        idComponente: 'cmp-novo',
        codigoComponente: 'PAGTO_BOLETO',
        nomeComponente: 'Parcelamento de Boletos',
        tipoComponente: 'BUSINESS',
        dominioId: 'dom-pagamentos',
        nomeDominio: 'Pagamentos',
        subdominioId: 'sub-parcelamento',
        nomeSubdominio: 'Parcelamento',
        versaoMaisRecente: '1.0.0',
        estadoCicloVida: 'EM_DESENVOLVIMENTO',
        descricao: 'Componente responsável pelo parcelamento de boletos.',
        timeResponsavelId: 'time-plataforma',
        timeResponsavelNome: 'Time Plataforma Componentes',
        tags: ['pagamentos', 'boletos', 'parcelamento'],
        dataCriacao: new Date().toISOString(),
        dataAtualizacao: new Date().toISOString(),
    },
    versao: {
        idVersaoComponente: 'ver-novo',
        versao: '1.0.0',
        descricaoAlteracoes: 'Versão inicial do componente.',
        estadoCicloVida: 'EM_DESENVOLVIMENTO',
        dataCriacao: new Date().toISOString(),
        atributosQualidade: {
            disponibilidade: '99.9',
            tempoRespostaMs: '500',
        },
        itensConfiguracao: [],
        dependencias: [],
    },
};
//# sourceMappingURL=assistentes.mocks.js.map