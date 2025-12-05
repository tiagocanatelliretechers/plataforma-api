import { Router } from 'express';
import { uiController } from '../controllers/ui.controller';

const router = Router();

// GET /ui/layout
router.get('/layout', uiController.getLayout);

// GET /ui/dashboard
router.get('/dashboard', uiController.getDashboard);

// GET /ui/usuarios/lista
router.get('/usuarios/lista', uiController.getUsuariosLista);

// GET /ui/usuarios/form-criacao
router.get('/usuarios/form-criacao', uiController.getUsuariosFormCriacao);

// GET /ui/usuarios/:usuarioId/form-edicao
router.get('/usuarios/:usuarioId/form-edicao', uiController.getUsuariosFormEdicao);

// GET /ui/componentes/lista
router.get('/componentes/lista', uiController.getComponentesLista);

// GET /ui/componentes/form-criacao
router.get('/componentes/form-criacao', uiController.getComponentesFormCriacao);

export default router;

