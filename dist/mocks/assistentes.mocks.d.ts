export declare const assistenteComponenteMock: {
    idRascunho: string;
    etapaAtual: string;
    metadados: {
        codigoComponente: string;
        nomeComponente: string;
        descricao: string;
        tags: string[];
    };
    versao: {
        versao: string;
        descricaoAlteracoes: string;
    };
    itensConfiguracao: {
        itensConfiguracao: {
            tipoIC: string;
            nomeIC: string;
            componenteId: string;
            descricao: string;
            identificadorExterno: string;
            ambiente: string;
            protocolo: string;
        }[];
    };
    dependencias: {
        componentesDependenciaIds: string[];
    };
    responsaveis: {
        timeResponsavelId: string;
        timesCocriacaoIds: string[];
    };
    qualidade: {
        atributosQualidade: {
            disponibilidade: string;
            tempoRespostaMs: string;
        };
    };
};
export declare const assistenteComponenteResultadoMock: {
    componente: {
        idComponente: string;
        codigoComponente: string;
        nomeComponente: string;
        tipoComponente: string;
        dominioId: string;
        nomeDominio: string;
        subdominioId: string;
        nomeSubdominio: string;
        versaoMaisRecente: string;
        estadoCicloVida: string;
        descricao: string;
        timeResponsavelId: string;
        timeResponsavelNome: string;
        tags: string[];
        dataCriacao: string;
        dataAtualizacao: string;
    };
    versao: {
        idVersaoComponente: string;
        versao: string;
        descricaoAlteracoes: string;
        estadoCicloVida: string;
        dataCriacao: string;
        atributosQualidade: {
            disponibilidade: string;
            tempoRespostaMs: string;
        };
        itensConfiguracao: never[];
        dependencias: never[];
    };
};
//# sourceMappingURL=assistentes.mocks.d.ts.map