'use client';
import {
    ArrowTopRightOnSquareIcon,
    BellIcon,
    PlusIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline';
import React, { useState } from 'react';

interface Vaga {
    titulo: string;
}

export default function JobsVacancies() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [local, setLocal] = useState('');
    const [salarioRaw, setSalarioRaw] = useState('');
    const [dataInicio, setDataInicio] = useState('');
    const [linkCurriculo, setLinkCurriculo] = useState('');
    const [tipoVaga, setTipoVaga] = useState('');

    const [vagas, setVagas] = useState<Vaga[]>(() => {
        if (typeof window !== 'undefined') {
            const vagasSalvas = localStorage.getItem('vagasEmAberto');
            return vagasSalvas ? JSON.parse(vagasSalvas) : [];
        }
        return [];
    });

    const [vagasEncerradas, setVagasEncerradas] = useState<Vaga[]>(() => {
        if (typeof window !== 'undefined') {
            const encerradas = localStorage.getItem('vagasEncerradas');
            return encerradas ? JSON.parse(encerradas) : [];
        }
        return [];
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const salarioFloat = parseInt(salarioRaw || '0', 10) / 100;
        if (salarioFloat <= 0) {
            alert('Por favor, insira um salário válido.');
            return;
        }

        const novaVaga = {
            titulo,
            descricao,
            local,
            salarioRaw,
            dataInicio,
            linkCurriculo,
            tipoVaga,
        };

        const novasVagas = [...vagas, { titulo }];
        setVagas(novasVagas);
        localStorage.setItem('vagasEmAberto', JSON.stringify(novasVagas));

        limparFormulario();
        setIsModalOpen(false);
    };

    const encerrarVaga = (index: number) => {
        const vagaEncerrada = vagas[index];
        const novasVagas = [...vagas];
        novasVagas.splice(index, 1);

        const novasEncerradas = [...vagasEncerradas, vagaEncerrada];

        setVagas(novasVagas);
        setVagasEncerradas(novasEncerradas);
        localStorage.setItem('vagasEmAberto', JSON.stringify(novasVagas));
        localStorage.setItem('vagasEncerradas', JSON.stringify(novasEncerradas));
    };

    const formatarParaReal = (valor: string) => {
        const numeros = valor.replace(/\D/g, '');
        const numero = parseInt(numeros || '0', 10);
        return (numero / 100).toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        });
    };

    const limparFormulario = () => {
        setTitulo('');
        setDescricao('');
        setLocal('');
        setSalarioRaw('');
        setDataInicio('');
        setLinkCurriculo('');
        setTipoVaga('');
    };

    return (
        <div className="flex flex-col min-h-screen w-full">
            <header className="top-0 w-full bg-astral-blue border-b border-gray-200 px-8 py-4">
                <div className="flex justify-between items-center">
                    <div className="flex gap-1">
                        <h1 className="text-4xl font-semibold text-stardust-white">Dashboard</h1>
                        <h3 className="font-semibold font-raleway text-stardust-white">/Vagas</h3>
                    </div>
                    <div className="flex items-center space-x-4">
                        <button className="p-2 rounded-full bg-mid-blue hover:bg-gray-100 cursor-pointer">
                            <BellIcon className="w-6 h-6 text-stardust-white" />
                        </button>
                        <div className="flex items-center space-x-8">
                            <img
                                src="/Logo-momentus.png"
                                alt="Profile"
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

            <main className="flex flex-col p-6 gap-6">
                <section className="bg-white rounded-xl p-4 border-2 border-astral-blue">
                    <h3 className="text-lg font-semibold font-raleway">Vagas em aberto</h3>
                    <ul className="text-base font-outfit font-medium text-gray-blue space-y-2">
                        {vagas.length === 0 ? (
                            <li className='text-sm text-gray-400'>Nenhuma vaga aberta no momento.</li>) : (
                            vagas.map((vaga, idx) => (
                                <li
                                    key={idx}
                                    className="flex items-center gap-2 justify-between py-1 border-b last:border-none border-gray-200"
                                >
                                    {vaga.titulo}
                                    <div className="flex gap-4 items-center">
                                        <button
                                            onClick={() => encerrarVaga(idx)}
                                            className="text-sm text-red-600 hover:underline"
                                        >
                                            Encerrar vaga
                                        </button>
                                        <div className="flex gap-2 p-2 cursor-pointer rounded-md hover:bg-slate-100">
                                            <p className="font-medium">Ver detalhes</p>
                                            <ArrowTopRightOnSquareIcon className="w-6 h-6 text-gray-blue" />
                                        </div>
                                    </div>
                                </li>
                            ))
                        )}
                    </ul>
                </section>

                <section className="bg-white rounded-xl p-4 border-2 border-astral-blue">
                    <h3 className="text-lg font-semibold font-raleway">Vagas encerradas/Em análise</h3>
                    <ul className="text-base font-outfit font-medium text-gray-blue space-y-2">
                        {vagasEncerradas.length === 0 ? (
                            <li className="text-sm text-gray-400">Nenhuma vaga encerrada no momento.</li>
                        ) : (
                            vagasEncerradas.map((vaga, idx) => (
                                <li
                                    key={idx}
                                    className="flex items-center gap-2 justify-between py-1 border-b last:border-none border-gray-200"
                                >
                                    {vaga.titulo}
                                    <div className="flex gap-2 p-2 cursor-pointer rounded-md hover:bg-slate-100">
                                        <p className="font-medium">Ver detalhes</p>
                                        <ArrowTopRightOnSquareIcon className="w-6 h-6 text-gray-blue" />
                                    </div>
                                </li>
                            ))
                        )}
                    </ul>
                </section>

                <div className="justify-end flex -bottom-6 right-0">
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="bg-astral-blue text-white p-3 rounded-xl font-semibold cursor-pointer hover:bg-midnight-navy transition"
                    >
                        <div className="flex items-center gap-2 text-base">
                            <PlusIcon className="w-6 h-6" />
                            Criar nova vaga
                        </div>
                    </button>
                </div>

                {isModalOpen && (
                    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center">
                        <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-md relative">
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="absolute right-4 top-4 text-gray-500 hover:text-black rounded-md p-2 cursor-pointer"
                            >
                                <XMarkIcon className="w-6 h-6" />
                            </button>
                            <h2 className="text-xl font-bold mb-4 font-outfit">Cadastrar nova vaga</h2>
                            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                                <div>
                                    <label className="block text-sm font-medium mb-1">Título</label>
                                    <input
                                        value={titulo}
                                        onChange={(e) => setTitulo(e.target.value)}
                                        required
                                        placeholder="Ex: Desenvolvedor Front-end"
                                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-astral-blue"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Local da vaga</label>
                                    <input
                                        value={local}
                                        onChange={(e) => setLocal(e.target.value)}
                                        required
                                        placeholder="Ex: Salvador, Bahia"
                                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-astral-blue"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Salário</label>
                                    <input
                                        type="text"
                                        inputMode="numeric"
                                        value={formatarParaReal(salarioRaw)}
                                        onChange={(e) =>
                                            setSalarioRaw(e.target.value.replace(/\D/g, ''))
                                        }
                                        required
                                        className="w-full border border-gray-300 rounded-md px-3 py-2"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Data de início</label>
                                    <input
                                        type="date"
                                        value={dataInicio}
                                        onChange={(e) => setDataInicio(e.target.value)}
                                        required
                                        className="w-full border border-gray-300 rounded-md px-3 py-2"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Descrição</label>
                                    <textarea
                                        value={descricao}
                                        onChange={(e) => setDescricao(e.target.value)}
                                        required
                                        className="w-full border border-gray-300 rounded-md px-3 py-2"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Link do formulário</label>
                                    <input
                                        type="url"
                                        value={linkCurriculo}
                                        onChange={(e) => setLinkCurriculo(e.target.value)}
                                        required
                                        placeholder="Ex: https://forms.google.com"
                                        className="w-full border border-gray-300 rounded-md px-3 py-2"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Tipo da vaga</label>
                                    <div className="flex gap-4 mt-1">
                                        {['Presencial', 'Remota', 'Híbrida'].map((tipo) => (
                                            <label key={tipo} className="flex items-center gap-2 cursor-pointer">
                                                <input
                                                    type="radio"
                                                    name="tipoVaga"
                                                    value={tipo}
                                                    checked={tipoVaga === tipo}
                                                    onChange={(e) => setTipoVaga(e.target.value)}
                                                    required
                                                    className="accent-astral-blue cursor-pointer"
                                                />
                                                {tipo}
                                            </label>
                                        ))}
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    className="bg-astral-blue text-white py-2 px-4 rounded-md hover:bg-midnight-navy transition cursor-pointer"
                                >
                                    Cadastrar vaga
                                </button>
                            </form>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
}
