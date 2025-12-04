"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.timesController = void 0;
const times_mocks_1 = require("../mocks/times.mocks");
const usuarios_mocks_1 = require("../mocks/usuarios.mocks");
exports.timesController = {
    // GET /times
    listarTimes: (_req, res) => {
        res.status(200).json(times_mocks_1.timesMock);
    },
    // POST /times
    criarTime: (req, res) => {
        const novoTime = {
            idTime: `time-${Date.now()}`,
            ...req.body,
            membros: [],
        };
        res.status(201).json(novoTime);
    },
    // GET /times/:timeId
    obterTime: (req, res) => {
        const { timeId } = req.params;
        const time = times_mocks_1.timesDetalheMock.find((t) => t.idTime === timeId);
        if (time) {
            res.status(200).json(time);
        }
        else {
            res.status(200).json({ ...times_mocks_1.timesDetalheMock[0], idTime: timeId });
        }
    },
    // PATCH /times/:timeId
    atualizarTime: (req, res) => {
        const { timeId } = req.params;
        const time = times_mocks_1.timesDetalheMock.find((t) => t.idTime === timeId);
        const timeAtualizado = {
            ...(time || times_mocks_1.timesDetalheMock[0]),
            ...req.body,
            idTime: timeId,
        };
        res.status(200).json(timeAtualizado);
    },
    // GET /times/:timeId/membros
    listarMembrosTime: (_req, res) => {
        res.status(200).json(usuarios_mocks_1.usuariosMock);
    },
    // POST /times/:timeId/membros
    adicionarMembroTime: (_req, res) => {
        res.status(201).send();
    },
    // DELETE /times/:timeId/membros
    removerMembroTime: (_req, res) => {
        res.status(204).send();
    },
};
//# sourceMappingURL=times.controller.js.map