"use client";

import { BellIcon, ChartBarIcon, ChatBubbleLeftRightIcon, ClipboardDocumentListIcon, EyeIcon, NoSymbolIcon, UserGroupIcon, VideoCameraIcon } from "@heroicons/react/24/outline";
import React from "react";
import Image from 'next/image';

interface VagaAlerta {
    titulo: string;
    status: "expirada" | "prestes";
}

interface Candidato {
    nome: string;
    instituicao: string;
    vaga: string;
    status: string;
}

interface DashboardProps {
    vagasAbertas: number;
    candidaturasRecebidas: number;
    entrevistasAgendadas: number;
    alertasDeVaga: VagaAlerta[];
    candidatosRecentes: Candidato[];
}

export default function DashboardEmpresa({
    vagasAbertas,
    candidaturasRecebidas,
    entrevistasAgendadas,
    alertasDeVaga,
    candidatosRecentes,
}: DashboardProps) {
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
                                src="/Logo-momentus.png"
                                alt="Profile"
                                width={48}
                                height={48}
                                className="w-12 h-12 rounded-full"
                                />
                            <div>
                                <p className="text-sm font-semibold font-outfit text-stardust-white">momentus</p>
                                <p className="text-xs font-light font-raleway text-stardust-white">Eventos e cia</p>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <main className="flex-1 p-6 bg-slate-50">
                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                    <CardResumo titulo="Vagas em aberto" valor={vagasAbertas} icone={ChartBarIcon} />
                    <CardResumo titulo="Candidaturas recebidas" valor={candidaturasRecebidas} icone={ClipboardDocumentListIcon} />
                    <CardResumo titulo="Entrevistas agendadas" valor={entrevistasAgendadas} icone={UserGroupIcon} />
                </section>

                <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-white rounded-xl p-4 border-2 border-astral-blue">
                        <h3 className="text-lg font-semibold mb-2 font-outfit">Alertas de vagas</h3>
                        <ul className="text-sm font-outfit font-medium text-gray-blue">
                            {alertasDeVaga.map((vaga, idx) => (
                                <li
                                    key={idx}
                                    className="flex items-center justify-between py-1 border-b last:border-none border-gray-200"
                                >
                                    <span>{vaga.titulo}</span>
                                    <span
                                        className={`text-xs font-semibold px-2 py-1 rounded-full ${vaga.status === "expirada"
                                            ? "bg-red-100 text-red-600"
                                            : "bg-yellow-100 text-yellow-600"
                                            }`}
                                    >
                                        {vaga.status === "expirada" ? "Expirada" : "Prestes a expirar"}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-white rounded-xl p-4 border-2 border-astral-blue">
                        <h3 className="text-lg font-semibold mb-2 font-outfit">Ações rápidas</h3>
                        <ul className="text-sm font-outfit font-medium text-gray-blue space-y-2">
                            <li className="flex items-center gap-2 p-2 cursor-pointer rounded-md hover:bg-slate-100 justify-between py-1 border-b last:border-none border-gray-200">
                                Pesquisar candidatos
                                <UserGroupIcon className="w-6 h-6 text-gray-blue" />
                            </li>
                            <li className="flex items-center gap-2 p-2 cursor-pointer rounded-md hover:bg-slate-100 justify-between py-1 border-b last:border-none border-gray-200">
                                Ver mensagens
                                <ChatBubbleLeftRightIcon className="w-6 h-6 text-gray-blue" />
                            </li>
                        </ul>
                    </div>
                </section>

                <section className="bg-white rounded-xl p-4 border-2 border-astral-blue">
                    <h3 className="text-lg font-semibold mb-4 font-outfit">Candidatos recentes</h3>
                    <table className="w-full text-sm text-left">
                        <thead className="bg-slate-100 text-gray-blue font-medium">
                            <tr>
                                <th className="px-4 py-2">Nome</th>
                                <th className="px-4 py-2">Instituição</th>
                                <th className="px-4 py-2">Vaga</th>
                                <th className="px-4 py-2">Status</th>
                                <th className="px-4 py-2">Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {candidatosRecentes.map((candidato, idx) => (
                                <tr key={idx} className="hover:bg-slate-50 text-gray-blue font-medium font-raleway">
                                    <td className="px-4 py-2">{candidato.nome}</td>
                                    <td className="px-4 py-2">{candidato.instituicao}</td>
                                    <td className="px-4 py-2">{candidato.vaga}</td>
                                    <td className="px-4 py-2">
                                        <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs">
                                            {candidato.status}
                                        </span>
                                    </td>
                                    <td className="px-4 py-2 flex gap-2">
                                        <button title="Visualizar" className="rounded-md bg-midnight-navy p-0.5 cursor-pointer">
                                            <EyeIcon className="w-5 h-5 text-stardust-white" />
                                        </button>
                                        <button title="Mensagem" className="rounded-md bg-midnight-navy p-0.5 cursor-pointer">
                                            <VideoCameraIcon className="w-5 h-5 text-stardust-white" />
                                        </button>
                                        <button title="Rejeitar"className="rounded-md bg-red-600 p-0.5 cursor-pointer">
                                            <NoSymbolIcon className="w-5 h-5 text-stardust-white" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>
            </main>
        </div>
    );
}

function CardResumo({ titulo, valor, icone: Icon }: { titulo: string; valor: number; icone?: React.ElementType }) {
    return (
        <div className="bg-white rounded-4xl p-4 border-2 border-astral-blue flex flex-row items-center gap-5">
            <div className="rounded-full bg-astral-blue w-12 h-12 flex items-center justify-center">
                {Icon && <Icon className="w-6 h-6 text-white" />}
            </div>
            <div className="flex flex-col">
                <h3 className="text-base font-semibold text-gray-blue font-outfit">{titulo}</h3>
                <p className="text-2xl font-bold font-geist text-midnight-navy mt-0">{valor}</p>
            </div>
        </div>
    );
}
