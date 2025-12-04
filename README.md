# Plataforma de Componentes API - Mock Server

API mocada da Plataforma de Componentes + Backoffice, implementada em Node.js + TypeScript com Express.

## 🚀 Início Rápido

### Pré-requisitos

- Node.js (v18 ou superior)
- npm ou yarn

### Instalação

```bash
# Instalar dependências
npm install

# Rodar em modo desenvolvimento
npm run dev
```

### Scripts Disponíveis

| Script | Descrição |
|--------|-----------|
| `npm run dev` | Inicia o servidor em modo desenvolvimento com hot-reload |
| `npm run build` | Compila o TypeScript para JavaScript |
| `npm start` | Inicia o servidor em modo produção (requer build) |
| `npm test` | Executa os testes com Jest |
| `npm run lint` | Verifica problemas de linting |
| `npm run lint:fix` | Corrige problemas de linting automaticamente |
| `npm run format` | Formata o código com Prettier |

## 📚 Documentação

Após iniciar o servidor, acesse:

| Recurso | URL |
|---------|-----|
| **Swagger UI** | http://localhost:3000/docs |
| **OpenAPI JSON** | http://localhost:3000/openapi.json |
| **Health Check** | http://localhost:3000/health |

## 📁 Estrutura do Projeto

```
src/
├── config/
│   ├── env.ts           # Configurações de ambiente
│   └── swagger.ts       # Carregamento do OpenAPI YAML
├── controllers/
│   ├── admin.controller.ts
│   ├── assistentes.controller.ts
│   ├── autenticacao.controller.ts
│   ├── componentes.controller.ts
│   ├── dominios.controller.ts
│   ├── governanca.controller.ts
│   ├── itens-configuracao.controller.ts
│   ├── notificacoes.controller.ts
│   ├── perfis-acesso.controller.ts
│   ├── permissoes.controller.ts
│   ├── times.controller.ts
│   └── usuarios.controller.ts
├── mocks/
│   ├── assistentes.mocks.ts
│   ├── autenticacao.mocks.ts
│   ├── componentes.mocks.ts
│   ├── dominios.mocks.ts
│   ├── governanca.mocks.ts
│   ├── itens-configuracao.mocks.ts
│   ├── notificacoes.mocks.ts
│   ├── perfis-acesso.mocks.ts
│   ├── subdominios.mocks.ts
│   ├── times.mocks.ts
│   ├── usuarios.mocks.ts
│   └── versoes.mocks.ts
├── routes/
│   ├── admin.routes.ts
│   ├── assistentes.routes.ts
│   ├── autenticacao.routes.ts
│   ├── componentes.routes.ts
│   ├── dominios.routes.ts
│   ├── governanca.routes.ts
│   ├── itens-configuracao.routes.ts
│   ├── notificacoes.routes.ts
│   ├── perfis-acesso.routes.ts
│   ├── permissoes.routes.ts
│   ├── times.routes.ts
│   └── usuarios.routes.ts
├── tests/
│   └── app.test.ts
├── app.ts               # Configuração do Express
└── server.ts            # Ponto de entrada
```

## 🔌 Endpoints Disponíveis

### Autenticação
- `POST /autenticacao/token` - Gera token de autenticação

### Usuários
- `GET /usuarios/me` - Dados do usuário autenticado
- `GET /usuarios` - Lista usuários (paginado)
- `POST /usuarios` - Cria usuário
- `GET /usuarios/:usuarioId` - Detalha usuário
- `PATCH /usuarios/:usuarioId` - Atualiza usuário
- `POST /usuarios/:usuarioId/ativar` - Reativa usuário
- `GET /usuarios/:usuarioId/papeis` - Lista perfis de acesso
- `PUT /usuarios/:usuarioId/papeis` - Substitui perfis
- `GET /usuarios/:usuarioId/times` - Lista times
- `PUT /usuarios/:usuarioId/times` - Substitui times

### Times
- `GET /times` - Lista times
- `POST /times` - Cria time
- `GET /times/:timeId` - Detalha time
- `PATCH /times/:timeId` - Atualiza time
- `GET /times/:timeId/membros` - Lista membros
- `POST /times/:timeId/membros` - Adiciona membro
- `DELETE /times/:timeId/membros` - Remove membro

### Perfis de Acesso
- `GET /perfis-acesso` - Lista perfis
- `POST /perfis-acesso` - Cria perfil
- `GET /perfis-acesso/:perfilId` - Detalha perfil
- `PATCH /perfis-acesso/:perfilId` - Atualiza perfil

### Permissões
- `GET /permissoes` - Lista permissões

### Componentes
- `GET /componentes` - Lista componentes (paginado)
- `POST /componentes` - Cria componente
- `GET /componentes/recentes` - Componentes recentes
- `GET /componentes/estatisticas` - Estatísticas
- `GET /componentes/:componenteId` - Detalha componente
- `PATCH /componentes/:componenteId` - Atualiza componente
- `GET /componentes/:componenteId/versoes` - Lista versões
- `POST /componentes/:componenteId/versoes` - Cria versão
- `GET /componentes/:componenteId/versoes/:versaoId` - Detalha versão
- `PATCH /componentes/:componenteId/versoes/:versaoId` - Atualiza versão
- `POST /componentes/:componenteId/versoes/:versaoId/ciclo-vida/transicoes` - Transição de ciclo de vida
- `GET /componentes/:componenteId/itens-configuracao` - Lista ICs
- `GET /componentes/:componenteId/dependencias` - Lista dependências
- `GET /componentes/:componenteId/auditoria` - Auditoria

