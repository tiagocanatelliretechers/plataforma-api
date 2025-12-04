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
        .send({ login: 'joao.silva', senha: 'senha-segura-123' });
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('tokenAcesso');
      expect(response.body).toHaveProperty('tipoToken', 'Bearer');
      expect(response.body).toHaveProperty('expiraEm');
    });
  });

  describe('Usuários', () => {
    it('GET /usuarios/me deve retornar o usuário autenticado', async () => {
      const response = await request(app).get('/usuarios/me');
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('idUsuario');
      expect(response.body).toHaveProperty('login');
      expect(response.body).toHaveProperty('email');
    });

    it('GET /usuarios deve retornar lista paginada de usuários', async () => {
      const response = await request(app).get('/usuarios');
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('conteudo');
      expect(response.body).toHaveProperty('pagina');
      expect(response.body).toHaveProperty('tamanho');
      expect(response.body).toHaveProperty('totalElementos');
      expect(response.body).toHaveProperty('totalPaginas');
      expect(Array.isArray(response.body.conteudo)).toBe(true);
    });
  });

  describe('Componentes', () => {
    it('GET /componentes deve retornar lista paginada de componentes', async () => {
      const response = await request(app).get('/componentes');
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('conteudo');
      expect(response.body).toHaveProperty('pagina');
      expect(Array.isArray(response.body.conteudo)).toBe(true);
    });

    it('GET /componentes/estatisticas deve retornar estatísticas', async () => {
      const response = await request(app).get('/componentes/estatisticas');
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('totalComponentes');
      expect(response.body).toHaveProperty('totalDominios');
    });

    it('GET /componentes/:componenteId deve retornar detalhes do componente', async () => {
      const response = await request(app).get('/componentes/cmp-123');
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('idComponente');
      expect(response.body).toHaveProperty('nomeComponente');
      expect(response.body).toHaveProperty('tipoComponente');
    });
  });

  describe('Domínios', () => {
    it('GET /dominios deve retornar lista de domínios', async () => {
      const response = await request(app).get('/dominios');
      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
      expect(response.body.length).toBeGreaterThan(0);
    });
  });

  describe('Times', () => {
    it('GET /times deve retornar lista de times', async () => {
      const response = await request(app).get('/times');
      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
    });
  });

  describe('Notificações', () => {
    it('GET /notificacoes deve retornar lista de notificações', async () => {
      const response = await request(app).get('/notificacoes');
      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
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

