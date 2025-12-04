import { Router } from 'express';
import { adminController } from '../controllers/admin.controller';

const router = Router();

// === Domínios ===

// GET /admin/dominios
router.get('/dominios', adminController.listarDominios);

// POST /admin/dominios
router.post('/dominios', adminController.criarDominio);

// GET /admin/dominios/:dominioId
router.get('/dominios/:dominioId', adminController.obterDominio);

// PATCH /admin/dominios/:dominioId
router.patch('/dominios/:dominioId', adminController.atualizarDominio);

// DELETE /admin/dominios/:dominioId
router.delete('/dominios/:dominioId', adminController.desativarDominio);

// POST /admin/dominios/:dominioId/ativar
router.post('/dominios/:dominioId/ativar', adminController.ativarDominio);

// GET /admin/dominios/:dominioId/responsaveis
router.get('/dominios/:dominioId/responsaveis', adminController.obterResponsaveis);

// PUT /admin/dominios/:dominioId/responsaveis
router.put('/dominios/:dominioId/responsaveis', adminController.atualizarResponsaveis);

// GET /admin/dominios/:dominioId/politicas
router.get('/dominios/:dominioId/politicas', adminController.obterPoliticas);

// PUT /admin/dominios/:dominioId/politicas
router.put('/dominios/:dominioId/politicas', adminController.atualizarPoliticas);

// GET /admin/dominios/:dominioId/subdominios
router.get('/dominios/:dominioId/subdominios', adminController.listarSubdominios);

// POST /admin/dominios/:dominioId/subdominios
router.post('/dominios/:dominioId/subdominios', adminController.criarSubdominio);

// PATCH /admin/dominios/:dominioId/subdominios/reordenar
router.patch('/dominios/:dominioId/subdominios/reordenar', adminController.reordenarSubdominios);

// GET /admin/dominios/:dominioId/estatisticas
router.get('/dominios/:dominioId/estatisticas', adminController.obterEstatisticas);

// === Subdomínios ===

// GET /admin/subdominios/:subdominioId
router.get('/subdominios/:subdominioId', adminController.obterSubdominio);

// PATCH /admin/subdominios/:subdominioId
router.patch('/subdominios/:subdominioId', adminController.atualizarSubdominio);

// DELETE /admin/subdominios/:subdominioId
router.delete('/subdominios/:subdominioId', adminController.desativarSubdominio);

// POST /admin/subdominios/:subdominioId/ativar
router.post('/subdominios/:subdominioId/ativar', adminController.ativarSubdominio);

export default router;

