export const dominiosMock = [
  {
    idDominio: 'dom-pagamentos',
    codigoDominio: 'PAGAMENTOS',
    nomeDominio: 'Pagamentos',
    tipoDominio: 'BUSINESS',
    ativo: true,
  },
  {
    idDominio: 'dom-veiculos',
    codigoDominio: 'VEICULOS',
    nomeDominio: 'Veículos',
    tipoDominio: 'BUSINESS',
    ativo: true,
  },
  {
    idDominio: 'dom-plataforma',
    codigoDominio: 'PLATAFORMA',
    nomeDominio: 'Plataforma',
    tipoDominio: 'TECHNICAL',
    ativo: true,
  },
  {
    idDominio: 'dom-suporte',
    codigoDominio: 'SUPORTE',
    nomeDominio: 'Suporte',
    tipoDominio: 'SUPPORT',
    ativo: true,
  },
];

export const dominiosDetalheMock = dominiosMock.map((d) => ({
  ...d,
  descricao: `Domínio de negócio responsável por ${d.nomeDominio.toLowerCase()}.`,
  timeResponsavelId: 'time-plataforma',
  timeResponsavelNome: 'Time Plataforma Componentes',
}));

export const paginaDominiosMock = {
  conteudo: dominiosDetalheMock,
  pagina: 0,
  tamanho: 20,
  totalElementos: dominiosDetalheMock.length,
  totalPaginas: 1,
};

export const responsaveisDominioMock = {
  timeResponsavelId: 'time-plataforma',
  timesCocriacaoIds: ['time-dom-pagamentos', 'time-dom-veiculos'],
};

export const politicasDominioMock = {
  politicaCicloVida: 'PADRAO',
  politicaAprovacao: 'REQUER_APROVACAO_DOMINIO',
  politicaVisibilidade: 'PUBLICA',
};

export const estatisticasDominioMock = {
  dominioId: 'dom-pagamentos',
  totalComponentes: 15,
  totalComponentesBusiness: 10,
  totalComponentesExtension: 3,
  totalComponentesTechnical: 2,
};

