"use client";

import React, { useState } from "react";
import DashboardEstudante, { ProcessoSeletivo } from "@/components/dashboardAluno";

export default function DashboardEstudantePage() {
    const processosOriginais: ProcessoSeletivo[] = [
        {
            empresa: "Petrobras",
            vaga: "Desenvolvedor Back-end",
            status: "Contratado",
        },
        {
            empresa: "StageUP",   
            vaga: "Desenvolvedor Front-end",
            status: "Em análise",
        },
        {
            empresa: "Google",
            vaga: "Estagiário em QA",
            status: "Entrevista",
        },
    ];

    // Estados para controlar visibilidade e a remoção
    const [processosRemovidos, setProcessosRemovidos] = useState<number[]>([]);
    const [processosOcultos, setProcessosOcultos] = useState<number[]>([]);

    // remover os deletados e aplicar visibilidade
    const processosEmAndamento = processosOriginais
        .filter((_, index) => !processosRemovidos.includes(index))
        .map((processo, originalIndex) => ({
            ...processo,
            isVisible: !processosOcultos.includes(originalIndex)
        }));

    // Funções para controlar ações
    const toggleVisibilidade = (index: number) => {
        setProcessosOcultos(prev => 
            prev.includes(index) 
                ? prev.filter(i => i !== index)
                : [...prev, index]
        );
    };

    const removerProcesso = (index: number) => {
        setProcessosRemovidos(prev => [...prev, index]);
    };

    //altera os valores baseados nos processos visíveis
    const processosVisiveis = processosEmAndamento.filter(p => p.isVisible);
    const vagasAplicadas = processosVisiveis.length;
    const entrevistasAgendadas = processosVisiveis.filter(
        processo => processo.status === "Entrevista"
    ).length;

    return (
        <DashboardEstudante
            visitasPerfil={17}
            vagasAplicadas={vagasAplicadas}
            entrevistasAgendadas={entrevistasAgendadas}
            nomeEstudante="Juan"
            cursoEstudante="Eng. Civil"
            alertasDeVaga={[
                { titulo: "Desenvolvedor Back-end", status: "prestes" },
                { titulo: "Designer de sistemas", status: "nova" },
            ]}
            processosEmAndamento={processosVisiveis}
            onToggleVisibilidade={toggleVisibilidade}
            onRemoverProcesso={removerProcesso}
        />  
    );
}