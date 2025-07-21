import React from "react";
// import Image from "next/image";
// import Link from "next/link";
import DashboardEmpresa from "@/components/dashboardEmpresa";
// import { BellIcon, ChartBarIcon, ClipboardDocumentListIcon, UsersIcon, EyeIcon, VideoCameraIcon, NoSymbolIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";

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