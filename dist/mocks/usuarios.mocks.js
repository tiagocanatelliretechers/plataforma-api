"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsuarioFormEdicaoTelaMock = exports.usuarioFormCriacaoTelaMock = exports.usuariosListaTelaMock = exports.paginaUsuariosMock = exports.usuariosDetalheMock = exports.usuariosMock = void 0;
// Dados de usuários
exports.usuariosMock = [
    {
        idUsuario: 'usr-0001',
        login: 'joao.silva',
        nomeExibicao: 'João da Silva',
        email: 'joao.silva@porto.com.br',
        ativo: true,
    },
    {
        idUsuario: 'usr-0002',
        login: 'maria.oliveira',
        nomeExibicao: 'Maria Oliveira',
        email: 'maria.oliveira@porto.com.br',
        ativo: false,
    },
    {
        idUsuario: 'usr-0003',
        login: 'pedro.costa',
        nomeExibicao: 'Pedro Costa',
        email: 'pedro.costa@porto.com.br',
        ativo: true,
    },
    {
        idUsuario: 'usr-0004',
        login: 'ana.santos',
        nomeExibicao: 'Ana Santos',
        email: 'ana.santos@porto.com.br',
        ativo: true,
    },
];
exports.usuariosDetalheMock = exports.usuariosMock.map((u) => ({
    ...u,
    perfisAcessoIds: ['ROLE_ADMIN', 'ROLE_VIEWER'],
    timeIds: ['time-plataforma'],
}));
exports.paginaUsuariosMock = {
    conteudo: exports.usuariosDetalheMock,
    pagina: 0,
    tamanho: 20,
    totalElementos: exports.usuariosDetalheMock.length,
    totalPaginas: 1,
};
// UI - Tela de lista de usuários
exports.usuariosListaTelaMock = {
    paginaId: 'lista-usuarios',
    titulo: 'Usuários da Plataforma',
    filtros: [
        {
            id: 'busca',
            type: 'text',
            label: 'Buscar',
            placeholder: 'Nome, login ou e-mail',
        },
        {
            id: 'ativo',
            type: 'select',
            label: 'Status',
            placeholder: 'Selecione',
            options: [
                { value: 'true', label: 'Ativo' },
                { value: 'false', label: 'Inativo' },
            ],
        },
    ],
    colunas: [
        { id: 'login', label: 'Login', width: '180px', sortable: true },
        { id: 'nomeExibicao', label: 'Nome', width: '220px', sortable: true },
        { id: 'email', label: 'E-mail', width: '260px', sortable: false },
        { id: 'ativo', label: 'Status', width: '100px', sortable: true },
    ],
    acoesLinha: [
        {
            id: 'editar',
            label: 'Editar',
            icon: 'edit',
            tipo: 'link',
            acao: 'rota',
            rotaFrontend: '/usuarios/{idUsuario}/editar',
        },
        {
            id: 'desativar',
            label: 'Desativar',
            icon: 'lock',
            tipo: 'danger',
            acao: 'api',
            endpoint: '/usuarios/{idUsuario}',
            metodoHttp: 'PATCH',
        },
    ],
    acoesPagina: [
        {
            id: 'criar-usuario',
            label: 'Criar Usuário',
            icon: 'user-plus',
            tipo: 'primary',
            acao: 'rota',
            rotaFrontend: '/usuarios/novo',
        },
    ],
    paginacao: {
        pagina: 0,
        tamanho: 20,
        totalElementos: exports.usuariosMock.length,
        totalPaginas: 1,
    },
    linhas: exports.usuariosMock,
};
// UI - Form de criação de usuário
exports.usuarioFormCriacaoTelaMock = {
    formId: 'criar-usuario',
    titulo: 'Criar Usuário',
    descricao: 'Preencha os dados para criar um novo usuário da plataforma',
    modo: 'CRIACAO',
    submit: {
        method: 'POST',
        endpoint: '/usuarios',
    },
    campos: [
        {
            id: 'login',
            type: 'text',
            label: 'Login',
            placeholder: 'ex: joao.silva',
            required: true,
            validation: {
                required: true,
                minLength: 3,
                maxLength: 64,
            },
        },
        {
            id: 'nomeExibicao',
            type: 'text',
            label: 'Nome',
            placeholder: 'ex: João da Silva',
            required: true,
            validation: {
                required: true,
                minLength: 3,
                maxLength: 120,
            },
        },
        {
            id: 'email',
            type: 'email',
            label: 'E-mail',
            placeholder: 'ex: joao.silva@porto.com.br',
            required: true,
            validation: {
                required: true,
            },
        },
        {
            id: 'perfisAcessoIds',
            type: 'select_multiple',
            label: 'Perfis de Acesso',
            helperText: 'Selecione um ou mais perfis',
            required: true,
            dataSource: {
                type: 'api',
                endpoint: '/perfis-acesso',
                valueField: 'idPerfilAcesso',
                labelField: 'nomePerfilAcesso',
            },
            validation: {
                required: true,
            },
        },
        {
            id: 'timeIds',
            type: 'select_multiple',
            label: 'Times',
            helperText: 'Times aos quais o usuário está vinculado',
            required: false,
            dataSource: {
                type: 'api',
                endpoint: '/times',
                valueField: 'idTime',
                labelField: 'nomeTime',
            },
        },
        {
            id: 'ativo',
            type: 'checkbox',
            label: 'Usuário ativo',
            required: false,
        },
    ],
    valoresIniciais: {},
};
// UI - Form de edição de usuário
const getUsuarioFormEdicaoTelaMock = (usuarioId) => {
    const usuario = exports.usuariosDetalheMock.find((u) => u.idUsuario === usuarioId) || exports.usuariosDetalheMock[0];
    return {
        formId: 'editar-usuario',
        titulo: 'Editar Usuário',
        descricao: 'Atualize os dados do usuário',
        modo: 'EDICAO',
        submit: {
            method: 'PATCH',
            endpoint: `/usuarios/${usuarioId}`,
        },
        campos: [
            {
                id: 'login',
                type: 'text',
                label: 'Login',
                placeholder: 'ex: joao.silva',
                required: true,
                validation: {
                    required: true,
                    minLength: 3,
                    maxLength: 64,
                },
            },
            {
                id: 'nomeExibicao',
                type: 'text',
                label: 'Nome',
                placeholder: 'ex: João da Silva',
                required: true,
            },
            {
                id: 'email',
                type: 'email',
                label: 'E-mail',
                required: true,
            },
            {
                id: 'perfisAcessoIds',
                type: 'select_multiple',
                label: 'Perfis de Acesso',
                required: true,
                dataSource: {
                    type: 'api',
                    endpoint: '/perfis-acesso',
                    valueField: 'idPerfilAcesso',
                    labelField: 'nomePerfilAcesso',
                },
            },
            {
                id: 'timeIds',
                type: 'select_multiple',
                label: 'Times',
                required: false,
                dataSource: {
                    type: 'api',
                    endpoint: '/times',
                    valueField: 'idTime',
                    labelField: 'nomeTime',
                },
            },
            {
                id: 'ativo',
                type: 'checkbox',
                label: 'Usuário ativo',
            },
        ],
        valoresIniciais: {
            login: usuario.login,
            nomeExibicao: usuario.nomeExibicao,
            email: usuario.email,
            perfisAcessoIds: usuario.perfisAcessoIds,
            timeIds: usuario.timeIds,
            ativo: usuario.ativo,
        },
    };
};
exports.getUsuarioFormEdicaoTelaMock = getUsuarioFormEdicaoTelaMock;
//# sourceMappingURL=usuarios.mocks.js.map