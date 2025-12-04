"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usuarioAutenticadoMock = exports.paginaUsuariosMock = exports.usuariosDetalheMock = exports.usuariosMock = void 0;
exports.usuariosMock = [
    {
        idUsuario: 'usr-001',
        login: 'joao.silva',
        nomeExibicao: 'João da Silva',
        email: 'joao.silva@empresa.com',
        ativo: true,
    },
    {
        idUsuario: 'usr-002',
        login: 'maria.souza',
        nomeExibicao: 'Maria Souza',
        email: 'maria.souza@empresa.com',
        ativo: true,
    },
    {
        idUsuario: 'usr-003',
        login: 'carlos.santos',
        nomeExibicao: 'Carlos Santos',
        email: 'carlos.santos@empresa.com',
        ativo: false,
    },
];
exports.usuariosDetalheMock = exports.usuariosMock.map((u) => ({
    ...u,
    perfisAcesso: [
        {
            idPerfilAcesso: 'role-admin',
            nomePerfilAcesso: 'Administrador Plataforma',
            descricaoPerfilAcesso: 'Acesso total à plataforma de componentes.',
        },
    ],
    times: [
        {
            idTime: 'time-plataforma',
            nomeTime: 'Time Plataforma Componentes',
            descricaoTime: 'Time responsável pela plataforma de componentes.',
        },
    ],
}));
exports.paginaUsuariosMock = {
    conteudo: exports.usuariosDetalheMock,
    pagina: 0,
    tamanho: 20,
    totalElementos: exports.usuariosDetalheMock.length,
    totalPaginas: 1,
};
exports.usuarioAutenticadoMock = {
    idUsuario: 'usr-001',
    login: 'joao.silva',
    nomeExibicao: 'João da Silva',
    email: 'joao.silva@empresa.com',
    ativo: true,
    perfisAcesso: [
        {
            idPerfilAcesso: 'role-admin',
            nomePerfilAcesso: 'Administrador Plataforma',
        },
    ],
    times: [
        {
            idTime: 'time-plataforma',
            nomeTime: 'Time Plataforma Componentes',
        },
    ],
};
//# sourceMappingURL=usuarios.mocks.js.map