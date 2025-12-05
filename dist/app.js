"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_1 = require("./config/swagger");
// Routes
const autenticacao_routes_1 = __importDefault(require("./routes/autenticacao.routes"));
const ui_routes_1 = __importDefault(require("./routes/ui.routes"));
const usuarios_routes_1 = __importDefault(require("./routes/usuarios.routes"));
const componentes_routes_1 = __importDefault(require("./routes/componentes.routes"));
const app = (0, express_1.default)();
// Middlewares
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// Swagger UI
app.use('/docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_1.openApiDocument));
// OpenAPI JSON endpoint
app.get('/openapi.json', (_req, res) => {
    res.json(swagger_1.openApiDocument);
});
// Health check
app.get('/health', (_req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
});
// API Routes
app.use('/autenticacao', autenticacao_routes_1.default);
app.use('/ui', ui_routes_1.default);
app.use('/usuarios', usuarios_routes_1.default);
app.use('/componentes', componentes_routes_1.default);
// 404 handler
app.use((_req, res) => {
    res.status(404).json({ error: 'Rota não encontrada' });
});
// Error handler
app.use((err, _req, res, _next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Erro interno do servidor' });
});
exports.default = app;
//# sourceMappingURL=app.js.map