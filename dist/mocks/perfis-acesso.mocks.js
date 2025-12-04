"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.perfisAcessoDetalheMock = exports.perfisAcessoMock = exports.permissoesMock = void 0;
exports.permissoesMock = [
    {
        idPermissao: 'perm-001',
        codigoPermissao: 'COMPONENTE_CADASTRAR',
        descricaoPermissao: 'Permite cadastrar novos componentes.',
    },
    {
        idPermissao: 'perm-002',
        codigoPermissao: 'COMPONENTE_EDITAR',
        descricaoPermissao: 'Permite editar componentes existentes.',
    },
    {
        idPermissao: 'perm-003',
        codigoPermissao: 'DOMINIO_ADMINISTRAR',
        descricaoPermissao: 'Permite administrar domínios de negócio.',
    },
    {
        idPermissao: 'perm-004',
        codigoPermissao: 'USUARIO_GERENCIAR',
        descricaoPermissao: 'Permite gerenciar usuários da plataforma.',
    },
    {
        idPermissao: 'perm-005',
        codigoPermissao: 'GOVERNANCA_APROVAR',
        descricaoPermissao: 'Permite aprovar solicitações de governança.',
    },
];
exports.perfisAcessoMock = [
    {
        idPerfilAcesso: 'role-admin',
        nomePerfilAcesso: 'Administrador Plataforma',
        descricaoPerfilAcesso: 'Acesso total à plataforma de componentes.',
    },
    {
        idPerfilAcesso: 'role-visualizacao',
        nomePerfilAcesso: 'Visualização',
        descricaoPerfilAcesso: 'Acesso somente leitura à plataforma.',
    },
    {
        idPerfilAcesso: 'role-desenvolvedor',
        nomePerfilAcesso: 'Desenvolvedor',
        descricaoPerfilAcesso: 'Acesso para cadastro e edição de componentes.',
    },
];
exports.perfisAcessoDetalheMock = exports.perfisAcessoMock.map((p) => ({
    ...p,
    permissoes: exports.permissoesMock.slice(0, 3),
}));
//# sourceMappingURL=perfis-acesso.mocks.js.map