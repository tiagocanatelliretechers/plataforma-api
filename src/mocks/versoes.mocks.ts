import { itensConfiguracaoResumoMock } from './itens-configuracao.mocks';
import { componentesResumoMock } from './componentes.mocks';

export const versoesResumoMock = [
  {
    idVersaoComponente: 'ver-001',
    versao: '1.0.0',
    descricaoAlteracoes: 'Versão inicial do componente.',
    estadoCicloVida: 'EM_PRODUCAO',
    dataCriacao: '2024-01-15T10:30:00Z',
  },
  {
    idVersaoComponente: 'ver-002',
    versao: '1.1.0',
    descricaoAlteracoes: 'Inclusão de novos campos na API e melhoria de performance.',
    estadoCicloVida: 'EM_HOMOLOGACAO',
    dataCriacao: '2024-02-20T14:45:00Z',
  },
  {
    idVersaoComponente: 'ver-003',
    versao: '0.9.0',
    descricaoAlteracoes: 'Versão beta para testes.',
    estadoCicloVida: 'EM_DESENVOLVIMENTO',
    dataCriacao: '2024-03-01T09:00:00Z',
  },
];

export const versoesDetalheMock = versoesResumoMock.map((v) => ({
  ...v,
  atributosQualidade: {
    disponibilidade: '99.9',
    tempoRespostaMs: '500',
  },
  itensConfiguracao: itensConfiguracaoResumoMock.slice(0, 2),
  dependencias: componentesResumoMock.slice(0, 1),
}));

export const estadoCicloVidaDetalheMock = {
  estado: 'EM_PRODUCAO',
  alteradoPor: {
    idUsuario: 'usr-001',
    login: 'joao.silva',
    nomeExibicao: 'João da Silva',
    email: 'joao.silva@empresa.com',
    ativo: true,
  },
  dataAlteracao: '2024-03-20T14:45:00Z',
  comentario: 'Testes concluídos, liberando para produção.',
};

