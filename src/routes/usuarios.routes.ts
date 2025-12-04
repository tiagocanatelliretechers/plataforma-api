import { Router } from 'express';
import { usuariosController } from '../controllers/usuarios.controller';

const router = Router();

// GET /usuarios/me
router.get('/me', usuariosController.obterUsuarioAutenticado);

// GET /usuarios
router.get('/', usuariosController.listarUsuarios);

// POST /usuarios
router.post('/', usuariosController.criarUsuario);

// GET /usuarios/:usuarioId
router.get('/:usuarioId', usuariosController.obterUsuario);

// PATCH /usuarios/:usuarioId
router.patch('/:usuarioId', usuariosController.atualizarUsuario);

// POST /usuarios/:usuarioId/ativar
router.post('/:usuarioId/ativar', usuariosController.ativarUsuario);

// GET /usuarios/:usuarioId/papeis
router.get('/:usuarioId/papeis', usuariosController.listarPapeisUsuario);

// PUT /usuarios/:usuarioId/papeis
router.put('/:usuarioId/papeis', usuariosController.substituirPapeisUsuario);

// GET /usuarios/:usuarioId/times
router.get('/:usuarioId/times', usuariosController.listarTimesUsuario);

// PUT /usuarios/:usuarioId/times
router.put('/:usuarioId/times', usuariosController.substituirTimesUsuario);

export default router;

