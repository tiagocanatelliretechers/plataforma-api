import { Request, Response } from 'express';
import { layoutAreaLogadaMock } from '../mocks/ui-layout.mocks';
import { dashboardTelaMock } from '../mocks/ui-dashboard.mocks';
import {
  usuariosListaTelaMock,
  usuarioFormCriacaoTelaMock,
  getUsuarioFormEdicaoTelaMock,
  usuariosMock,
} from '../mocks/usuarios.mocks';
import {
  componentesListaTelaMock,
  componenteWizardTelaMock,
  componentesMock,
} from '../mocks/componentes.mocks';

export const uiController = {
  // GET /ui/layout
  getLayout: (_req: Request, res: Response) => {
    res.status(200).json(layoutAreaLogadaMock);
  },

  // GET /ui/dashboard
  getDashboard: (_req: Request, res: Response) => {
    res.status(200).json(dashboardTelaMock);
  },

  // GET /ui/usuarios/lista
  getUsuariosLista: (req: Request, res: Response) => {
    const { pagina = 0, tamanho = 20, busca, ativo } = req.query;

    let linhasFiltradas = [...usuariosMock];

    // Filtro por busca
    if (busca) {
      const termoBusca = String(busca).toLowerCase();
      linhasFiltradas = linhasFiltradas.filter(
        (u) =>
          u.login.toLowerCase().includes(termoBusca) ||
          u.nomeExibicao.toLowerCase().includes(termoBusca) ||
          u.email.toLowerCase().includes(termoBusca)
      );
    }

    // Filtro por ativo
    if (ativo !== undefined) {
      const isAtivo = ativo === 'true';
      linhasFiltradas = linhasFiltradas.filter((u) => u.ativo === isAtivo);
    }

    res.status(200).json({
      ...usuariosListaTelaMock,
      paginacao: {
        pagina: Number(pagina),
        tamanho: Number(tamanho),
        totalElementos: linhasFiltradas.length,
        totalPaginas: Math.ceil(linhasFiltradas.length / Number(tamanho)),
      },
      linhas: linhasFiltradas,
    });
  },

  // GET /ui/usuarios/form-criacao
  getUsuariosFormCriacao: (_req: Request, res: Response) => {
    res.status(200).json(usuarioFormCriacaoTelaMock);
  },

  // GET /ui/usuarios/:usuarioId/form-edicao
  getUsuariosFormEdicao: (req: Request, res: Response) => {
    const { usuarioId } = req.params;
    res.status(200).json(getUsuarioFormEdicaoTelaMock(usuarioId));
  },

  // GET /ui/componentes/lista
  getComponentesLista: (req: Request, res: Response) => {
    const { pagina = 0, tamanho = 20, busca, tipoComponente, dominioId } = req.query;

    let linhasFiltradas = [...componentesMock];

    // Filtro por busca
    if (busca) {
      const termoBusca = String(busca).toLowerCase();
      linhasFiltradas = linhasFiltradas.filter(
        (c) =>
          c.codigoComponente.toLowerCase().includes(termoBusca) ||
          c.nomeComponente.toLowerCase().includes(termoBusca)
      );
    }

    // Filtro por tipo
    if (tipoComponente) {
      linhasFiltradas = linhasFiltradas.filter((c) => c.tipoComponente === tipoComponente);
    }

    // Filtro por domínio (simulado)
    if (dominioId) {
      // Em um cenário real, filtraria pelo ID do domínio
      linhasFiltradas = linhasFiltradas.filter((c) =>
        c.dominio.toLowerCase().includes(String(dominioId).toLowerCase())
      );
    }

    res.status(200).json({
      ...componentesListaTelaMock,
      paginacao: {
        pagina: Number(pagina),
        tamanho: Number(tamanho),
        totalElementos: linhasFiltradas.length,
        totalPaginas: Math.ceil(linhasFiltradas.length / Number(tamanho)),
      },
      linhas: linhasFiltradas,
    });
  },

  // GET /ui/componentes/form-criacao
  getComponentesFormCriacao: (_req: Request, res: Response) => {
    res.status(200).json(componenteWizardTelaMock);
  },
};

