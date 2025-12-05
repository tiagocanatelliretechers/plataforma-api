import { Router } from 'express';
import { usuariosController } from '../controllers/usuarios.controller';

const router = Router();

// GET /usuarios
router.get('/', usuariosController.listarUsuarios);

// POST /usuarios
router.post('/', usuariosController.criarUsuario);

// GET /usuarios/:usuarioId
router.get('/:usuarioId', usuariosController.obterUsuario);

// PATCH /usuarios/:usuarioId
router.patch('/:usuarioId', usuariosController.atualizarUsuario);

export default router;
