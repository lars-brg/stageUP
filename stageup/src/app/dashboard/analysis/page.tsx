'use client';

import { useState } from 'react';
import { ArrowTopRightOnSquareIcon, TrashIcon, BellIcon, EllipsisVerticalIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

type AnaliseCandidatura = {
    nome: string;
    curso: string;
    vaga: string;
    status: "Aprovado" | "Em análise" | "Reprovado" | "Não avaliado";
};

export default function AnaliseCandidaturas() {
    const [candidaturas] = useState<AnaliseCandidatura[]>([
        {
            nome: "João Silva",
            curso: "Engenharia da Computação",
            vaga: "Desenvolvedor Full Stack",
            status: "Aprovado",
        },
        {
            nome: "Maria Santos",
            curso: "Ciência da Computação",
            vaga: "Desenvolvedor Back-end",
            status: "Em análise",
        },
        {
            nome: "Pedro Oliveira",
            curso: "Engenharia Civil",
            vaga: "Designer de interfaces",
            status: "Reprovado",
        },
        {
            nome: "Pedro Oliveira",
            curso: "Engenharia Civil",
            vaga: "Designer de interfaces",
            status: "Reprovado",
        },
    ]);

    return (
        <div className='flex flex-col min-h-screen w-full'>
            <header className="top-0 w-full bg-astral-blue border-b border-gray-200 px-8 py-4">
                <div className="flex justify-between items-center">
                    <div className="flex gap-1">
                        <h1 className="text-4xl font-semibold text-stardust-white">Dashboard</h1>
                        <h3 className="font-semibold font-raleway text-stardust-white">/Candidatos</h3>
                    </div>
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
                                className="rounded-full"
                            />
                            <div>
                                <p className="text-sm font-semibold font-outfit text-stardust-white">momentus</p>
                                <p className="text-xs font-light font-raleway text-stardust-white">Eventos e cia</p>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <main className='p-8 grid grid-cols-1 md:grid-cols-4 gap-8'>
                <section className='flex flex-col gap-4'>
                    <CardMetrics title="Candidaturas totais" value={candidaturas.length} icon={ArrowTopRightOnSquareIcon} />
                    <CardMetrics title="Candidatos recomendados" value={candidaturas.length} icon={ArrowTopRightOnSquareIcon} />
                    <CardMetrics title="Currículos pendentes" value={candidaturas.length} icon={ArrowTopRightOnSquareIcon} />
                </section>

                <section className='border-2 border-astral-blue flex flex-col p-6 w-full md:col-start-2 md:col-end-5 rounded-2xl'>
                    <h3 className='text-xl font-semibold mb-2 font-outfit'>Visão Geral</h3>
                    <div className="space-y-3 mb-6">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-sm font-semibold text-gray-blue">Vagas mais procuradas</h3>
                            <button className="text-sm text-astral-blue hover:text-mid-blue cursor-pointer font-medium p-2 rounded-md hover:bg-card-blue bg-blue-interview">
                                Todas as vagas
                            </button>
                        </div>
                        <div className="space-y-2">
                            <div className="text-sm text-monlight-gray border-b border-gray-200">Desenvolvedor Back-end</div>
                            <div className="text-sm text-monlight-gray border-b border-gray-200">Desenvolvedor Front-end</div>
                            <div className="text-sm text-monlight-gray border-b border-gray-200">Design UI/UX</div>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
                        <CardCandidatesMetrics title="Contratações" value={candidaturas.filter(c => c.status === "Aprovado").length} icon={ArrowTopRightOnSquareIcon} type="Aprovados" />
                        <CardCandidatesMetrics title="Em análise" value={candidaturas.filter(c => c.status === "Em análise").length} icon={ArrowTopRightOnSquareIcon} type="Em análise" />
                        <CardCandidatesMetrics title="Reprovados" value={candidaturas.filter(c => c.status === "Reprovado").length} icon={ArrowTopRightOnSquareIcon} type="Reprovados" />
                        <CardCandidatesMetrics title="Não avaliados" value={candidaturas.filter(c => c.status === "Não avaliado").length} icon={ArrowTopRightOnSquareIcon} type="Não avaliado" />
                    </div>
                </section>

                <section className="bg-white rounded-xl p-4 border-2 border-astral-blue md:col-start-1 md:col-end-5">
                    <h3 className="text-lg font-semibold mb-4 font-outfit">Todas as candidaturas</h3>
                    <table className="w-full text-sm text-left">
                        <thead className="bg-slate-100 text-gray-blue font-medium">
                            <tr>
                                <th className="px-4 py-2">Nome</th>
                                <th className="px-4 py-2">Curso</th>
                                <th className="px-4 py-2">Vaga</th>
                                <th className="px-4 py-2">Status</th>
                                <th className="px-4 py-2">Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {candidaturas.map((candidato, idx) => (
                                <tr key={idx} className="hover:bg-slate-50 text-gray-blue font-medium font-raleway">
                                    <td className="px-4 py-2">{candidato.nome}</td>
                                    <td className="px-4 py-2">{candidato.curso}</td>
                                    <td className="px-4 py-2">{candidato.vaga}</td>
                                    <td className="px-4 py-2">
                                        <CandidateStatus title={candidato.status} type={candidato.status} />
                                    </td>
                                    <td className="px-4 py-2 flex gap-2">
                                        <button title="Visualizar" className="cursor-pointer">
                                            <EllipsisVerticalIcon className="w-5 h-5 text-midnight-navy" />
                                        </button>
                                        <button title="Mensagem" className="cursor-pointer">
                                            <TrashIcon className="w-5 h-5 text-red-delete" />
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

function CardMetrics({ title, value, icon: Icon }: { title: string; value: number; icon?: React.ElementType }) {
    return (
        <div className="bg-card-blue rounded-2xl p-4 flex flex-row items-center justify-between gap-2">
            <div className="flex flex-col">
                <h3 className="text-base font-semibold text-border-blue font-outfit">{title}</h3>
                <p className="text-2xl font-bold font-geist text-midnight-navy mt-0">{value}</p>
            </div>
            <div className="w-12 h-12 flex items-center justify-center">
                {Icon && <Icon className="w-6 h-6 text-border-blue" />}
            </div>
        </div>
    );
}

function CardCandidatesMetrics({ title, value, icon: Icon, type }: { title: string; value: number; icon?: React.ElementType; type?: string }) {

    const bgColor = type === "Aprovados" ? "bg-green-accepted" : type === "Em análise" ? "bg-yellow-await" : type === "Reprovados" ? "bg-red-expired" : "bg-monlight-gray";
    const textColor = type === "Aprovados" ? "text-green-typo-accepted" : type === "Em análise" ? "text-yellow-typo-await" : type === "Reprovados" ? "text-red-typo-rejected" : "text-gray-typo-non-evaluated";

    return (
        <div className={`rounded-2xl p-3 flex flex-row justify-between gap-2 ${bgColor}`}>
            <div className="flex flex-col">
                <h3 className={`text-base font-semibold font-outfit ${textColor}`}>{title}</h3>
                <p className="text-2xl font-bold font-geist text-midnight-navy">{value}</p>
            </div>
            <div className="w-6 h-6 flex items-end">
                {Icon && <Icon className={`w-6 h-6 ${textColor}`} />}
            </div>
        </div>
    );
}

function CandidateStatus({ title, type }: { title: string; type: string }) {

    const bgColor = type === "Aprovado" ? "bg-green-accepted" : type === "Em análise" ? "bg-yellow-await" : type === "Reprovado" ? "bg-red-expired" : "bg-monlight-gray";
    const textColor = type === "Aprovado" ? "text-green-typo-accepted" : type === "Em análise" ? "text-yellow-typo-await" : type === "Reprovado" ? "text-red-typo-rejected" : "text-gray-typo-non-evaluated";

    return (
        <div className={`p-1 rounded-md ${bgColor}`}>
            <p className={`text-base font-outfit text-center ${textColor}`}>{title}</p>
        </div>
    )
}