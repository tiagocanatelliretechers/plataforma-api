import { Router } from 'express';
import { assistentesController } from '../controllers/assistentes.controller';

const router = Router();

// POST /assistentes/componentes
router.post('/componentes', assistentesController.iniciarAssistente);

// GET /assistentes/componentes/:rascunhoId
router.get('/componentes/:rascunhoId', assistentesController.obterAssistente);

// PATCH /assistentes/componentes/:rascunhoId/metadados
router.patch('/componentes/:rascunhoId/metadados', assistentesController.atualizarMetadados);

// PATCH /assistentes/componentes/:rascunhoId/versao
router.patch('/componentes/:rascunhoId/versao', assistentesController.atualizarVersao);

// PATCH /assistentes/componentes/:rascunhoId/itens-configuracao
router.patch(
  '/componentes/:rascunhoId/itens-configuracao',
  assistentesController.atualizarItensConfiguracao
);

// PATCH /assistentes/componentes/:rascunhoId/dependencias
router.patch('/componentes/:rascunhoId/dependencias', assistentesController.atualizarDependencias);

// PATCH /assistentes/componentes/:rascunhoId/responsaveis
router.patch('/componentes/:rascunhoId/responsaveis', assistentesController.atualizarResponsaveis);

// PATCH /assistentes/componentes/:rascunhoId/qualidade
router.patch('/componentes/:rascunhoId/qualidade', assistentesController.atualizarQualidade);

// POST /assistentes/componentes/:rascunhoId/enviar
router.post('/componentes/:rascunhoId/enviar', assistentesController.enviarAssistente);

export default router;

