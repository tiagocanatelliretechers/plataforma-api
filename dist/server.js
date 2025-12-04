"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const env_1 = require("./config/env");
const { port } = env_1.config;
app_1.default.listen(port, () => {
    console.log(`
╔═══════════════════════════════════════════════════════════════╗
║   Plataforma de Componentes API - Mock Server                 ║
╠═══════════════════════════════════════════════════════════════╣
║                                                               ║
║   🚀 Servidor rodando em: http://localhost:${port}              ║
║   📚 Documentação:        http://localhost:${port}/docs         ║
║   📄 OpenAPI JSON:        http://localhost:${port}/openapi.json ║
║   ❤️  Health Check:        http://localhost:${port}/health      ║
║                                                               ║
╚═══════════════════════════════════════════════════════════════╝
  `);
});
//# sourceMappingURL=server.js.map