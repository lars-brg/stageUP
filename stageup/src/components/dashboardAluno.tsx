"use client";

import { BellIcon, BriefcaseIcon, ClipboardDocumentListIcon, EyeIcon, UserGroupIcon } from "@heroicons/react/24/outline";
import React from "react";
import Image from 'next/image';

interface VagaAlerta {
    titulo: string;
    status: "prestes" | "nova";
}

export interface ProcessoSeletivo {
    empresa: string;
    vaga: string;
    status: "Contratado" | "Em análise" | "Entrevista";
    isVisible?: boolean;
}

interface DashboardEstudanteProps {
    visitasPerfil: number;
    vagasAplicadas: number;
    entrevistasAgendadas: number;
    alertasDeVaga: VagaAlerta[];
    processosEmAndamento: ProcessoSeletivo[];
    nomeEstudante: string;
    cursoEstudante: string;
    fotoEstudante?: string;
    onToggleVisibilidade?: (index: number) => void;
    onRemoverProcesso?: (index: number) => void;
}

export default function DashboardEstudante({
    visitasPerfil,
    vagasAplicadas,
    entrevistasAgendadas,
    alertasDeVaga,
    processosEmAndamento,
    nomeEstudante,
    cursoEstudante,
    fotoEstudante,
    onToggleVisibilidade,  // Adicionar
    onRemoverProcesso,     // Adicionar
}: DashboardEstudanteProps) {
    return (
        <div className="flex flex-col min-h-screen w-full">
            <header className="top-0 w-full bg-astral-blue border-b border-gray-200 px-8 py-4">
                <div className="flex justify-between items-center">
                    <h1 className="text-4xl font-semibold text-stardust-white">Dashboard</h1>
                    <div className="flex items-center space-x-4">
                        <button className="p-2 rounded-full bg-mid-blue hover:bg-gray-100 cursor-pointer">
                            <BellIcon className="w-6 h-6 text-stardust-white" />
                        </button>
                        <div className="flex items-center space-x-8">
                            <Image
                                src={fotoEstudante || "/assets/placeholder.jpg"}
                                alt="Profile"
                                width={48}
                                height={48}
                                className="w-12 h-12 rounded-full"
                            />
                            <div>
                                <p className="text-sm font-semibold font-outfit text-stardust-white">{nomeEstudante}</p>
                                <p className="text-xs font-light font-raleway text-stardust-white">{cursoEstudante}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <main className="flex-1 p-6 bg-slate-50">
                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                    <CardResumo titulo="Visitas ao seu perfil" valor={visitasPerfil} icone={EyeIcon} />
                    <CardResumo titulo="Vagas aplicadas" valor={vagasAplicadas} icone={ClipboardDocumentListIcon} />
                    <CardResumo titulo="Entrevistas agendadas" valor={entrevistasAgendadas} icone={UserGroupIcon} />
                </section>

                <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-white rounded-xl p-4 border-2 border-astral-blue">
                        <h3 className="text-lg font-semibold mb-2 font-outfit">Alertas de vagas na sua área</h3>
                        <ul className="text-sm font-outfit font-medium text-gray-blue">
                            {alertasDeVaga.map((vaga, idx) => (
                                <li
                                    key={idx}
                                    className="flex items-center justify-between py-2 border-b last:border-none border-gray-200"
                                >
                                    <span>{vaga.titulo}</span>
                                    <span
                                        className={`text-xs font-semibold px-2 py-1 rounded-full ${
                                            vaga.status === "nova"
                                                ? "bg-green-100 text-green-600"
                                                : "bg-yellow-100 text-yellow-600"
                                        }`}
                                    >
                                        {vaga.status === "nova" ? "Nova" : "Prestes a expirar"}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                <section className="mb-6">
                    <div className="bg-white rounded-xl p-4 border-2 border-astral-blue">
                        <h3 className="text-lg font-semibold mb-4 font-outfit">Processos Seletivos em andamento</h3>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm font-outfit">
                                <thead>
                                    <tr className="border-b border-gray-200 text-gray-600">
                                        <th className="text-left py-2 px-4">Empresa</th>
                                        <th className="text-left py-2 px-4">Vaga</th>
                                        <th className="text-left py-2 px-4">Status</th>
                                        <th className="text-left py-2 px-4">Ações</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {processosEmAndamento.map((processo, idx) => (
                                        <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50">
                                            <td className="py-3 px-4 font-medium">{processo.empresa}</td>
                                            <td className="py-3 px-4">{processo.vaga}</td>
                                            <td className="py-3 px-4">
                                                <span
                                                    className={`text-xs font-semibold px-2 py-1 rounded-full ${
                                                        processo.status === "Contratado"
                                                            ? "bg-green-100 text-green-600"
                                                            : processo.status === "Em análise"
                                                            ? "bg-yellow-100 text-yellow-600"
                                                            : "bg-blue-100 text-blue-600"
                                                    }`}
                                                >
                                                    {processo.status}
                                                </span>
                                            </td>
                                            <td className="py-3 px-4">
                                                <div className="flex gap-2">
                                                    <button 
                                                    onClick={() => onToggleVisibilidade?.(idx)}
                                                    className="p-1 bg-gray-800 text-white rounded hover:bg-gray-700">
                                                        <EyeIcon className="w-4 h-4" 
                                                    title={processo.isVisible ? "Ocultar" : "Mostrar"}
                                                    />
                                                    </button>
                                                    <button className="p-1 bg-blue-600 text-white rounded hover:bg-blue-700">
                                                        <BriefcaseIcon className="w-4 h-4" />
                                                    </button>
                                                    <button 
                                                        onClick={() => onRemoverProcesso?.(idx)}
                                                        className="p-1 bg-red-600 text-white rounded hover:bg-red-700"
                                                        title="Remover processo"
                                                    >
                                                        <ClipboardDocumentListIcon className="w-4 h-4" />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

// Componente reutilizado para os cards de resumo
interface CardResumoProps {
    titulo: string;
    valor: number;
    icone: React.ComponentType<{ className: string }>;
}

function CardResumo({ titulo, valor, icone: Icone }: CardResumoProps) {
    return (
        <div className="bg-white rounded-xl p-4 border-2 border-astral-blue">
            <div className="flex items-center gap-3">
                <div className="p-3 bg-astral-blue rounded-full">
                    <Icone className="w-6 h-6 text-white" />
                </div>
                <div>
                    <p className="text-sm font-medium text-gray-600 font-outfit">{titulo}</p>
                    <p className="text-3xl font-bold text-gray-900 font-geist">{valor}</p>
                </div>
            </div>
        </div>
    );
}