### Itens de Configuração
- `GET /itens-configuracao` - Lista ICs
- `POST /itens-configuracao` - Cria IC
- `GET /itens-configuracao/:itemConfiguracaoId` - Detalha IC
- `PATCH /itens-configuracao/:itemConfiguracaoId` - Atualiza IC

### Assistente de Componentes
- `POST /assistentes/componentes` - Inicia assistente
- `GET /assistentes/componentes/:rascunhoId` - Consulta estado
- `PATCH /assistentes/componentes/:rascunhoId/metadados` - Etapa metadados
- `PATCH /assistentes/componentes/:rascunhoId/versao` - Etapa versão
- `PATCH /assistentes/componentes/:rascunhoId/itens-configuracao` - Etapa ICs
- `PATCH /assistentes/componentes/:rascunhoId/dependencias` - Etapa dependências
- `PATCH /assistentes/componentes/:rascunhoId/responsaveis` - Etapa responsáveis
- `PATCH /assistentes/componentes/:rascunhoId/qualidade` - Etapa qualidade
- `POST /assistentes/componentes/:rascunhoId/enviar` - Finaliza assistente

### Domínios
- `GET /dominios` - Lista domínios
- `GET /dominios/:dominioId/subdominios` - Lista subdomínios

### Governança
- `GET /governanca/solicitacoes-aprovacao` - Lista solicitações pendentes
- `POST /governanca/solicitacoes-aprovacao/:solicitacaoId/decisao` - Registra decisão

### Notificações
- `GET /notificacoes` - Lista notificações

### Admin - Domínios
- `GET /admin/dominios` - Lista domínios (paginado)
- `POST /admin/dominios` - Cria domínio
- `GET /admin/dominios/:dominioId` - Detalha domínio
- `PATCH /admin/dominios/:dominioId` - Atualiza domínio
- `DELETE /admin/dominios/:dominioId` - Desativa domínio
- `POST /admin/dominios/:dominioId/ativar` - Reativa domínio
- `GET /admin/dominios/:dominioId/responsaveis` - Consulta responsáveis
- `PUT /admin/dominios/:dominioId/responsaveis` - Atualiza responsáveis
- `GET /admin/dominios/:dominioId/politicas` - Consulta políticas
- `PUT /admin/dominios/:dominioId/politicas` - Atualiza políticas
- `GET /admin/dominios/:dominioId/subdominios` - Lista subdomínios
- `POST /admin/dominios/:dominioId/subdominios` - Cria subdomínio
- `PATCH /admin/dominios/:dominioId/subdominios/reordenar` - Reordena subdomínios
- `GET /admin/dominios/:dominioId/estatisticas` - Estatísticas

### Admin - Subdomínios
- `GET /admin/subdominios/:subdominioId` - Detalha subdomínio
- `PATCH /admin/subdominios/:subdominioId` - Atualiza subdomínio
- `DELETE /admin/subdominios/:subdominioId` - Desativa subdomínio
- `POST /admin/subdominios/:subdominioId/ativar` - Reativa subdomínio

## 🔧 Como Alterar/Atualizar os Mocks

Os dados mocados estão localizados em `src/mocks/`. Cada arquivo contém objetos que simulam as respostas da API:

1. **Editar dados existentes**: Modifique os objetos nos arquivos de mock correspondentes
2. **Adicionar novos itens**: Adicione novos objetos aos arrays existentes
3. **Alterar estrutura**: Certifique-se de seguir os schemas definidos no `apis-portal.yaml`

### Exemplo de alteração de mock:

```typescript
// src/mocks/usuarios.mocks.ts
export const usuariosMock = [
  {
    idUsuario: 'usr-001',
    login: 'joao.silva',
    nomeExibicao: 'João da Silva', // Altere aqui
    email: 'joao.silva@empresa.com',
    ativo: true,
  },
  // Adicione novos usuários aqui
];
```

## 📋 Contrato OpenAPI

O contrato da API está definido no arquivo `apis-portal.yaml` na raiz do projeto. Este arquivo é a **única fonte da verdade** para:

- Paths (endpoints, métodos HTTP, parâmetros)
- Schemas (request/response, tipos, required)
- Exemplos de payload

A documentação Swagger é gerada automaticamente a partir deste arquivo.

## 🧪 Testes

Os testes estão em `src/tests/`. Para executar:

```bash
npm test
```

Para executar com coverage:

```bash
npm test -- --coverage
```

## 🛠️ Tecnologias

- **Node.js** - Runtime JavaScript
- **TypeScript** - Tipagem estática
- **Express** - Framework HTTP
- **swagger-ui-express** - Documentação interativa
- **yaml** - Parser YAML para carregar o OpenAPI
- **Jest** - Framework de testes
- **ESLint + Prettier** - Qualidade de código

## 📝 Licença

ISC

