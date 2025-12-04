"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminController = void 0;
const dominios_mocks_1 = require("../mocks/dominios.mocks");
const subdominios_mocks_1 = require("../mocks/subdominios.mocks");
exports.adminController = {
    // GET /admin/dominios
    listarDominios: (req, res) => {
        const { pagina = 0, tamanho = 20 } = req.query;
        res.status(200).json({
            ...dominios_mocks_1.paginaDominiosMock,
            pagina: Number(pagina),
            tamanho: Number(tamanho),
        });
    },
    // POST /admin/dominios
    criarDominio: (req, res) => {
        const novoDominio = {
            idDominio: `dom-${Date.now()}`,
            ...req.body,
            ativo: true,
            timeResponsavelNome: 'Time Plataforma Componentes',
        };
        res.status(201).json(novoDominio);
    },
    // GET /admin/dominios/:dominioId
    obterDominio: (req, res) => {
        const { dominioId } = req.params;
        const dominio = dominios_mocks_1.dominiosDetalheMock.find((d) => d.idDominio === dominioId);
        if (dominio) {
            res.status(200).json(dominio);
        }
        else {
            res.status(200).json({ ...dominios_mocks_1.dominiosDetalheMock[0], idDominio: dominioId });
        }
    },
    // PATCH /admin/dominios/:dominioId
    atualizarDominio: (req, res) => {
        const { dominioId } = req.params;
        const dominio = dominios_mocks_1.dominiosDetalheMock.find((d) => d.idDominio === dominioId);
        const dominioAtualizado = {
            ...(dominio || dominios_mocks_1.dominiosDetalheMock[0]),
            ...req.body,
            idDominio: dominioId,
        };
        res.status(200).json(dominioAtualizado);
    },
    // DELETE /admin/dominios/:dominioId
    desativarDominio: (_req, res) => {
        res.status(204).send();
    },
    // POST /admin/dominios/:dominioId/ativar
    ativarDominio: (req, res) => {
        const { dominioId } = req.params;
        const dominio = dominios_mocks_1.dominiosDetalheMock.find((d) => d.idDominio === dominioId);
        res.status(200).json({
            ...(dominio || dominios_mocks_1.dominiosDetalheMock[0]),
            idDominio: dominioId,
            ativo: true,
        });
    },
    // GET /admin/dominios/:dominioId/responsaveis
    obterResponsaveis: (_req, res) => {
        res.status(200).json(dominios_mocks_1.responsaveisDominioMock);
    },
    // PUT /admin/dominios/:dominioId/responsaveis
    atualizarResponsaveis: (req, res) => {
        res.status(200).json({
            ...dominios_mocks_1.responsaveisDominioMock,
            ...req.body,
        });
    },
    // GET /admin/dominios/:dominioId/politicas
    obterPoliticas: (_req, res) => {
        res.status(200).json(dominios_mocks_1.politicasDominioMock);
    },
    // PUT /admin/dominios/:dominioId/politicas
    atualizarPoliticas: (req, res) => {
        res.status(200).json({
            ...dominios_mocks_1.politicasDominioMock,
            ...req.body,
        });
    },
    // GET /admin/dominios/:dominioId/subdominios
    listarSubdominios: (req, res) => {
        const { dominioId } = req.params;
        const subdominios = subdominios_mocks_1.subdominiosDetalheMock.filter((s) => s.dominioId === dominioId);
        res.status(200).json(subdominios.length > 0 ? subdominios : subdominios_mocks_1.subdominiosDetalheMock);
    },
    // POST /admin/dominios/:dominioId/subdominios
    criarSubdominio: (req, res) => {
        const { dominioId } = req.params;
        const novoSubdominio = {
            idSubdominio: `sub-${Date.now()}`,
            dominioId,
            ...req.body,
            ordemExibicao: subdominios_mocks_1.subdominiosMock.length + 1,
            ativo: true,
        };
        res.status(201).json(novoSubdominio);
    },
    // GET /admin/subdominios/:subdominioId
    obterSubdominio: (req, res) => {
        const { subdominioId } = req.params;
        const subdominio = subdominios_mocks_1.subdominiosDetalheMock.find((s) => s.idSubdominio === subdominioId);
        if (subdominio) {
            res.status(200).json(subdominio);
        }
        else {
            res.status(200).json({ ...subdominios_mocks_1.subdominiosDetalheMock[0], idSubdominio: subdominioId });
        }
    },
    // PATCH /admin/subdominios/:subdominioId
    atualizarSubdominio: (req, res) => {
        const { subdominioId } = req.params;
        const subdominio = subdominios_mocks_1.subdominiosDetalheMock.find((s) => s.idSubdominio === subdominioId);
        const subdominioAtualizado = {
            ...(subdominio || subdominios_mocks_1.subdominiosDetalheMock[0]),
            ...req.body,
            idSubdominio: subdominioId,
        };
        res.status(200).json(subdominioAtualizado);
    },
    // DELETE /admin/subdominios/:subdominioId
    desativarSubdominio: (_req, res) => {
        res.status(204).send();
    },
    // POST /admin/subdominios/:subdominioId/ativar
    ativarSubdominio: (req, res) => {
        const { subdominioId } = req.params;
        const subdominio = subdominios_mocks_1.subdominiosDetalheMock.find((s) => s.idSubdominio === subdominioId);
        res.status(200).json({
            ...(subdominio || subdominios_mocks_1.subdominiosDetalheMock[0]),
            idSubdominio: subdominioId,
            ativo: true,
        });
    },
    // PATCH /admin/dominios/:dominioId/subdominios/reordenar
    reordenarSubdominios: (_req, res) => {
        res.status(200).json({ mensagem: 'Ordem de subdomínios atualizada com sucesso' });
    },
    // GET /admin/dominios/:dominioId/estatisticas
    obterEstatisticas: (req, res) => {
        const { dominioId } = req.params;
        res.status(200).json({
            ...dominios_mocks_1.estatisticasDominioMock,
            dominioId,
        });
    },
};
//# sourceMappingURL=admin.controller.js.map