"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.timesDetalheMock = exports.timesMock = void 0;
const usuarios_mocks_1 = require("./usuarios.mocks");
exports.timesMock = [
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
exports.timesDetalheMock = exports.timesMock.map((t) => ({
    ...t,
    membros: usuarios_mocks_1.usuariosMock.slice(0, 2),
}));
//# sourceMappingURL=times.mocks.js.map