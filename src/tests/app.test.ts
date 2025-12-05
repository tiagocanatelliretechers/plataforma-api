import request from 'supertest';
import app from '../app';

describe('Plataforma de Componentes API - Testes Básicos', () => {
  describe('Health Check', () => {
    it('GET /health deve retornar status 200 e status ok', async () => {
      const response = await request(app).get('/health');
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('status', 'ok');
      expect(response.body).toHaveProperty('timestamp');
    });
  });

  describe('OpenAPI', () => {
    it('GET /openapi.json deve retornar o documento OpenAPI', async () => {
      const response = await request(app).get('/openapi.json');
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('openapi');
      expect(response.body).toHaveProperty('info');
      expect(response.body.info).toHaveProperty('title');
    });
  });

  describe('Autenticação', () => {
    it('POST /autenticacao/token deve retornar um token', async () => {
      const response = await request(app)
        .post('/autenticacao/token')
        .send({ login: 'joao.silva', senha: 'Senha@Forte123' });
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('tokenAcesso');
      expect(response.body).toHaveProperty('tipoToken', 'Bearer');
      expect(response.body).toHaveProperty('expiraEm');
    });
  });

  describe('UI - Layout', () => {
    it('GET /ui/layout deve retornar contexto da área logada', async () => {
      const response = await request(app).get('/ui/layout');
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('app');
      expect(response.body).toHaveProperty('usuario');
      expect(response.body).toHaveProperty('menu');
      expect(Array.isArray(response.body.menu)).toBe(true);
    });
  });

  describe('UI - Dashboard', () => {
    it('GET /ui/dashboard deve retornar dados do dashboard', async () => {
      const response = await request(app).get('/ui/dashboard');
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('paginaId');
      expect(response.body).toHaveProperty('titulo');
      expect(response.body).toHaveProperty('cardsResumo');
      expect(response.body).toHaveProperty('graficoComponentesCriados');
      expect(response.body).toHaveProperty('eventosRecentes');
      expect(response.body).toHaveProperty('statusIntegracoes');
    });
  });

  describe('UI - Usuários', () => {
    it('GET /ui/usuarios/lista deve retornar configuração e dados da lista', async () => {
      const response = await request(app).get('/ui/usuarios/lista');
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('paginaId');
      expect(response.body).toHaveProperty('titulo');
      expect(response.body).toHaveProperty('filtros');
      expect(response.body).toHaveProperty('colunas');
      expect(response.body).toHaveProperty('acoesLinha');
      expect(response.body).toHaveProperty('acoesPagina');
      expect(response.body).toHaveProperty('paginacao');
      expect(response.body).toHaveProperty('linhas');
    });

    it('GET /ui/usuarios/form-criacao deve retornar configuração do form', async () => {
      const response = await request(app).get('/ui/usuarios/form-criacao');
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('formId');
      expect(response.body).toHaveProperty('titulo');
      expect(response.body).toHaveProperty('modo', 'CRIACAO');
      expect(response.body).toHaveProperty('campos');
      expect(response.body).toHaveProperty('submit');
    });

    it('GET /ui/usuarios/:usuarioId/form-edicao deve retornar form com valores', async () => {
      const response = await request(app).get('/ui/usuarios/usr-0001/form-edicao');
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('formId');
      expect(response.body).toHaveProperty('modo', 'EDICAO');
      expect(response.body).toHaveProperty('valoresIniciais');
      expect(response.body.valoresIniciais).toHaveProperty('login');
    });
  });

  describe('UI - Componentes', () => {
    it('GET /ui/componentes/lista deve retornar configuração e dados da lista', async () => {
      const response = await request(app).get('/ui/componentes/lista');
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('paginaId');
      expect(response.body).toHaveProperty('titulo');
      expect(response.body).toHaveProperty('filtros');
      expect(response.body).toHaveProperty('colunas');
      expect(response.body).toHaveProperty('linhas');
    });

    it('GET /ui/componentes/form-criacao deve retornar wizard completo', async () => {
      const response = await request(app).get('/ui/componentes/form-criacao');
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('formId');
      expect(response.body).toHaveProperty('title');
      expect(response.body).toHaveProperty('steps');
      expect(Array.isArray(response.body.steps)).toBe(true);
      expect(response.body.steps.length).toBeGreaterThan(0);
    });
  });

  describe('Usuários - CRUD', () => {
    it('GET /usuarios deve retornar lista paginada', async () => {
      const response = await request(app).get('/usuarios');
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('conteudo');
      expect(response.body).toHaveProperty('pagina');
      expect(response.body).toHaveProperty('tamanho');
      expect(response.body).toHaveProperty('totalElementos');
    });

    it('POST /usuarios deve criar usuário', async () => {
      const response = await request(app).post('/usuarios').send({
        login: 'novo.usuario',
        nomeExibicao: 'Novo Usuário',
        email: 'novo@porto.com.br',
        ativo: true,
      });
      expect(response.status).toBe(201);
      expect(response.body).toHaveProperty('idUsuario');
      expect(response.body).toHaveProperty('login', 'novo.usuario');
    });

    it('GET /usuarios/:usuarioId deve retornar detalhes', async () => {
      const response = await request(app).get('/usuarios/usr-0001');
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('idUsuario');
      expect(response.body).toHaveProperty('login');
    });

    it('PATCH /usuarios/:usuarioId deve atualizar usuário', async () => {
      const response = await request(app).patch('/usuarios/usr-0001').send({
        nomeExibicao: 'Nome Atualizado',
      });
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('nomeExibicao', 'Nome Atualizado');
    });
  });

  describe('Componentes - CRUD', () => {
    it('GET /componentes deve retornar lista paginada', async () => {
      const response = await request(app).get('/componentes');
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('conteudo');
      expect(response.body).toHaveProperty('pagina');
    });

    it('POST /componentes deve criar componente', async () => {
      const response = await request(app).post('/componentes').send({
        tipoComponente: 'business',
        nomeComponente: 'Novo Componente Teste',
        descricao: 'Descrição do componente de teste',
        tags: ['teste', 'novo'],
      });
      expect(response.status).toBe(201);
      expect(response.body).toHaveProperty('idComponente');
      expect(response.body).toHaveProperty('nomeComponente');
      expect(response.body).toHaveProperty('estadoCicloVida', 'EM_DESENVOLVIMENTO');
    });
  });

  describe('404 Handler', () => {
    it('Rota inexistente deve retornar 404', async () => {
      const response = await request(app).get('/rota-inexistente');
      expect(response.status).toBe(404);
      expect(response.body).toHaveProperty('error');
    });
  });
});
