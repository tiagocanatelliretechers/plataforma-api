export declare const componentesMock: {
    idComponente: string;
    codigoComponente: string;
    nomeComponente: string;
    tipoComponente: string;
    dominio: string;
    estadoCicloVida: string;
}[];
export declare const componentesDetalheMock: {
    descricao: string;
    tags: string[];
    idComponente: string;
    codigoComponente: string;
    nomeComponente: string;
    tipoComponente: string;
    dominio: string;
    estadoCicloVida: string;
}[];
export declare const paginaComponentesMock: {
    conteudo: {
        idComponente: string;
        codigoComponente: string;
        nomeComponente: string;
        tipoComponente: string;
        dominio: string;
        estadoCicloVida: string;
    }[];
    pagina: number;
    tamanho: number;
    totalElementos: number;
    totalPaginas: number;
};
export declare const componentesListaTelaMock: {
    paginaId: string;
    titulo: string;
    filtros: ({
        id: string;
        type: string;
        label: string;
        placeholder: string;
        options?: undefined;
        dataSource?: undefined;
    } | {
        id: string;
        type: string;
        label: string;
        placeholder: string;
        options: {
            value: string;
            label: string;
        }[];
        dataSource?: undefined;
    } | {
        id: string;
        type: string;
        label: string;
        placeholder: string;
        dataSource: {
            type: string;
            endpoint: string;
            valueField: string;
            labelField: string;
        };
        options?: undefined;
    })[];
    colunas: {
        id: string;
        label: string;
        width: string;
        sortable: boolean;
    }[];
    acoesLinha: ({
        id: string;
        label: string;
        icon: string;
        tipo: string;
        acao: string;
        rotaFrontend: string;
        endpoint?: undefined;
    } | {
        id: string;
        label: string;
        icon: string;
        tipo: string;
        acao: string;
        endpoint: string;
        rotaFrontend?: undefined;
    })[];
    acoesPagina: {
        id: string;
        label: string;
        icon: string;
        tipo: string;
        acao: string;
        rotaFrontend: string;
    }[];
    paginacao: {
        pagina: number;
        tamanho: number;
        totalElementos: number;
        totalPaginas: number;
    };
    linhas: {
        idComponente: string;
        codigoComponente: string;
        nomeComponente: string;
        tipoComponente: string;
        dominio: string;
        estadoCicloVida: string;
    }[];
};
export declare const componenteWizardTelaMock: {
    formId: string;
    version: number;
    title: string;
    description: string;
    submit: {
        method: string;
        endpoint: string;
    };
    steps: ({
        id: string;
        order: number;
        label: string;
        title: string;
        description: string;
        type: string;
        fields: {
            id: string;
            type: string;
            label: string;
            helperText: string;
            required: boolean;
            options: {
                value: string;
                label: string;
                description: string;
            }[];
            validation: {
                required: boolean;
            };
        }[];
        layout?: undefined;
    } | {
        id: string;
        order: number;
        label: string;
        title: string;
        description: string;
        type: string;
        fields: ({
            id: string;
            type: string;
            label: string;
            placeholder: string;
            required: boolean;
            validation: {
                required: boolean;
                minLength: number;
                maxLength: number;
            };
            dataSource?: undefined;
            helperText?: undefined;
        } | {
            id: string;
            type: string;
            label: string;
            placeholder: string;
            required: boolean;
            dataSource: {
                type: string;
                endpoint: string;
                valueField: string;
                labelField: string;
            };
            validation: {
                required: boolean;
                minLength?: undefined;
                maxLength?: undefined;
            };
            helperText?: undefined;
        } | {
            id: string;
            type: string;
            label: string;
            placeholder: string;
            helperText: string;
            required: boolean;
            validation?: undefined;
            dataSource?: undefined;
        })[];
        layout?: undefined;
    } | {
        id: string;
        order: number;
        label: string;
        title: string;
        description: string;
        type: string;
        fields: ({
            id: string;
            type: string;
            label: string;
            helperText: string;
            required: boolean;
            dataSource: {
                type: string;
                endpoint: string;
                valueField: string;
                labelField: string;
            };
            validation: {
                minSelected: number;
                required?: undefined;
            };
            options?: undefined;
        } | {
            id: string;
            type: string;
            label: string;
            helperText: string;
            required: boolean;
            dataSource: {
                type: string;
                endpoint: string;
                valueField: string;
                labelField: string;
            };
            validation: {
                required: boolean;
                minSelected: number;
            };
            options?: undefined;
        } | {
            id: string;
            type: string;
            label: string;
            required: boolean;
            options: {
                value: string;
                label: string;
            }[];
            helperText?: undefined;
            dataSource?: undefined;
            validation?: undefined;
        })[];
        layout?: undefined;
    } | {
        id: string;
        order: number;
        label: string;
        title: string;
        description: string;
        type: string;
        fields: {
            id: string;
            type: string;
            label: string;
            helperText: string;
            required: boolean;
            options: {
                value: string;
                label: string;
            }[];
        }[];
        layout?: undefined;
    } | {
        id: string;
        order: number;
        label: string;
        title: string;
        description: string;
        type: string;
        layout: ({
            title: string;
            fields: string[];
            groups?: undefined;
        } | {
            title: string;
            groups: {
                title: string;
                field: string;
            }[];
            fields?: undefined;
        })[];
        fields?: undefined;
    })[];
};
//# sourceMappingURL=componentes.mocks.d.ts.map