import { Router } from 'express';
import { perfisAcessoController } from '../controllers/perfis-acesso.controller';

const router = Router();

// GET /perfis-acesso
router.get('/', perfisAcessoController.listarPerfisAcesso);

// POST /perfis-acesso
router.post('/', perfisAcessoController.criarPerfilAcesso);

// GET /perfis-acesso/:perfilId
router.get('/:perfilId', perfisAcessoController.obterPerfilAcesso);

// PATCH /perfis-acesso/:perfilId
router.patch('/:perfilId', perfisAcessoController.atualizarPerfilAcesso);

export default router;

