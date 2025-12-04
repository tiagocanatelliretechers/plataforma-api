"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const admin_controller_1 = require("../controllers/admin.controller");
const router = (0, express_1.Router)();
// === Domínios ===
// GET /admin/dominios
router.get('/dominios', admin_controller_1.adminController.listarDominios);
// POST /admin/dominios
router.post('/dominios', admin_controller_1.adminController.criarDominio);
// GET /admin/dominios/:dominioId
router.get('/dominios/:dominioId', admin_controller_1.adminController.obterDominio);
// PATCH /admin/dominios/:dominioId
router.patch('/dominios/:dominioId', admin_controller_1.adminController.atualizarDominio);
// DELETE /admin/dominios/:dominioId
router.delete('/dominios/:dominioId', admin_controller_1.adminController.desativarDominio);
// POST /admin/dominios/:dominioId/ativar
router.post('/dominios/:dominioId/ativar', admin_controller_1.adminController.ativarDominio);
// GET /admin/dominios/:dominioId/responsaveis
router.get('/dominios/:dominioId/responsaveis', admin_controller_1.adminController.obterResponsaveis);
// PUT /admin/dominios/:dominioId/responsaveis
router.put('/dominios/:dominioId/responsaveis', admin_controller_1.adminController.atualizarResponsaveis);
// GET /admin/dominios/:dominioId/politicas
router.get('/dominios/:dominioId/politicas', admin_controller_1.adminController.obterPoliticas);
// PUT /admin/dominios/:dominioId/politicas
router.put('/dominios/:dominioId/politicas', admin_controller_1.adminController.atualizarPoliticas);
// GET /admin/dominios/:dominioId/subdominios
router.get('/dominios/:dominioId/subdominios', admin_controller_1.adminController.listarSubdominios);
// POST /admin/dominios/:dominioId/subdominios
router.post('/dominios/:dominioId/subdominios', admin_controller_1.adminController.criarSubdominio);
// PATCH /admin/dominios/:dominioId/subdominios/reordenar
router.patch('/dominios/:dominioId/subdominios/reordenar', admin_controller_1.adminController.reordenarSubdominios);
// GET /admin/dominios/:dominioId/estatisticas
router.get('/dominios/:dominioId/estatisticas', admin_controller_1.adminController.obterEstatisticas);
// === Subdomínios ===
// GET /admin/subdominios/:subdominioId
router.get('/subdominios/:subdominioId', admin_controller_1.adminController.obterSubdominio);
// PATCH /admin/subdominios/:subdominioId
router.patch('/subdominios/:subdominioId', admin_controller_1.adminController.atualizarSubdominio);
// DELETE /admin/subdominios/:subdominioId
router.delete('/subdominios/:subdominioId', admin_controller_1.adminController.desativarSubdominio);
// POST /admin/subdominios/:subdominioId/ativar
router.post('/subdominios/:subdominioId/ativar', admin_controller_1.adminController.ativarSubdominio);
exports.default = router;
//# sourceMappingURL=admin.routes.js.map