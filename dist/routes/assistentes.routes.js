"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const assistentes_controller_1 = require("../controllers/assistentes.controller");
const router = (0, express_1.Router)();
// POST /assistentes/componentes
router.post('/componentes', assistentes_controller_1.assistentesController.iniciarAssistente);
// GET /assistentes/componentes/:rascunhoId
router.get('/componentes/:rascunhoId', assistentes_controller_1.assistentesController.obterAssistente);
// PATCH /assistentes/componentes/:rascunhoId/metadados
router.patch('/componentes/:rascunhoId/metadados', assistentes_controller_1.assistentesController.atualizarMetadados);
// PATCH /assistentes/componentes/:rascunhoId/versao
router.patch('/componentes/:rascunhoId/versao', assistentes_controller_1.assistentesController.atualizarVersao);
// PATCH /assistentes/componentes/:rascunhoId/itens-configuracao
router.patch('/componentes/:rascunhoId/itens-configuracao', assistentes_controller_1.assistentesController.atualizarItensConfiguracao);
// PATCH /assistentes/componentes/:rascunhoId/dependencias
router.patch('/componentes/:rascunhoId/dependencias', assistentes_controller_1.assistentesController.atualizarDependencias);
// PATCH /assistentes/componentes/:rascunhoId/responsaveis
router.patch('/componentes/:rascunhoId/responsaveis', assistentes_controller_1.assistentesController.atualizarResponsaveis);
// PATCH /assistentes/componentes/:rascunhoId/qualidade
router.patch('/componentes/:rascunhoId/qualidade', assistentes_controller_1.assistentesController.atualizarQualidade);
// POST /assistentes/componentes/:rascunhoId/enviar
router.post('/componentes/:rascunhoId/enviar', assistentes_controller_1.assistentesController.enviarAssistente);
exports.default = router;
//# sourceMappingURL=assistentes.routes.js.map