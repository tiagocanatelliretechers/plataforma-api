export const permissoesMock = [
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

export const perfisAcessoMock = [
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

export const perfisAcessoDetalheMock = perfisAcessoMock.map((p) => ({
  ...p,
  permissoes: permissoesMock.slice(0, 3),
}));

