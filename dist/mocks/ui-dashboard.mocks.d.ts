export declare const dashboardTelaMock: {
    paginaId: string;
    titulo: string;
    subTitulo: string;
    cardsResumo: {
        idCard: string;
        titulo: string;
        descricao: string;
        valor: number;
        icone: string;
        configuravel: boolean;
    }[];
    graficoComponentesCriados: {
        titulo: string;
        destaque: {
            valorAtual: number;
            textoDestaque: string;
            variacaoPercentual: number;
            textoComparacao: string;
        };
        serie: {
            unidadeEixoX: string;
            unidadeEixoY: string;
            pontos: {
                mes: string;
                quantidade: number;
            }[];
        };
    };
    eventosRecentes: {
        titulo: string;
        descricao: string;
        itens: {
            idEvento: string;
            usuario: {
                nome: string;
                iniciais: string;
            };
            tipoEvento: string;
            descricaoCurta: string;
            componenteNome: string;
            haQuantoTempo: string;
            status: string;
        }[];
    };
    statusIntegracoes: {
        titulo: string;
        descricao: string;
        integracoes: {
            idIntegracao: string;
            nome: string;
            status: string;
            ultimaSincronizacao: string;
        }[];
    };
};
//# sourceMappingURL=ui-dashboard.mocks.d.ts.map