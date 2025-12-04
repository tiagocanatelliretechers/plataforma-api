export const subdominiosMock = [
  {
    idSubdominio: 'sub-parcelamento',
    dominioId: 'dom-pagamentos',
    codigoSubdominio: 'PARCELAMENTO',
    nomeSubdominio: 'Parcelamento',
    ordemExibicao: 1,
    ativo: true,
  },
  {
    idSubdominio: 'sub-cobranca',
    dominioId: 'dom-pagamentos',
    codigoSubdominio: 'COBRANCA',
    nomeSubdominio: 'Cobrança',
    ordemExibicao: 2,
    ativo: true,
  },
  {
    idSubdominio: 'sub-consulta-debitos',
    dominioId: 'dom-veiculos',
    codigoSubdominio: 'CONSULTA_DEBITOS',
    nomeSubdominio: 'Consulta de Débitos',
    ordemExibicao: 1,
    ativo: true,
  },
  {
    idSubdominio: 'sub-seguranca',
    dominioId: 'dom-plataforma',
    codigoSubdominio: 'SEGURANCA',
    nomeSubdominio: 'Segurança',
    ordemExibicao: 1,
    ativo: true,
  },
];

export const subdominiosDetalheMock = subdominiosMock.map((s) => ({
  ...s,
  descricao: `Subdomínio responsável por ${s.nomeSubdominio.toLowerCase()}.`,
}));

