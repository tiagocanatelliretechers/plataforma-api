"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.componenteWizardTelaMock = exports.componentesListaTelaMock = exports.paginaComponentesMock = exports.componentesDetalheMock = exports.componentesMock = void 0;
// Dados de componentes
exports.componentesMock = [
    {
        idComponente: 'cmp-000123',
        codigoComponente: 'PAGTO_BOLETO',
        nomeComponente: 'Parcelamento de Boletos',
        tipoComponente: 'BUSINESS',
        dominio: 'Pagamentos',
        estadoCicloVida: 'EM_PRODUCAO',
    },
    {
        idComponente: 'cmp-000456',
        codigoComponente: 'CONS_DEBITOS_VEIC',
        nomeComponente: 'Consulta de Débitos Veiculares',
        tipoComponente: 'BUSINESS',
        dominio: 'Veículos',
        estadoCicloVida: 'EM_HOMOLOGACAO',
    },
    {
        idComponente: 'cmp-000789',
        codigoComponente: 'EMAIL_SMTP',
        nomeComponente: 'Serviço SMTP Corporativo',
        tipoComponente: 'TECHNICAL',
        dominio: 'Plataforma',
        estadoCicloVida: 'EM_PRODUCAO',
    },
];
exports.componentesDetalheMock = exports.componentesMock.map((c) => ({
    ...c,
    descricao: `Componente responsável por ${c.nomeComponente.toLowerCase()}.`,
    tags: c.nomeComponente.toLowerCase().split(' '),
}));
exports.paginaComponentesMock = {
    conteudo: exports.componentesMock,
    pagina: 0,
    tamanho: 20,
    totalElementos: exports.componentesMock.length,
    totalPaginas: 1,
};
// UI - Tela de lista de componentes
exports.componentesListaTelaMock = {
    paginaId: 'lista-componentes',
    titulo: 'Catálogo de Componentes',
    filtros: [
        {
            id: 'busca',
            type: 'text',
            label: 'Buscar',
            placeholder: 'Nome, código ou tag',
        },
        {
            id: 'tipoComponente',
            type: 'select',
            label: 'Tipo de Componente',
            placeholder: 'Selecione',
            options: [
                { value: 'BUSINESS', label: 'Business' },
                { value: 'EXTENSION', label: 'Extension' },
                { value: 'TECHNICAL', label: 'Technical' },
            ],
        },
        {
            id: 'dominioId',
            type: 'select',
            label: 'Domínio',
            placeholder: 'Selecione um domínio',
            dataSource: {
                type: 'api',
                endpoint: '/dominios',
                valueField: 'idDominio',
                labelField: 'nomeDominio',
            },
        },
    ],
    colunas: [
        { id: 'codigoComponente', label: 'Código', width: '150px', sortable: true },
        { id: 'nomeComponente', label: 'Nome', width: '260px', sortable: true },
        { id: 'tipoComponente', label: 'Tipo', width: '140px', sortable: true },
        { id: 'dominio', label: 'Domínio', width: '180px', sortable: true },
        { id: 'estadoCicloVida', label: 'Estado', width: '140px', sortable: true },
    ],
    acoesLinha: [
        {
            id: 'ver-detalhes',
            label: 'Ver Detalhes',
            icon: 'eye',
            tipo: 'link',
            acao: 'rota',
            rotaFrontend: '/componentes/{idComponente}',
        },
        {
            id: 'abrir-em-jira',
            label: 'Abrir em Jira',
            icon: 'jira',
            tipo: 'secondary',
            acao: 'link-externo',
            endpoint: 'https://jira.empresa.com/browse/{codigoComponente}',
        },
    ],
    acoesPagina: [
        {
            id: 'criar-componente',
            label: 'Criar Componente',
            icon: 'plus',
            tipo: 'primary',
            acao: 'rota',
            rotaFrontend: '/componentes/novo',
        },
    ],
    paginacao: {
        pagina: 0,
        tamanho: 20,
        totalElementos: exports.componentesMock.length,
        totalPaginas: 1,
    },
    linhas: exports.componentesMock,
};
// UI - Wizard de criação de componente
exports.componenteWizardTelaMock = {
    formId: 'create-component',
    version: 1,
    title: 'Criar Novo Componente',
    description: 'Siga os passos para criar um novo componente',
    submit: {
        method: 'POST',
        endpoint: '/componentes',
    },
    steps: [
        {
            id: 'component-type',
            order: 1,
            label: 'Tipo',
            title: 'Tipo',
            description: 'Escolha o tipo de componente',
            type: 'form',
            fields: [
                {
                    id: 'tipoComponente',
                    type: 'card_select',
                    label: 'Tipo de Componente',
                    helperText: 'Escolha o tipo de componente',
                    required: true,
                    options: [
                        {
                            value: 'business',
                            label: 'Business',
                            description: 'Componente de negócio que representa uma funcionalidade completa',
                        },
                        {
                            value: 'extension',
                            label: 'Extension',
                            description: 'Extensão que adiciona funcionalidades a um Business Component',
                        },
                        {
                            value: 'technical',
                            label: 'Technical',
                            description: 'Serviço técnico reutilizável (ex: SMTP, Auth, Cache)',
                        },
                    ],
                    validation: {
                        required: true,
                    },
                },
            ],
        },
        {
            id: 'basic-info',
            order: 2,
            label: 'Informações Básicas',
            title: 'Informações Básicas',
            description: 'Dados principais do componente',
            type: 'form',
            fields: [
                {
                    id: 'nomeComponente',
                    type: 'text',
                    label: 'Nome do Componente',
                    placeholder: 'Ex: Aprovação de Reserva',
                    required: true,
                    validation: {
                        required: true,
                        minLength: 3,
                        maxLength: 120,
                    },
                },
                {
                    id: 'valueStreamId',
                    type: 'select',
                    label: 'Value Stream',
                    placeholder: 'Selecione um Value Stream',
                    required: true,
                    dataSource: {
                        type: 'api',
                        endpoint: '/value-streams',
                        valueField: 'id',
                        labelField: 'nome',
                    },
                    validation: {
                        required: true,
                    },
                },
                {
                    id: 'teamId',
                    type: 'select',
                    label: 'Time Responsável',
                    placeholder: 'Selecione um Time',
                    required: true,
                    dataSource: {
                        type: 'api',
                        endpoint: '/times',
                        valueField: 'idTime',
                        labelField: 'nomeTime',
                    },
                    validation: {
                        required: true,
                    },
                },
                {
                    id: 'tags',
                    type: 'tags',
                    label: 'Tags',
                    placeholder: 'reserva, aprovação, veículos',
                    helperText: 'Separadas por vírgula',
                    required: false,
                },
                {
                    id: 'descricao',
                    type: 'textarea',
                    label: 'Descrição',
                    placeholder: 'Descreva o componente...',
                    required: true,
                    validation: {
                        required: true,
                        minLength: 10,
                        maxLength: 2000,
                    },
                },
            ],
        },
        {
            id: 'configurations',
            order: 3,
            label: 'Configurações',
            title: 'Configurações',
            description: 'Configurações específicas',
            type: 'form',
            fields: [
                {
                    id: 'extensionComponents',
                    type: 'checkbox_group',
                    label: 'Extension Components',
                    helperText: '(selecione pelo menos um, se aplicável)',
                    required: false,
                    dataSource: {
                        type: 'api',
                        endpoint: '/componentes?tipoComponente=EXTENSION',
                        valueField: 'idComponente',
                        labelField: 'nomeComponente',
                    },
                    validation: {
                        minSelected: 0,
                    },
                },
                {
                    id: 'technicalComponents',
                    type: 'checkbox_group',
                    label: 'Technical Components',
                    helperText: '(selecione pelo menos um)',
                    required: true,
                    dataSource: {
                        type: 'api',
                        endpoint: '/componentes?tipoComponente=TECHNICAL',
                        valueField: 'idComponente',
                        labelField: 'nomeComponente',
                    },
                    validation: {
                        required: true,
                        minSelected: 1,
                    },
                },
                {
                    id: 'infrastructureConfigs',
                    type: 'checkbox_group',
                    label: 'Configurações de Infraestrutura',
                    required: false,
                    options: [
                        { value: 'create-microfrontend', label: 'Criar Microfrontend' },
                        { value: 'configure-database', label: 'Configurar Banco de Dados' },
                        { value: 'configure-api-gateway', label: 'Configurar API Gateway' },
                    ],
                },
            ],
        },
        {
            id: 'automations',
            order: 4,
            label: 'Automatizações',
            title: 'Automatizações',
            description: 'Automatizações a executar',
            type: 'form',
            fields: [
                {
                    id: 'automations',
                    type: 'checkbox_group',
                    label: 'Automatizações',
                    helperText: 'Selecione as automatizações que devem ser executadas ao criar o componente',
                    required: false,
                    options: [
                        { value: 'create-git-repo', label: 'Criar repositório no Git' },
                        { value: 'create-ci-cd-pipeline', label: 'Criar pipeline CI/CD' },
                        { value: 'create-api-gateway-config', label: 'Criar configuração no API Gateway' },
                        { value: 'create-sso-realm', label: 'Criar Realm no SSO' },
                        { value: 'create-jira-cards', label: 'Criar cards no Jira' },
                    ],
                },
            ],
        },
        {
            id: 'summary',
            order: 5,
            label: 'Resumo',
            title: 'Resumo',
            description: 'Revise e confirme',
            type: 'summary',
            layout: [
                {
                    title: 'Tipo',
                    fields: ['tipoComponente'],
                },
                {
                    title: 'Informações Básicas',
                    fields: ['nomeComponente', 'valueStreamId', 'teamId', 'tags', 'descricao'],
                },
                {
                    title: 'Dependências Selecionadas',
                    groups: [
                        { title: 'Extensions', field: 'extensionComponents' },
                        { title: 'Technicals', field: 'technicalComponents' },
                    ],
                },
                {
                    title: 'Infraestrutura',
                    fields: ['infrastructureConfigs'],
                },
                {
                    title: 'Automatizações selecionadas',
                    fields: ['automations'],
                },
            ],
        },
    ],
};
//# sourceMappingURL=componentes.mocks.js.map