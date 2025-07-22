import React from "react";
import DashboardEmpresa from "@/components/dashboardEmpresa";

export default function Dashboard() {
    return (
    <DashboardEmpresa
      vagasAbertas={17}
      candidaturasRecebidas={150}
      entrevistasAgendadas={3}
      alertasDeVaga={[
        { titulo: "Desenvolvedor Back-end", status: "prestes" },
        { titulo: "Designer de sistemas", status: "expirada" },
        { titulo: "Designer de sistemas", status: "expirada" },
        { titulo: "Designer de sistemas", status: "expirada" },
      ]}
      candidatosRecentes={[
        {
          nome: "Ryam Lael Oliveira",
          instituicao: "UFC",
          vaga: "Desenvolvedor Back-end",
          status: "Entrevista",
        },
      ]}
    />
  );
}