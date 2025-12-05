import express, { Application, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import { openApiDocument } from './config/swagger';

// Routes
import autenticacaoRoutes from './routes/autenticacao.routes';
import uiRoutes from './routes/ui.routes';
import usuariosRoutes from './routes/usuarios.routes';
import componentesRoutes from './routes/componentes.routes';

const app: Application = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Swagger UI
app.use('/docs', swaggerUi.serve, swaggerUi.setup(openApiDocument));

// OpenAPI JSON endpoint
app.get('/openapi.json', (_req: Request, res: Response) => {
  res.json(openApiDocument);
});

// Health check
app.get('/health', (_req: Request, res: Response) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// API Routes
app.use('/autenticacao', autenticacaoRoutes);
app.use('/ui', uiRoutes);
app.use('/usuarios', usuariosRoutes);
app.use('/componentes', componentesRoutes);

// 404 handler
app.use((_req: Request, res: Response) => {
  res.status(404).json({ error: 'Rota não encontrada' });
});

// Error handler
app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Erro interno do servidor' });
});

export default app;
