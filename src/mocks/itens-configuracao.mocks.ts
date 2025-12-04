export const itensConfiguracaoResumoMock = [
  {
    idItemConfiguracao: 'ic-001',
    tipoIC: 'API',
    nomeIC: 'API Parcelamento de Boletos',
    identificadorExterno: 'apim:PAGTO-BOLETO-v1',
    componenteId: 'cmp-123',
    nomeComponente: 'Parcelamento de Boletos',
  },
  {
    idItemConfiguracao: 'ic-002',
    tipoIC: 'TOPIC',
    nomeIC: 'Topic Eventos Pagamento',
    identificadorExterno: 'kafka:pagamento-eventos',
    componenteId: 'cmp-123',
    nomeComponente: 'Parcelamento de Boletos',
  },
  {
    idItemConfiguracao: 'ic-003',
    tipoIC: 'QUEUE',
    nomeIC: 'Queue Processamento Boletos',
    identificadorExterno: 'rabbitmq:boletos-queue',
    componenteId: 'cmp-123',
    nomeComponente: 'Parcelamento de Boletos',
  },
  {
    idItemConfiguracao: 'ic-004',
    tipoIC: 'JOB',
    nomeIC: 'Job Reconciliação Diária',
    identificadorExterno: 'cron:reconciliacao-diaria',
    componenteId: 'cmp-456',
    nomeComponente: 'Consulta de Débitos Veiculares',
  },
  {
    idItemConfiguracao: 'ic-005',
    tipoIC: 'STORAGE',
    nomeIC: 'Bucket Documentos Boletos',
    identificadorExterno: 's3:boletos-docs',
    componenteId: 'cmp-123',
    nomeComponente: 'Parcelamento de Boletos',
  },
];

export const itensConfiguracaoDetalheMock = itensConfiguracaoResumoMock.map((ic) => ({
  ...ic,
  descricao: `Item de configuração do tipo ${ic.tipoIC} para ${ic.nomeComponente}.`,
  ambiente: 'PRODUCAO',
  protocolo: ic.tipoIC === 'API' ? 'HTTPS' : 'TCP',
}));

