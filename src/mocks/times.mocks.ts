import { usuariosMock } from './usuarios.mocks';

export const timesMock = [
  {
    idTime: 'time-plataforma',
    nomeTime: 'Time Plataforma Componentes',
    descricaoTime: 'Time responsável pela plataforma de componentes.',
  },
  {
    idTime: 'time-dom-pagamentos',
    nomeTime: 'Domínio Pagamentos',
    descricaoTime: 'Time responsável pelo domínio de pagamentos.',
  },
  {
    idTime: 'time-dom-veiculos',
    nomeTime: 'Domínio Veículos',
    descricaoTime: 'Time responsável pelo domínio de veículos.',
  },
];

export const timesDetalheMock = timesMock.map((t) => ({
  ...t,
  membros: usuariosMock.slice(0, 2),
}));

