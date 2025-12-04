"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dominiosController = void 0;
const dominios_mocks_1 = require("../mocks/dominios.mocks");
const subdominios_mocks_1 = require("../mocks/subdominios.mocks");
exports.dominiosController = {
    // GET /dominios
    listarDominios: (_req, res) => {
        res.status(200).json(dominios_mocks_1.dominiosMock);
    },
    // GET /dominios/:dominioId/subdominios
    listarSubdominios: (req, res) => {
        const { dominioId } = req.params;
        const subdominios = subdominios_mocks_1.subdominiosMock.filter((s) => s.dominioId === dominioId);
        res.status(200).json(subdominios.length > 0 ? subdominios : subdominios_mocks_1.subdominiosMock);
    },
};
//# sourceMappingURL=dominios.controller.js.map