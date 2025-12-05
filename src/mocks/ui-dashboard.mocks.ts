export const dashboardTelaMock = {
  paginaId: 'dashboard-principal',
  titulo: 'Dashboard',
  subTitulo: 'Visão geral da plataforma Arch Hub',
  cardsResumo: [
    {
      idCard: 'business-components',
      titulo: 'Business Components',
      descricao: 'Componentes de negócio',
      valor: 2,
      icone: 'layers',
      configuravel: true,
    },
    {
      idCard: 'extension-components',
      titulo: 'Extension Components',
      descricao: 'Componentes de extensão',
      valor: 1,
      icone: 'extension',
      configuravel: true,
    },
    {
      idCard: 'technical-components',
      titulo: 'Technical Components',
      descricao: 'Componentes técnicos',
      valor: 1,
      icone: 'cpu',
      configuravel: true,
    },
    {
      idCard: 'usuarios-ativos',
      titulo: 'Usuários Ativos',
      descricao: 'Usuários com acesso ativo',
      valor: 4,
      icone: 'user-check',
      configuravel: false,
    },
  ],
  graficoComponentesCriados: {
    titulo: 'Componentes Criados por Mês',
    destaque: {
      valorAtual: 15,
      textoDestaque: '+15',
      variacaoPercentual: 50.0,
      textoComparacao: '+50.0% do mês anterior',
    },
    serie: {
      unidadeEixoX: 'mes',
      unidadeEixoY: 'quantidade',
      pontos: [
        { mes: 'Jul', quantidade: 8 },
        { mes: 'Ago', quantidade: 10 },
        { mes: 'Set', quantidade: 6 },
        { mes: 'Out', quantidade: 12 },
        { mes: 'Nov', quantidade: 15 },
      ],
    },
  },
  eventosRecentes: {
    titulo: 'Eventos Recentes',
    descricao: 'Últimas ações realizadas na plataforma',
    itens: [
      {
        idEvento: 'evt-001',
        usuario: {
          nome: 'João Silva',
          iniciais: 'JS',
        },
        tipoEvento: 'Configuração atualizada',
        descricaoCurta: 'Configuração do API Gateway atualizada',
        componenteNome: 'Aprovação de Reserva',
        haQuantoTempo: 'há mais de 1 ano',
        status: 'Sucesso',
      },
      {
        idEvento: 'evt-002',
        usuario: {
          nome: 'Ana Oliveira',
          iniciais: 'AO',
        },
        tipoEvento: 'Componente atualizado',
        descricaoCurta: 'Componente atualizado',
        componenteNome: 'Gestão de Clientes',
        haQuantoTempo: 'há mais de 1 ano',
        status: 'Sucesso',
      },
      {
        idEvento: 'evt-003',
        usuario: {
          nome: 'Pedro Costa',
          iniciais: 'PC',
        },
        tipoEvento: 'Componente criado',
        descricaoCurta: 'Componente criado',
        componenteNome: 'Gestão de Clientes',
        haQuantoTempo: 'há quase 2 anos',
        status: 'Sucesso',
      },
    ],
  },
  statusIntegracoes: {
    titulo: 'Status das Integrações',
    descricao: 'Status de conexão com sistemas externos',
    integracoes: [
      {
        idIntegracao: 'techstore',
        nome: 'TechStore',
        status: 'Conectado',
        ultimaSincronizacao: '2025-12-05T09:15:00Z',
      },
      {
        idIntegracao: 'git',
        nome: 'Git',
        status: 'Conectado',
        ultimaSincronizacao: '2025-12-05T09:12:00Z',
      },
      {
        idIntegracao: 'jira',
        nome: 'Jira',
        status: 'Conectado',
        ultimaSincronizacao: '2025-12-05T09:10:00Z',
      },
      {
        idIntegracao: 'sso',
        nome: 'SSO',
        status: 'Conectado',
        ultimaSincronizacao: '2025-12-05T09:08:00Z',
      },
    ],
  },
};

