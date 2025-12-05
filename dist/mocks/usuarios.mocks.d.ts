export declare const usuariosMock: {
    idUsuario: string;
    login: string;
    nomeExibicao: string;
    email: string;
    ativo: boolean;
}[];
export declare const usuariosDetalheMock: {
    perfisAcessoIds: string[];
    timeIds: string[];
    idUsuario: string;
    login: string;
    nomeExibicao: string;
    email: string;
    ativo: boolean;
}[];
export declare const paginaUsuariosMock: {
    conteudo: {
        perfisAcessoIds: string[];
        timeIds: string[];
        idUsuario: string;
        login: string;
        nomeExibicao: string;
        email: string;
        ativo: boolean;
    }[];
    pagina: number;
    tamanho: number;
    totalElementos: number;
    totalPaginas: number;
};
export declare const usuariosListaTelaMock: {
    paginaId: string;
    titulo: string;
    filtros: ({
        id: string;
        type: string;
        label: string;
        placeholder: string;
        options?: undefined;
    } | {
        id: string;
        type: string;
        label: string;
        placeholder: string;
        options: {
            value: string;
            label: string;
        }[];
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
        metodoHttp?: undefined;
    } | {
        id: string;
        label: string;
        icon: string;
        tipo: string;
        acao: string;
        endpoint: string;
        metodoHttp: string;
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
        idUsuario: string;
        login: string;
        nomeExibicao: string;
        email: string;
        ativo: boolean;
    }[];
};
export declare const usuarioFormCriacaoTelaMock: {
    formId: string;
    titulo: string;
    descricao: string;
    modo: string;
    submit: {
        method: string;
        endpoint: string;
    };
    campos: ({
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
        helperText?: undefined;
        dataSource?: undefined;
    } | {
        id: string;
        type: string;
        label: string;
        placeholder: string;
        required: boolean;
        validation: {
            required: boolean;
            minLength?: undefined;
            maxLength?: undefined;
        };
        helperText?: undefined;
        dataSource?: undefined;
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
            minLength?: undefined;
            maxLength?: undefined;
        };
        placeholder?: undefined;
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
        placeholder?: undefined;
        validation?: undefined;
    } | {
        id: string;
        type: string;
        label: string;
        required: boolean;
        placeholder?: undefined;
        validation?: undefined;
        helperText?: undefined;
        dataSource?: undefined;
    })[];
    valoresIniciais: {};
};
export declare const getUsuarioFormEdicaoTelaMock: (usuarioId: string) => {
    formId: string;
    titulo: string;
    descricao: string;
    modo: string;
    submit: {
        method: string;
        endpoint: string;
    };
    campos: ({
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
    } | {
        id: string;
        type: string;
        label: string;
        placeholder: string;
        required: boolean;
        validation?: undefined;
        dataSource?: undefined;
    } | {
        id: string;
        type: string;
        label: string;
        required: boolean;
        placeholder?: undefined;
        validation?: undefined;
        dataSource?: undefined;
    } | {
        id: string;
        type: string;
        label: string;
        required: boolean;
        dataSource: {
            type: string;
            endpoint: string;
            valueField: string;
            labelField: string;
        };
        placeholder?: undefined;
        validation?: undefined;
    } | {
        id: string;
        type: string;
        label: string;
        placeholder?: undefined;
        required?: undefined;
        validation?: undefined;
        dataSource?: undefined;
    })[];
    valoresIniciais: {
        login: string;
        nomeExibicao: string;
        email: string;
        perfisAcessoIds: string[];
        timeIds: string[];
        ativo: boolean;
    };
};
//# sourceMappingURL=usuarios.mocks.d.ts.map